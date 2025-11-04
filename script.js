const inputNama = document.querySelector('#input-nama');
const inputKelas = document.querySelector('#input-kelas');
const inputDeskripsi = document.querySelector('#input-deskripsi');
const inputWarna = document.querySelector('#input-warna');
const inputImage = document.querySelector('#input-image');

const previewNama = document.querySelector('#preview-nama');
const previewKelas = document.querySelector('#preview-kelas');
const previewDeskripsi = document.querySelector('#preview-deskripsi');
const previewImage = document.querySelector('#preview-image');
const previewArea = document.querySelector('#preview-area');

const DEFAULTS = {
nama: 'Nama Siswa',
kelas: 'Kelas / Peran',
deskripsi: 'Deskripsi singkat akan muncul di sini ketika Anda mengetik.'
};

function updateText(inputEl, previewEl, defaultText){
const val = inputEl.value.trim();
if(val.length === 0){
previewEl.textContent = defaultText;
} else {
previewEl.textContent = val;
}
}

inputNama.addEventListener('input', () => {
updateText(inputNama, previewNama, DEFAULTS.nama);
});


inputKelas.addEventListener('input', () => {
updateText(inputKelas, previewKelas, DEFAULTS.kelas);
});


inputDeskripsi.addEventListener('input', () => {
updateText(inputDeskripsi, previewDeskripsi, DEFAULTS.deskripsi);
});


inputWarna.addEventListener('input', () => {
const color = inputWarna.value;
const card = previewArea.querySelector('.card');
if(card) card.style.border = `3px solid ${color}`;
});

inputImage.addEventListener('input', () => {
const url = inputImage.value.trim();
if(url === ''){
previewImage.style.display = 'none';
previewImage.src = '';
} else {
previewImage.src = url;
previewImage.style.display = 'block';
previewImage.onerror = () => {
previewImage.style.display = 'none';
previewImage.src = '';
};
}
});


updateText(inputNama, previewNama, DEFAULTS.nama);
updateText(inputKelas, previewKelas, DEFAULTS.kelas);
updateText(inputDeskripsi, previewDeskripsi, DEFAULTS.deskripsi);