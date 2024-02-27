function hitungTargetProfit() {
    var hargaAsetAwal = parseFloat(document.getElementById('harga_aset').value.replace(/,/g, ''));
    var asetDimiliki = parseFloat(document.getElementById('aset_dimiliki').value.replace(/,/g, ''));
    var persen = parseFloat(document.getElementById('persen').value);
    var targetResult = document.getElementById('targetResult');

    var cariPersen = hargaAsetAwal * persen / 100;
    var value1 = hargaAsetAwal + cariPersen;

    var cariPersen2 = asetDimiliki * persen / 100;
    var value2 = asetDimiliki + cariPersen2;

    var resultHTML = "======Rekomendasi======<br />";
    resultHTML += "Harga Aset Saat di Beli: Rp. " + formatNumber(hargaAsetAwal) + "<br />";
    resultHTML += "Aset dimiliki: Rp. " + formatNumber(asetDimiliki) + "<br />";
    resultHTML += "Persentase target profit: " + persen.toFixed(2) + "%<br />";

    resultHTML += "Jual aset di harga: Rp. " + formatNumber(value1) + " untuk mendapat profit sebesar: " + persen.toFixed(2) + "%<br />";
    resultHTML += "Total Aset jika dijual: Rp. " + formatNumber(cariPersen2 + asetDimiliki) + "<br />";
    resultHTML += "Profit: Rp. " + formatNumber(cariPersen2) + "<br />";

    targetResult.innerHTML = resultHTML;
}

function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
