const tombolProduk = document.querySelector("#home button");

tombolProduk.addEventListener("click", function () {
    document.querySelector("#produk").scrollIntoView({
        behavior: "smooth"
    });
});

let produkDipilih = "";

function bukaForm(namaProduk) {
    produkDipilih = namaProduk;

    document.getElementById("namaProduk").textContent =
        "Produk: " + namaProduk;

    document.getElementById("formPesanan").style.display = "flex";
}

function tutupForm() {
    document.getElementById("formPesanan").style.display = "none";
}

function kirimPesanan() {
    const nama = document.getElementById("nama").value;
    const jumlah = document.getElementById("jumlah").value;

    if (nama === "" || jumlah === "") {
        alert("Nama dan jumlah pesanan harus diisi!");
        return;
    }

    const nomor = "6281234567890";

    const pesan =
        "Halo, saya " + nama +
        ". Saya ingin memesan " + produkDipilih +
        " sebanyak " + jumlah + " porsi.";

    const url =
        "https://wa.me/" + nomor +
        "?text=" + encodeURIComponent(pesan);

    window.open(url, "_blank");
}