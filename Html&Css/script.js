var numberOfTiles = 30; // Liczba kafli do wygenerowania
var tilesContainer = document.getElementById('tiles-container');

/*
 let img = document.createElement('img');
      img.src = 'https://cdn-useast1.kapwing.com/collections/trollface_meme_maker_5xnxj_thumbnail.jpg?Expires=1690689604&GoogleAccessId=dev-sa-videoprocessing%40kapwing-dev.iam.gserviceaccount.com&Signature=VNkzVMVt5vgAbIuq5xL7Lg%2BP6WI54v%2FJ%2FwhOw5RVgK9QlkvP9LED14ZTrGzjdxCNscRtjYZzZhnrQ30vgfzo6t0LIEqcMu7LS6SoCJIfvqTXERpCxARDDc08C8FhRDqIvfJgqTlpz%2BM3R%2F5kR67%2BD3KzGm%2BqS3YzAnlk4KO2N9%2B%2FWHV8ahcpkcMlGRHnlWg8oQARpMoFktlo5HorEkXwTryzbdvb6NyQyFo%2B6dTWU6pc10p45h34%2FkMN7tNORF%2FFMWGsmkD1tH1j4yYXqKTHZqFS7A%2BL9aAtglvXYekUr2LCTSxnmt3fjgKAxH4hql%2Bq2Z6iQrXlgfpxDrocXxI9oA%3D%3D';
      tilesContainer.appendChild(img);
*/

//logMovies();
async function logMovies() {
  const response = await fetch('results.json');
  const movies = await response.json();
  console.log(movies);
  
   for (var i = 0; i < movies.length; i++) {
	   console.log(movies[i])
	   
	   let img = document.createElement('img');
	    img.src = movies[i].addressUrl;
		var tile = document.createElement('div');
		tile.className = 'tile';
		tile.appendChild(img)
		 img.src ='https://cdn-useast1.kapwing.com/collections/trollface_meme_maker_5xnxj_thumbnail.jpg?Expires=1690689604&GoogleAccessId=dev-sa-videoprocessing%40kapwing-dev.iam.gserviceaccount.com&Signature=VNkzVMVt5vgAbIuq5xL7Lg%2BP6WI54v%2FJ%2FwhOw5RVgK9QlkvP9LED14ZTrGzjdxCNscRtjYZzZhnrQ30vgfzo6t0LIEqcMu7LS6SoCJIfvqTXERpCxARDDc08C8FhRDqIvfJgqTlpz%2BM3R%2F5kR67%2BD3KzGm%2BqS3YzAnlk4KO2N9%2B%2FWHV8ahcpkcMlGRHnlWg8oQARpMoFktlo5HorEkXwTryzbdvb6NyQyFo%2B6dTWU6pc10p45h34%2FkMN7tNORF%2FFMWGsmkD1tH1j4yYXqKTHZqFS7A%2BL9aAtglvXYekUr2LCTSxnmt3fjgKAxH4hql%2Bq2Z6iQrXlgfpxDrocXxI9oA%3D%3D'
		tilesContainer.appendChild(tile);
   }
}

fetch('results.json') // Plik z którego bieremy
  .then(response => response.json())
  .then(data => {


    for (var i = 0; i < movies.length; i++) {
	   console.log(movies[i])
	   
	   let img = document.createElement('img');
	    img.src = movies[i].addressUrl;
		var tile = document.createElement('div');
		tile.className = 'tile';
		tile.appendChild(img)
		 img.src ='https://cdn-useast1.kapwing.com/collections/trollface_meme_maker_5xnxj_thumbnail.jpg?Expires=1690689604&GoogleAccessId=dev-sa-videoprocessing%40kapwing-dev.iam.gserviceaccount.com&Signature=VNkzVMVt5vgAbIuq5xL7Lg%2BP6WI54v%2FJ%2FwhOw5RVgK9QlkvP9LED14ZTrGzjdxCNscRtjYZzZhnrQ30vgfzo6t0LIEqcMu7LS6SoCJIfvqTXERpCxARDDc08C8FhRDqIvfJgqTlpz%2BM3R%2F5kR67%2BD3KzGm%2BqS3YzAnlk4KO2N9%2B%2FWHV8ahcpkcMlGRHnlWg8oQARpMoFktlo5HorEkXwTryzbdvb6NyQyFo%2B6dTWU6pc10p45h34%2FkMN7tNORF%2FFMWGsmkD1tH1j4yYXqKTHZqFS7A%2BL9aAtglvXYekUr2LCTSxnmt3fjgKAxH4hql%2Bq2Z6iQrXlgfpxDrocXxI9oA%3D%3D'
		tilesContainer.appendChild(tile);
   }

    }})

//tiles*Container.appendChild(tile);

