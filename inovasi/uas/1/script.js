const quizData = [
    { q: "Hakikat inovasi dalam dunia pendidikan bukan sekadar mengganti perangkat lama dengan teknologi baru, melainkan:", a: "b", options: ["a", "b", "c", "d", "e"] },
    { q: "Karakteristik utama dari sebuah inovasi yang membedakannya dengan perubahan biasa adalah adanya:", a: "c", options: ["a", "b", "c", "d", "e"] },
    { q: "Manakah pemicu utama (driver) dilakukannya inovasi dalam bidang pendidikan?", a: "c", options: ["a", "b", "c", "d", "e"] },
    { q: "Faktor keberhasilan utama agar suatu inovasi pembelajaran dapat berkelanjutan (sustainable) adalah:", a: "c", options: ["a", "b", "c", "d", "e"] },
    { q: "Penyebab utama terjadinya persepsi kontra terhadap inovasi adalah:", a: "b", options: ["a", "b", "c", "d", "e"] },
    { q: "Dampak dari inovasi yang berhasil dalam pendidikan idealnya harus berfokus pada:", a: "c", options: ["a", "b", "c", "d", "e"] },
    { q: "Pergeseran ke student-centered menuntut guru menjadi:", a: "b", options: ["a", "b", "c", "d", "e"] },
    { q: "Dalam konteks kompetensi 4C, implikasi utamanya bagi pengembangan kurikulum adalah:", a: "b", options: ["a", "b", "c", "d", "e"] },
    { q: "Model inovasi pendidikan yang bersifat bottom-up memiliki karakteristik utama, yaitu:", a: "c", options: ["a", "b", "c", "d", "e"] },
    { q: "Mengapa literasi digital menjadi prasyarat krusial saat ini:", a: "c", options: ["a", "b", "c", "d", "e"] },
    { q: "Tantangan terbesar dalam implementasi perubahan paradigma pendidikan di lapangan:", a: "b", options: ["a", "b", "c", "d", "e"] },
    { q: "Tujuan utama pengembangan kompetensi peserta didik selain hard skills adalah:", a: "b", options: ["a", "b", "c", "d", "e"] },
    { q: "Fungsi utama TIK bagi guru adalah sebagai:", a: "c", options: ["a", "b", "c", "d", "e"] },
    { q: "Mengapa pendekatan pembelajaran STEAM dianggap inovatif:", a: "b", options: ["a", "b", "c", "d", "e"] },
    { q: "Salah satu keuntungan utama dari blended learning adalah:", a: "b", options: ["a", "b", "c", "d", "e"] },
    { q: "Mengapa penting mempertimbangkan keragaman peserta didik saat merancang inovasi:", a: "b", options: ["a", "b", "c", "d", "e"] },
    { q: "Karakteristik relative advantage dalam teori difusi inovasi merujuk pada:", a: "b", options: ["a", "b", "c", "d", "e"] },
    { q: "Maksud dari hambatan digital divide adalah:", a: "b", options: ["a", "b", "c", "d", "e"] },
    { q: "Inovasi pembelajaran modern harus menempatkan teknologi sebagai:", a: "c", options: ["a", "b", "c", "d", "e"] },
    { q: "Konsep E-readiness dalam konteks pendidikan adalah:", a: "c", options: ["a", "b", "c", "d", "e"] },
    { q: "Komponen E-readiness yang berkaitan dengan manusia adalah:", a: "b", options: ["a", "b", "c", "d", "e"] },
    { q: "Indikator kesiapan infrastruktur dalam E-readiness adalah:", a: "b", options: ["a", "b", "c", "d", "e"] },
    { q: "Mengapa kebijakan dan budaya sekolah krusial dalam E-readiness:", a: "a", options: ["a", "b", "c", "d", "e"] },
    { q: "Apa itu hambatan psikologis dalam kesiapan TIK:", a: "b", options: ["a", "b", "c", "d", "e"] },
    { q: "Tahapan E-readiness saat TIK sudah terintegrasi sistemik:", a: "c", options: ["a", "b", "c", "d", "e"] },
    { q: "Strategi terbaik bagi sekolah dengan E-readiness rendah:", a: "b", options: ["a", "b", "c", "d", "e"] },
    { q: "Ideologi dasar Pendidikan Terbuka:", a: "b", options: ["a", "b", "c", "d", "e"] },
    { q: "Makna terbuka dalam sistem pendidikan terbuka:", a: "c", options: ["a", "b", "c", "d", "e"] },
    { q: "Apa arti prinsip Retain dalam OER:", a: "b", options: ["a", "b", "c", "d", "e"] },
    { q: "Peran TIK dalam mengakselerasi pendidikan terbuka:", a: "c", options: ["a", "b", "c", "d", "e"] },
    { q: "Karakteristik utama MOOCs:", a: "c", options: ["a", "b", "c", "d", "e"] },
    { q: "Tujuan kolaborasi institusi melalui Open Source/OER:", a: "b", options: ["a", "b", "c", "d", "e"] },
    { q: "Tantangan terbesar dalam pendidikan terbuka:", a: "c", options: ["a", "b", "c", "d", "e"] },
    { q: "Faktor utama pembeda daring dengan konvensional:", a: "c", options: ["a", "b", "c", "d", "e"] },
    { q: "Syarat utama penyelenggaraan pembelajaran daring efektif:", a: "b", options: ["a", "b", "c", "d", "e"] },
    { q: "Mengapa efektivitas daring bergantung pada self-regulated learning:", a: "b", options: ["a", "b", "c", "d", "e"] },
    { q: "Apa itu Responsiveness dalam asesmen daring:", a: "a", options: ["a", "b", "c", "d", "e"] },
    { q: "Dampak dari digital divide:", a: "b", options: ["a", "b", "c", "d", "e"] },
    { q: "Prinsip utama asesmen daring dibanding konvensional:", a: "b", options: ["a", "b", "c", "d", "e"] },
    { q: "Tantangan terbesar integritas akademik daring:", a: "b", options: ["a", "b", "c", "d", "e"] },
    { q: "Strategi menjamin otentikasi identitas dalam asesmen daring:", a: "a", options: ["a", "b", "c", "d", "e"] },
    { q: "Pergeseran paradigma asesmen daring harus mengedepankan:", a: "b", options: ["a", "b", "c", "d", "e"] },
    { q: "Fungsi feedback cepat dalam asesmen daring:", a: "a", options: ["a", "b", "c", "d", "e"] },
    { q: "Menurut Everett Rogers, apa itu Difusi Inovasi:", a: "b", options: ["a", "b", "c", "d", "e"] },
    { q: "Maksud misi demokratisasi dalam difusi inovasi:", a: "b", options: ["a", "b", "c", "d", "e"] },
    { q: "Apa itu Incremental Innovation:", a: "b", options: ["a", "b", "c", "d", "e"] },
    { q: "Faktor keberhasilan difusi inovasi di sekolah:", a: "b", options: ["a", "b", "c", "d", "e"] },
    { q: "Tujuan pergeseran ke pendekatan kooperatif:", a: "b", options: ["a", "b", "c", "d", "e"] },
    { q: "Langkah awal krusial merancang pembelajaran berbasis TIK:", a: "b", options: ["a", "b", "c", "d", "e"] },
    { q: "Maksud prinsip Pedagogy before technology:", a: "c", options: ["a", "b", "c", "d", "e"] }
];

// --- FUNGSI TIMER & RENDER TETAP SAMA SEPERTI KODE SEBELUMNYA ---

// Timer 120 menit
let time = 120 * 60;
const timerEl = document.getElementById('timer');
const interval = setInterval(() => {
    let m = Math.floor(time / 60);
    let s = time % 60;
    timerEl.textContent = `Waktu: ${m}:${s < 10 ? '0' : ''}${s}`;
    if (time <= 0) { clearInterval(interval); alert("Waktu Habis!"); }
    time--;
}, 1000);

// Render Soal
const container = document.getElementById('questionsContainer');
quizData.forEach((data, index) => {
    container.innerHTML += `<div class="question">
        <p>${index + 1}. ${data.q}</p>
        <div class="options">
            ${data.options.map(opt => `<label><input type="radio" name="q${index}" value="${opt}"> ${opt}</label>`).join('')}
        </div>
    </div>`;
});

// Hitung Skor
document.getElementById('quizForm').onsubmit = (e) => {
    e.preventDefault();
    let score = 0;
    quizData.forEach((data, index) => {
        const selected = document.querySelector(`input[name="q${index}"]:checked`);
        if (selected && selected.value === data.a) score++;
    });
    document.getElementById('score').textContent = score;
    document.getElementById('quizForm').classList.add('hidden');
    document.getElementById('result').classList.remove('hidden');
};