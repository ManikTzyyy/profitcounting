function hitungProfit() {
    var hargaAwal = parseFloat(document.getElementById('harga_awal').value.replace(/,/g, ''));
    var hargaAkhir = parseFloat(document.getElementById('harga_akhir').value.replace(/,/g, ''));
    var hargaBeli = parseFloat(document.getElementById('harga_beli').value.replace(/,/g, ''));
    var resultContainer = document.getElementById('resultContainer');

    var selisih = hargaAkhir - hargaAwal;
    var presentase = (selisih / hargaAwal) * 100;

    var resultHTML = "============= ";

    if (hargaAwal < hargaAkhir) {
        resultHTML += "Profit =============<br>";
        var profit = (hargaBeli * presentase / 100).toFixed(2);
        var total = (hargaBeli + parseFloat(profit)).toFixed(2);
        resultHTML += "Harga Aset Saat Beli  : Rp. " + formatNumber(hargaAwal) + "<br>";
        resultHTML += "Harga Aset Terbaru  : Rp. " + formatNumber(hargaAkhir) + "<br>";
        resultHTML += "Beli aset : Rp. " + formatNumber(hargaBeli) + "<br>";
        resultHTML += "Presentase Kenaikan : " + presentase.toFixed(2) + "%<br>";
        resultHTML += "Total Aset Jika Dijual : Rp. " + formatNumber(total) + "<br>";
        resultHTML += "Mendapat Profit : Rp. " + formatNumber(profit) + "<br>";
    } else {
        resultHTML += "Rugi =============<br>";
        var rugi = Math.abs(hargaBeli * presentase / 100).toFixed(2);
        var total = (hargaBeli - parseFloat(rugi)).toFixed(2);
        resultHTML += "Harga Aset Saat Beli  : Rp. " + formatNumber(hargaAwal) + "<br>";
        resultHTML += "Harga Aset Terbaru  : Rp. " + formatNumber(hargaAkhir) + "<br>";
        resultHTML += "Beli aset : Rp. " + formatNumber(hargaBeli) + "<br>";
        resultHTML += "Presentase Penurunan : " + presentase.toFixed(2) + "%<br>";
        resultHTML += "Total Aset Jika Dijual : Rp. " + formatNumber(total) + "<br>";
        resultHTML += "Rugi : Rp. " + formatNumber(rugi) + "<br>";
    }

    resultContainer.innerHTML = resultHTML;
}

function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
