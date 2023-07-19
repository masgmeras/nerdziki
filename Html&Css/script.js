var numberOfTiles = 100; // Liczba kafli do wygenerowania
    var tilesContainer = document.getElementById('tiles-container');

    for (var i = 0; i < numberOfTiles; i++) {
      var tile = document.createElement('div');
      tile.className = 'tile';
      
      fetch('results.json') // Plik z którego bieremy
      .then(response => response.json())
      .then(data => {
      try {
      const AdresUrl = data[i].addressUrl;
      console.log('adres URL:', AdresUrl);
      tile.textContent= 'kafel';
      } 
      catch (error) {
      console.error('Błąd odczytu:', error);
      }
      })

      tilesContainer.appendChild(tile);
    }
