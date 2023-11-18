function kirimForm() {
    var form = document.getElementById("formKritikSaran");
    var kritik = form.elements["kritik"].value;
    var saran = form.elements["saran"].value;

    if (kritik === "" && saran === "") {
        alert("Harap isi kolom kritik atau saran sebelum mengirimkan.");
    } else {
        var konfirmasi = confirm("Anda yakin ingin mengirimkan kritik dan saran?");
        if (konfirmasi) {
            // Simulasikan pengiriman data ke server (kirim AJAX, dsb.)
            alert("Terima kasih atas kritik dan saran Anda!");
            form.reset(); // Reset formulir setelah pengiriman
        }
    }
}
