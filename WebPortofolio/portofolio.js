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
    // klik pada tautan navigasi
    document.querySelectorAll('nav a').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        // Gulir ke elemen dengan efek halus
        window.scrollTo({
          top: targetSection.offsetTop - document.querySelector('header').offsetHeight,
          behavior: 'smooth'
        });
      });
    });