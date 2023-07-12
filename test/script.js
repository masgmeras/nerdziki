document.addEventListener('DOMContentLoaded', () => {
  const plikObrazu = 'test.jpg';
  
  // Wywołaj funkcję odczytującą napisy po załadowaniu strony
  odczytajNapisy(plikObrazu);
});

async function odczytajNapisy(plikObrazu) {
  const cv = await cvReady();

  // Wczytaj obraz
  const image = await cv.imreadAsync(plikObrazu);


  // Wykorzystaj bibliotekę Tesseract.js do odczytu napisów
  const { createWorker } = Tesseract;
  const worker = createWorker();

  await worker.load();
  await worker.loadLanguage('eng');
  await worker.initialize('eng');
  const { data: { text } } = await worker.recognize(gray.getBuffer());
  await worker.terminate();

  // Wyświetl odczytany tekst na stronie
  const outputElement = document.getElementById('output');
  outputElement.textContent = text;
}

function cvReady() {
  return new Promise((resolve, reject) => {
    cv.onRuntimeInitialized = () => resolve(cv);
  });
}