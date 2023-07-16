from selenium import webdriver
from selenium.webdriver.common.by import By
import json
import time
import easyocr
import fitz
import os
import requests

TEMP_PDF_FILENAME = 'temp_gazetka.pdf'
OUTPUT_FILE_NAME = "generate_urls.json"
LEAFLETS_LIST = [ 
    {'brand': 'lidl', 'brand_url': 'https://www.lidl.pl/informacje-dla-klienta/nasze-gazetki'},
    {'brand': 'kaufland', 'brand_url': 'https://www.kaufland.pl/gazeta-reklamowa.html'}
]
options = webdriver.ChromeOptions() 
options.add_argument('--headless')  
driver = webdriver.Chrome(options=options) # Inicjalizacja przeglądarki w trybie bezokienkowym, options=options
reader = easyocr.Reader(['pl'], gpu=False)


def find_urls_with_class(leaflet):
    driver.get(leaflet['brand_url']) # Otwórz stronę dla danego brandu
    time.sleep(3) #czekanie 3s na zaladowanie strony
    #KAUFLAND w konsoli F12 -> $x('//div[@data-download-url]')
    wrapper = driver.find_elements(By.XPATH, "//div[@data-download-url]")
    for w in wrapper:
        pdf = [w]
        ahref = w.find_elements(By.XPATH, "a[contains(@class, 'm-flyer-tile')]")
        createJsonModel(leaflet, ahref[0].get_attribute('href'), pdf[0].get_attribute('data-download-url'))
    #LIDL
    wrapper = driver.find_elements(By.XPATH, "//div[contains(@class, 'flyer__content')]")
    for w in wrapper:
        pdf = w.find_elements(By.XPATH, "a")
        ahref = w.find_elements(By.XPATH, "div[contains(@class, 'flyer__image')]/a")
        createJsonModel(leaflet, ahref[0].get_attribute('href'), pdf[0].get_attribute('href'))

def createJsonModel(leaflet, pageUrl, pdfUrl):
    response = requests.get(pdfUrl)
    file = open(TEMP_PDF_FILENAME, "wb")
    file.write(response.content)
    file.close()    
    doc = fitz.open(TEMP_PDF_FILENAME)
    
    for page in doc:
        pix = page.get_pixmap(matrix=fitz.Identity, dpi=None,
                          colorspace=fitz.csRGB, clip=None, alpha=True, annots=True)
        pix.save("samplepdfimage-%i.png" % page.number)  # save file
        result = reader.readtext("samplepdfimage-%i.png" % page.number, detail = 0)
        json.dump(createOcrParsedPageItem(leaflet, pageUrl, pdfUrl, page, result), text_file)
        text_file.write(",")   
        os.remove("samplepdfimage-%i.png" % page.number)
    doc.close()
    os.remove(TEMP_PDF_FILENAME)

def createOcrParsedPageItem(leaflet, pageUrl, pdfUrl, page, result):
    dictionary = {
        "brand": leaflet['brand'],
        "pageUrl": pageUrl,
        "pdfUrl": pdfUrl,
        "pageNo": page.number + 1,
        "ocrResult": result
        }
    return dictionary

with open(OUTPUT_FILE_NAME, "w") as text_file:
    text_file.write("[")
    for leaflet in LEAFLETS_LIST:
        find_urls_with_class(leaflet)
    text_file.write("]")
    
driver.quit() # Zamknij przeglądarkę
    