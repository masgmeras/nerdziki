from selenium import webdriver
from selenium.webdriver.common.by import By
import json
import time
import easyocr
import fitz
import os
import requests
from bs4 import BeautifulSoup

TEMP_PDF_FILENAME = 'temp_gazetka.pdf'
OUTPUT_FILE_NAME = "generate_urls.json"
LEAFLETS_LIST = [ 
    {'brand': 'lidl', 'brand_url': 'https://www.lidl.pl/informacje-dla-klienta/nasze-gazetki'},
    {'brand': 'kaufland', 'brand_url': 'https://www.kaufland.pl/gazeta-reklamowa.html'}
]
options = webdriver.ChromeOptions() 
options.add_argument('--headless')  
driver = webdriver.Chrome(options=options) # Inicjalizacja przeglądarki w trybie bezokienkowym, options=options
#reader = easyocr.Reader(['pl'], gpu=False)


def find_urls_with_class(leaflet):
    driver.get(leaflet['brand_url']) # Otwórz stronę dla danego brandu
    time.sleep(3) #czekanie 3s na zaladowanie strony
    #KAUFLAND w konsoli F12 -> $x('//div[@data-download-url]')
    wrapper = driver.find_elements(By.XPATH, "//div[@data-download-url]")
    for w in wrapper:
        pdf = [w]
        ahref = w.find_elements(By.XPATH, "a[contains(@class, 'm-flyer-tile')]")
        thumbnail = w.find_elements(By.XPATH, "a/div/figure/img")
        createJsonModel(leaflet, ahref[0].get_attribute('href'), pdf[0].get_attribute('data-download-url'), thumbnail[0].get_attribute('src'))
    #LIDL
    wrapper = driver.find_elements(By.XPATH, "//div[contains(@class, 'flyer__content')]")
    for w in wrapper:
        pdf = w.find_elements(By.XPATH, "a")
        ahref = w.find_elements(By.XPATH, "div[contains(@class, 'flyer__image')]/a")
        thumbnail = w.find_elements(By.XPATH, "div[contains(@class, 'flyer__image')]/a/img")
        createJsonModel(leaflet, ahref[0].get_attribute('href'), pdf[0].get_attribute('href'), thumbnail[0].get_attribute('src'))

def createJsonModel(leaflet, pageUrl, pdfUrl, thumbnailUrl):
    response = requests.get(pdfUrl)
    file = open(TEMP_PDF_FILENAME, "wb")
    file.write(response.content)
    file.close()    
    doc = fitz.open(TEMP_PDF_FILENAME)
    
    for page in doc:
        pix = page.get_pixmap(matrix=fitz.Identity, dpi=None,
                          colorspace=fitz.csRGB, clip=None, alpha=True, annots=True)
        pix.save("samplepdfimage-%i.png" % page.number)  # save file
        result = reader.readtext("samplepdfimage-%i.png" % page.number, detail = 0, paragraph=True)
        json.dump(createOcrParsedPageItem(leaflet, pageUrl, pdfUrl, thumbnailUrl, page, result), text_file)
        text_file.write(",")   
        os.remove("samplepdfimage-%i.png" % page.number)
    doc.close()
    os.remove(TEMP_PDF_FILENAME)

def createOcrParsedPageItem(leaflet, pageUrl, pdfUrl, thumbnailUrl, page, result):
    dictionary = {
        "brand": leaflet['brand'],
        "pageUrl": pageUrl,
        "pdfUrl": pdfUrl,
        "thumbnailUrl": thumbnailUrl,
        "pageNo": page.number + 1,
        "ocrResult": result
        }
    return dictionary


def handleKauflandPage():
    driver.get('https://www.kaufland.pl/gazeta-reklamowa.html') # Otwórz stronę dla danego brandu
    time.sleep(3) #czekanie 3s na zaladowanie strony
    #KAUFLAND w konsoli F12 -> $x('//div[@data-download-url]')
    wrapper = driver.find_elements(By.XPATH, "//a[contains(@class, 'm-flyer-tile__link')]")

    flierlist = [];
    for w in wrapper:
        flierlist.append("https://endpoints.leaflets.schwarz/v4/flyer?flyer_identifier={}".format(w.get_attribute('href').split("/")[4:5][0]))    
        print("https://endpoints.leaflets.schwarz/v4/flyer?flyer_identifier={}".format(w.get_attribute('href').split("/")[4:5][0]))


    with open(OUTPUT_FILE_NAME, "w") as text_file: 
        text_file.write("[")
        for f in flierlist:
            driver.get(f) # Otwórz stronę dla danego brandu
            time.sleep(1) #czekanie 3s na zaladowanie strony

            soup = BeautifulSoup(driver.page_source, features="lxml")
            dict_from_json = json.loads(soup.find("body").text)
            print('#')
            for p in dict_from_json.get('flyer').get('pages'):
                json.dump(createOcrParsedPageItem2(p, dict_from_json.get('flyer')), text_file)
                text_file.write(",") 
        text_file.write("]")

def createOcrParsedPageItem2(p, dictFlier):
    dictionary = {
        "brand": dictFlier.get("clientLocale"),
        "pageUrl": dictFlier.get("flyerUrlAbsolute"),
        "pdfUrl": dictFlier.get("pdfUrl"),
        "thumbnailUrl": p.get("thumbnail"),
        "pageNo": p.get("number"),
        "ocrResult": p.get("keyWords")
        }
    return dictionary
    
    
handleKauflandPage();

    
#https://endpoints.leaflets.schwarz/v4/flyer?flyer_identifier=PL_pl_KDZ_5660_PL32-LFT&region_id=5660&region_code=5660
driver.quit() # Zamknij przeglądarkę
    