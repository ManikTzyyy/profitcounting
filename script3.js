function hitungNilaiPersen() {
    var nilai = parseFloat(document.getElementById('nilai').value.replace(/,/g, ''));
    var persen = parseFloat(document.getElementById('persen').value);
    var persenResult = document.getElementById('persenResult');

    var hasil = (nilai * persen / 100).toFixed(2);

    var resultHTML = "Nilai input: Rp. " + formatNumber(nilai) + "<br />";
    resultHTML += "Nilai input presentase: " + persen.toFixed(2) + "%<br />";
    resultHTML += hasil + " adalah " + persen.toFixed(2) + "%" + " dari Rp. " + formatNumber(nilai);

    persenResult.innerHTML = resultHTML;
}

function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
