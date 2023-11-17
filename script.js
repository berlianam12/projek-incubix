// Contoh data awal
let dataBarang = [];

function tambahData() {
    const namaBarang = document.getElementById('namaBarang').value;
    const hargaBarang = document.getElementById('hargaBarang').value;

    if (namaBarang && hargaBarang) {
        const barang = {
            id: Date.now(),
            nama: namaBarang,
            harga: hargaBarang
        };

        dataBarang.push(barang);
        tampilkanData();
        resetForm();
    }
}

function hapusData(id) {
    dataBarang = dataBarang.filter(barang => barang.id !== id);
    tampilkanData();
}

function tampilkanData() {
    const daftarBarang = document.getElementById('daftarBarang');
    daftarBarang.innerHTML = '';

    dataBarang.forEach(barang => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <strong>${barang.nama}</strong> - Rp ${barang.harga}
            <button onclick="hapusData(${barang.id})">Hapus</button>
        `;
        daftarBarang.appendChild(listItem);
    });
}

function resetForm() {
    document.getElementById('formBarang').reset();
}

// Menampilkan data awal
tampilkanData();
