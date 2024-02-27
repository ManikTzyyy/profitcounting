document.addEventListener("DOMContentLoaded", function() {
  const coins = ['btc', 'usdt', 'eth', 'ckb', 'doge','rndr','sol','bnb','ada','dot','avax','vet','uni','link'];
  coins.forEach(coin => {
      fetchPrice(coin);
      setInterval(() => fetchPrice(coin), 5000);
  });
});

function fetchPrice(coin) {
  fetch(`https://indodax.com/api/ticker/${coin}idr`)
    .then(response => response.json())
    .then(data => {
      const lastPrice = data.ticker.last;
      const formattedPrice = new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(lastPrice);
      document.getElementById(`${coin}-price`).innerText = formattedPrice;
    })
    .catch(error => {
      console.error('Terjadi kesalahan:', error);
    });
}
