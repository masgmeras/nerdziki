var numberOfTiles = 30; // Liczba kafli do wygenerowania
var tilesContainer = document.getElementById('tiles-container');



fetch('results.json') // Plik z którego bieremy
  .then(response => response.json())
  .then(data => {
    // console.log(data);


    for (var i = 0; i < numberOfTiles; i++) {
    try {
      const AdresUrl = data[i].addressUrl;
      console.log('adres URL:', AdresUrl);

      var tile = document.createElement('div');
      tile.className = 'tile';
      var image = document.createElement('img');
      image.src = 'https://gazetki-promocyjne.net.pl/images/leaflets/biedronka-gazetka-14818212531686340621737_900_1412_big.jpg';
      tilesContainer.appendChild(tile);


      let img = document.createElement('img');
      img.src =
        'https://media.geeksforgeeks.org/wp-content/uploads/20190529122828/bs21.png';
      document.getElementById('body').appendChild(img);
    }
    catch (error) {
      console.error('Błąd odczytu:', error);
    }

    }})

//tilesContainer.appendChild(tile);

