function showPopup() {
    // Tampilkan pop-up
    var popup = document.getElementById("popup");
    popup.style.display = "block";

    // Tunda selama 2 detik
    setTimeout(function() {
        // Sembunyikan pop-up
        popup.style.display = "none";

        // Arahkan ke halaman belajar.html
        window.location.href = "belajar.html";
    }, 2000);
}

document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Mencegah form untuk melakukan refresh halaman

    // Tangkap data form
    var email = document.getElementById("email").value;
    var nama = document.getElementById("nama").value;
    var kota = document.getElementById("kota").value;
    var metode_pembayaran = document.getElementById("metode_pembayaran").value;
    var kode_promo = document.getElementById("kode_promo").value;

    // Konfigurasi Firebase
    var firebaseConfig = {
        apiKey: "YOUR_API_KEY",
        authDomain: "YOUR_AUTH_DOMAIN",
        projectId: "YOUR_PROJECT_ID",
        storageBucket: "YOUR_STORAGE_BUCKET",
        messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
        appId: "YOUR_APP_ID"
    };
    // Inisialisasi Firebase
    firebase.initializeApp(firebaseConfig);

    // Kirim data ke Firebase Realtime Database
    firebase.database().ref("form").push({
        email: email,
        nama: nama,
        kota: kota,
        metode_pembayaran: metode_pembayaran,
        kode_promo: kode_promo
    }, function(error) {
        if (error) {
            // Jika terjadi error
            console.log(error);
        } else {
            // Jika berhasil
            // Tampilkan pesan setelah berhasil submit
            alert("Form berhasil disubmit!");
            // Redirect ke halaman belajar.html
            window.location.href = "belajar.html";
        }
    });
});