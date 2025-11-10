// src/lib/questionBank.ts

export interface Question {
  question: string;
  answers: string[];
  correctAnswer: string;
}

// Bank data untuk Kuis Matematika
export const mathQuestions: Question[] = [
  {
    question: "Berapa hasil dari 15 × 8 = ?",
    answers: ["110", "125", "130", "120"],
    correctAnswer: "120",
  },
  {
    question: "Berapa hasil dari 36 × 9 = ?",
    answers: ["314", "324", "334", "329"],
    correctAnswer: "324",
  },
  {
    question: "Berapa hasil dari 125 × 5 = ?",
    answers: ["625", "635", "615", "630"],
    correctAnswer: "625",
  },
  {
    question: "Berapa hasil dari 81 × 9 = ?",
    answers: ["734", "739", "719", "729"],
    correctAnswer: "729",
  },
  {
    question: "Berapa hasil dari 210 × 14 = ?",
    answers: ["2940", "2950", "2945", "2930"],
    correctAnswer: "2940",
  },
  {
    question: "Berapa hasil dari 72 × 6 = ?",
    answers: ["442", "422", "432", "437"],
    correctAnswer: "432",
  },
  {
    question: "Berapa hasil dari 48 × 7 = ?",
    answers: ["326", "346", "341", "336"],
    correctAnswer: "336",
  },
  {
    question: "Berapa hasil dari 64 × 8 = ?",
    answers: ["517", "502", "512", "522"],
    correctAnswer: "512",
  },
  {
    question: "Berapa hasil dari 27 × 9 = ?",
    answers: ["233", "253", "243", "248"],
    correctAnswer: "243",
  },
  {
    question: "Berapa hasil dari 32 × 4 = ?",
    answers: ["138", "128", "133", "118"],
    correctAnswer: "128",
  },
  {
    question: "Apa hasil dari 144 ÷ 12 = ?",
    answers: ["13", "11", "12", "14"],
    correctAnswer: "12",
  },
  {
    question: "Apa hasil dari 225 ÷ 15 = ?",
    answers: ["16", "14", "17", "15"],
    correctAnswer: "15",
  },
  {
    question: "Apa hasil dari 96 ÷ 12 = ?",
    answers: ["8", "7", "10", "9"],
    correctAnswer: "8",
  },
  {
    question: "Apa hasil dari 180 ÷ 9 = ?",
    answers: ["21", "22", "19", "20"],
    correctAnswer: "20",
  },
  {
    question: "Apa hasil dari 144 ÷ 16 = ?",
    answers: ["8", "10", "11", "9"],
    correctAnswer: "9",
  },
  {
    question: "Jika x + 7 = 15, berapakah nilai x?",
    answers: ["8", "10", "9", "7"],
    correctAnswer: "8",
  },
  {
    question: "Jika x + 12 = 30, berapakah nilai x?",
    answers: ["20", "17", "18", "19"],
    correctAnswer: "18",
  },
  {
    question: "Jika x + 19 = 45, berapakah nilai x?",
    answers: ["28", "27", "26", "25"],
    correctAnswer: "26",
  },
  {
    question: "Jika x + 26 = 80, berapakah nilai x?",
    answers: ["55", "54", "56", "53"],
    correctAnswer: "54",
  },
  {
    question: "Jika x + 37 = 100, berapakah nilai x?",
    answers: ["64", "65", "62", "63"],
    correctAnswer: "63",
  },
  {
    question: "Jika x + 23 = 60, berapakah nilai x?",
    answers: ["37", "39", "38", "36"],
    correctAnswer: "37",
  },
  {
    question: "Jika x + 14 = 50, berapakah nilai x?",
    answers: ["35", "37", "36", "38"],
    correctAnswer: "36",
  },
  {
    question: "Jika x + 28 = 75, berapakah nilai x?",
    answers: ["48", "47", "46", "49"],
    correctAnswer: "47",
  },
  {
    question: "Jika 3x = 36, berapakah nilai x?",
    answers: ["14", "15", "12", "10"],
    correctAnswer: "12",
  },
  {
    question: "Jika 5x = 55, berapakah nilai x?",
    answers: ["11", "14", "9", "13"],
    correctAnswer: "11",
  },
  {
    question: "Jika 8x = 72, berapakah nilai x?",
    answers: ["12", "11", "7", "9"],
    correctAnswer: "9",
  },
  {
    question: "Jika 9x = 90, berapakah nilai x?",
    answers: ["12", "10", "8", "13"],
    correctAnswer: "10",
  },
  {
    question: "Jika 4x = 44, berapakah nilai x?",
    answers: ["14", "9", "11", "13"],
    correctAnswer: "11",
  },
  {
    question: "Jika 7x = 63, berapakah nilai x?",
    answers: ["11", "7", "12", "9"],
    correctAnswer: "9",
  },
  {
    question: "Jika 6x = 96, berapakah nilai x?",
    answers: ["19", "18", "16", "14"],
    correctAnswer: "16",
  },
  {
    question: "Jika 12x = 84, berapakah nilai x?",
    answers: ["7", "9", "10", "5"],
    correctAnswer: "7",
  },
  {
    question: "Berapa 25% dari 200?",
    answers: ["55", "50", "40", "60"],
    correctAnswer: "50",
  },
  {
    question: "Berapa 15% dari 480?",
    answers: ["57.6", "86.4", "77", "72"],
    correctAnswer: "72",
  },
  {
    question: "Berapa 40% dari 350?",
    answers: ["168", "112", "140", "145"],
    correctAnswer: "140",
  },
  {
    question: "Berapa 10% dari 120?",
    answers: ["12", "9.6", "17", "14.4"],
    correctAnswer: "12",
  },
  {
    question: "Berapa 12.5% dari 640?",
    answers: ["80", "85", "64", "96"],
    correctAnswer: "80",
  },
  {
    question: "Berapa 5% dari 800?",
    answers: ["32", "48", "45", "40"],
    correctAnswer: "40",
  },
  {
    question: "Berapa 30% dari 560?",
    answers: ["173", "168", "201.6", "134.4"],
    correctAnswer: "168",
  },
  {
    question: "Berapa 20% dari 900?",
    answers: ["216", "180", "185", "144"],
    correctAnswer: "180",
  },
  {
    question: "Berapa 33.33% dari 150?",
    answers: ["40", "54.99", "49.99", "59.99"],
    correctAnswer: "49.99",
  },
  {
    question: "Berapa 7.5% dari 1000?",
    answers: ["90", "75", "60", "80"],
    correctAnswer: "75",
  },
  {
    question: "Akar-akar persamaan x² + (-5)x + (6) = 0 adalah ...",
    answers: ["3 dan 3", "2 dan 4", "1 dan 2", "2 dan 3"],
    correctAnswer: "2 dan 3",
  },
  {
    question: "Akar-akar persamaan x² + (3)x + (-10) = 0 adalah ...",
    answers: ["-6 dan 1", "5 dan -2", "-5 dan 2", "Tidak memiliki akar real"],
    correctAnswer: "-5 dan 2",
  },
  {
    question: "Akar-akar persamaan x² + (-7)x + (12) = 0 adalah ...",
    answers: ["Tidak memiliki akar real", "-3 dan -4", "4 dan 4", "3 dan 4"],
    correctAnswer: "3 dan 4",
  },
  {
    question: "Akar-akar persamaan x² + (2)x + (-15) = 0 adalah ...",
    answers: ["-6 dan 2", "Tidak memiliki akar real", "-5 dan 3", "-4 dan 3"],
    correctAnswer: "-5 dan 3",
  },
  {
    question: "Akar-akar persamaan x² + (-1)x + (-12) = 0 adalah ...",
    answers: ["Tidak memiliki akar real", "-3 dan 4", "-2 dan 4", "3 dan -4"],
    correctAnswer: "-3 dan 4",
  },
  {
    question: "Akar-akar persamaan x² + (4)x + (-21) = 0 adalah ...",
    answers: ["-6 dan 3", "Tidak memiliki akar real", "-7 dan 3", "-7 dan 4"],
    correctAnswer: "-7 dan 3",
  },
  {
    question: "Akar-akar persamaan x² + (-6)x + (8) = 0 adalah ...",
    answers: ["Tidak memiliki akar real", "3 dan 4", "2 dan 5", "2 dan 4"],
    correctAnswer: "2 dan 4",
  },
  {
    question: "Akar-akar persamaan x² + (5)x + (-24) = 0 adalah ...",
    answers: ["-8 dan 4", "-8 dan 3", "-7 dan 3", "8 dan -3"],
    correctAnswer: "-8 dan 3",
  },
  {
    question: "Gradien garis yang melalui titik (1, 2) dan (3, 8) adalah ...",
    answers: ["3", "4", "2", "5"],
    correctAnswer: "3",
  },
  {
    question: "Gradien garis yang melalui titik (-2, 5) dan (4, 17) adalah ...",
    answers: ["2", "3", "4", "1"],
    correctAnswer: "2",
  },
  {
    question: "Gradien garis yang melalui titik (0, -3) dan (6, 9) adalah ...",
    answers: ["3", "1", "4", "2"],
    correctAnswer: "2",
  },
  {
    question: "Gradien garis yang melalui titik (-4, -1) dan (2, 11) adalah ...",
    answers: ["1", "4", "3", "2"],
    correctAnswer: "2",
  },
  {
    question: "Gradien garis yang melalui titik (2, 7) dan (5, 16) adalah ...",
    answers: ["5", "4", "3", "2"],
    correctAnswer: "3",
  },
  {
    question: "Gradien garis yang melalui titik (1, 2) dan (3, 8) adalah ...",
    answers: ["3", "4", "5", "2"],
    correctAnswer: "3",
  },
  {
    question: "Gradien garis yang melalui titik (-2, 5) dan (4, 17) adalah ...",
    answers: ["2", "1", "4", "3"],
    correctAnswer: "2",
  },
  {
    question: "Gradien garis yang melalui titik (0, -3) dan (6, 9) adalah ...",
    answers: ["3", "1", "2", "4"],
    correctAnswer: "2",
  },
  {
    question: "Gradien garis yang melalui titik (-4, -1) dan (2, 11) adalah ...",
    answers: ["1", "2", "3", "4"],
    correctAnswer: "2",
  },
  {
    question: "Gradien garis yang melalui titik (2, 7) dan (5, 16) adalah ...",
    answers: ["2", "3", "4", "5"],
    correctAnswer: "3",
  },
  {
    question: "Apa nilai 2^5?",
    answers: ["32", "31", "33", "42"],
    correctAnswer: "32",
  },
  {
    question: "Apa nilai 3^4?",
    answers: ["91", "81", "80", "82"],
    correctAnswer: "81",
  },
  {
    question: "Apa nilai 5^3?",
    answers: ["126", "124", "125", "135"],
    correctAnswer: "125",
  },
  {
    question: "Apa nilai 10^2?",
    answers: ["100", "110", "101", "99"],
    correctAnswer: "100",
  },
  {
    question: "Apa nilai 4^3?",
    answers: ["63", "74", "64", "65"],
    correctAnswer: "64",
  },
  {
    question: "Apa nilai √9?",
    answers: ["3", "5", "2", "4"],
    correctAnswer: "3",
  },
  {
    question: "Apa nilai √16?",
    answers: ["6", "3", "4", "5"],
    correctAnswer: "4",
  },
  {
    question: "Berapa nilai ∛27?",
    answers: ["3", "2", "4", "5"],
    correctAnswer: "3",
  },
  {
    question: "Keliling persegi dengan sisi 9 cm adalah ...",
    answers: ["81 cm", "27 cm", "18 cm", "36 cm"],
    correctAnswer: "36 cm",
  },
  {
    question: "Luas persegi dengan sisi 12 cm adalah ...",
    answers: ["156 cm²", "132 cm²", "144 cm²", "120 cm²"],
    correctAnswer: "144 cm²",
  },
  {
    question: "Keliling persegi panjang 8 cm × 5 cm adalah ...",
    answers: ["40 cm", "26 cm", "28 cm", "16 cm"],
    correctAnswer: "26 cm",
  },
  {
    question: "Luas persegi panjang 10 cm × 7 cm adalah ...",
    answers: ["60 cm²", "77 cm²", "34 cm²", "70 cm²"],
    correctAnswer: "70 cm²",
  },
  {
    question: "Luas segitiga alas 12 cm dan tinggi 9 cm adalah ...",
    answers: ["48 cm²", "72 cm²", "63 cm²", "54 cm²"],
    correctAnswer: "54 cm²",
  },
  {
    question: "Keliling segitiga sama sisi sisi 11 cm adalah ...",
    answers: ["22 cm", "44 cm", "33 cm", "11 cm"],
    correctAnswer: "33 cm",
  },
  {
    question: "Keliling lingkaran berjari-jari 7 cm (π=22/7) adalah ...",
    answers: ["14 cm", "77 cm", "44 cm", "49 cm"],
    correctAnswer: "44 cm",
  },
  {
    question: "Luas lingkaran berjari-jari 14 cm (π=22/7) adalah ...",
    answers: ["484 cm²", "308 cm²", "616 cm²", "528 cm²"],
    correctAnswer: "616 cm²",
  },
  {
    question: "Volume kubus dengan rusuk 5 cm adalah ...",
    answers: ["25 cm³", "100 cm³", "125 cm³", "150 cm³"],
    correctAnswer: "125 cm³",
  },
  {
    question: "Luas permukaan kubus dengan rusuk 6 cm adalah ...",
    answers: ["144 cm²", "36 cm²", "72 cm²", "216 cm²"],
    correctAnswer: "216 cm²",
  },
  {
    question: "Volume balok 4 cm × 5 cm × 10 cm adalah ...",
    answers: ["200 cm³", "40 cm³", "100 cm³", "220 cm³"],
    correctAnswer: "200 cm³",
  },
  {
    question: "Luas permukaan balok 3 cm × 4 cm × 5 cm adalah ...",
    answers: ["94 cm²", "86 cm²", "52 cm²", "70 cm²"],
    correctAnswer: "94 cm²",
  },
  {
    question: "Panjang diagonal bidang persegi 10 cm adalah ...",
    answers: ["10√2 cm", "20 cm", "10 cm", "5√2 cm"],
    correctAnswer: "10√2 cm",
  },
  {
    question: "Panjang sisi miring segitiga siku-siku dengan kaki 9 cm dan 12 cm adalah ...",
    answers: ["15 cm", "21 cm", "18 cm", "13 cm"],
    correctAnswer: "15 cm",
  },
  {
    question: "Keliling jajar genjang alas 10 cm dan sisi miring 7 cm adalah ...",
    answers: ["17 cm", "20 cm", "28 cm", "34 cm"],
    correctAnswer: "34 cm",
  },
  {
    question: "Luas trapesium dengan sisi sejajar 8 cm dan 12 cm serta tinggi 5 cm adalah ...",
    answers: ["60 cm²", "40 cm²", "50 cm²", "45 cm²"],
    correctAnswer: "50 cm²",
  },
  {
    question: "Nilai sin 30° adalah ...",
    answers: ["0", "√3/2", "1/2", "√2/2"],
    correctAnswer: "1/2",
  },
  {
    question: "Nilai cos 60° adalah ...",
    answers: ["√2/2", "0", "1/2", "√3/2"],
    correctAnswer: "1/2",
  },
  {
    question: "Nilai tan 45° adalah ...",
    answers: ["√3", "1", "1/√3", "0"],
    correctAnswer: "1",
  },
  {
    question: "Nilai sin 0° adalah ...",
    answers: ["1/2", "1", "0", "√2/2"],
    correctAnswer: "0",
  },
  {
    question: "Nilai cos 0° adalah ...",
    answers: ["1/2", "0", "1", "√3/2"],
    correctAnswer: "1",
  },
  {
    question: "Nilai sin 90° adalah ...",
    answers: ["√2/2", "1", "√3/2", "0"],
    correctAnswer: "1",
  },
  {
    question: "Nilai cos 90° adalah ...",
    answers: ["0", "1/2", "1", "√2/2"],
    correctAnswer: "0",
  },
  {
    question: "Identitas sin²θ + cos²θ = ...",
    answers: ["cos θ", "1", "sin θ", "tan θ"],
    correctAnswer: "1",
  },
  {
    question: "Jika tan θ = 1, maka θ yang mungkin adalah ...",
    answers: ["90°", "60°", "30°", "45°"],
    correctAnswer: "45°",
  },
  {
    question: "Jika sin θ = 1/2 dan θ lancip, maka cos θ = ...",
    answers: ["√2/2", "1/2", "√3/2", "0"],
    correctAnswer: "√3/2",
  },
  {
    question: "Rata-rata dari data 2,4,6,8,10 adalah ...",
    answers: ["6", "5", "7", "8"],
    correctAnswer: "6",
  },
  {
    question: "Modus dari data 3,3,4,5,7,9 adalah ...",
    answers: ["3", "4", "5", "7"],
    correctAnswer: "3",
  },
  {
    question: "Median dari data 1,2,3,4,100 adalah ...",
    answers: ["3", "2", "4", "5"],
    correctAnswer: "3",
  },
  {
    question: "Jangkauan (range) dari data 5,7,9,9,10 adalah ...",
    answers: ["5", "4", "3", "2"],
    correctAnswer: "5",
  },
  {
    question: "Banyaknya data pada 2,2,2,3,3,4 adalah ...",
    answers: ["6", "5", "7", "8"],
    correctAnswer: "6",
  },
  {
    question: "Frekuensi nilai 20 pada data 10,20,20,30,40 adalah ...",
    answers: ["2", "1", "3", "0"],
    correctAnswer: "2",
  },
  {
    question: "Sebuah koin dilempar sekali. Peluang muncul Gambar adalah ...",
    answers: ["1/2", "1/3", "1/4", "1/6"],
    correctAnswer: "1/2",
  },
];

export const logicQuestions: Question[] = [
  {
    question: "Lanjutkan pola ini: 2, 4, 8, 16, ...?",
    answers: ["34", "33", "31", "32"],
    correctAnswer: "32",
  },
  {
    question: "Lanjutkan pola ini: 1, 3, 6, 10, ...?",
    answers: ["14", "16", "15", "17"],
    correctAnswer: "15",
  },
  {
    question: "Lanjutkan pola ini: 5, 10, 20, 40, ...?",
    answers: ["81", "82", "79", "80"],
    correctAnswer: "80",
  },
  {
    question: "Lanjutkan pola ini: 3, 6, 12, 24, ...?",
    answers: ["47", "49", "48", "50"],
    correctAnswer: "48",
  },
  {
    question: "Lanjutkan pola ini: 7, 14, 28, 56, ...?",
    answers: ["111", "113", "114", "112"],
    correctAnswer: "112",
  },
  {
    question: "Lanjutkan pola ini: 1, 4, 9, 16, ...?",
    answers: ["27", "24", "25", "26"],
    correctAnswer: "25",
  },
  {
    question: "Lanjutkan pola ini: 11, 13, 17, 23, ...?",
    answers: ["31", "30", "29", "28"],
    correctAnswer: "29",
  },
  {
    question: "Lanjutkan pola ini: 2, 5, 11, 23, ...?",
    answers: ["34", "36", "37", "35"],
    correctAnswer: "35",
  },
  {
    question: "Lanjutkan pola ini: 1, 2, 4, 7, ...?",
    answers: ["10", "11", "12", "9"],
    correctAnswer: "10",
  },
  {
    question: "Lanjutkan pola ini: 10, 9, 7, 4, ...?",
    answers: ["3", "0", "2", "1"],
    correctAnswer: "1",
  },
  {
    question: "Lanjutkan pola ini: 2, 3, 5, 8, ...?",
    answers: ["11", "12", "10", "13"],
    correctAnswer: "11",
  },
  {
    question: "Lanjutkan pola ini: 100, 90, 81, 73, ...?",
    answers: ["65", "67", "64", "66"],
    correctAnswer: "65",
  },
  {
    question: "Lanjutkan pola ini: 1, 1, 2, 3, ...?",
    answers: ["6", "4", "3", "5"],
    correctAnswer: "4",
  },
  {
    question: "Lanjutkan pola ini: 2, 5, 10, 17, ...?",
    answers: ["27", "26", "28", "25"],
    correctAnswer: "26",
  },
  {
    question: "Lanjutkan pola ini: 4, 9, 16, 25, ...?",
    answers: ["37", "38", "35", "36"],
    correctAnswer: "36",
  },
  {
    question: "Lanjutkan pola ini: 9, 7, 5, 3, ...?",
    answers: ["2", "1", "3", "0"],
    correctAnswer: "1",
  },
  {
    question: "Lanjutkan pola ini: 1, 2, 3, 5, 8, ...?",
    answers: ["10", "13", "12", "11"],
    correctAnswer: "11",
  },
  {
    question: "Lanjutkan pola ini: 2, 4, 7, 11, ...?",
    answers: ["16", "15", "18", "17"],
    correctAnswer: "16",
  },
  {
    question: "Lanjutkan pola ini: 1, 2, 4, 8, ...?",
    answers: ["17", "18", "16", "15"],
    correctAnswer: "16",
  },
  {
    question: "Lanjutkan pola ini: 8, 13, 21, 34, ...?",
    answers: ["46", "49", "47", "48"],
    correctAnswer: "47",
  },
  {
    question: "Lanjutkan pola ini: 3, 5, 9, 17, ...?",
    answers: ["27", "26", "25", "24"],
    correctAnswer: "25",
  },
  {
    question: "Lanjutkan pola ini: 2, 6, 12, 20, ...?",
    answers: ["27", "29", "30", "28"],
    correctAnswer: "28",
  },
  {
    question: "Lanjutkan pola ini: 5, 9, 15, 23, ...?",
    answers: ["33", "32", "34", "35"],
    correctAnswer: "33",
  },
  {
    question: "Lanjutkan pola ini: 7, 11, 17, 25, ...?",
    answers: ["35", "36", "34", "37"],
    correctAnswer: "35",
  },
  {
    question: "Lanjutkan pola ini: 6, 10, 16, 24, ...?",
    answers: ["35", "34", "36", "33"],
    correctAnswer: "34",
  },
  {
    question: "Air : Minum :: Udara : ?",
    answers: ["Hirup", "Tulis", "Lari", "Dengar"],
    correctAnswer: "Hirup",
  },
  {
    question: "Guru : Sekolah :: Dokter : ?",
    answers: ["Rumah Sakit", "Kantor", "Pasar", "Bandara"],
    correctAnswer: "Rumah Sakit",
  },
  {
    question: "Bunga : Mekar :: Buah : ?",
    answers: ["Masak", "Lay u", "Tumbuh", "Kuncup"],
    correctAnswer: "Masak",
  },
  {
    question: "Api : Panas :: Es : ?",
    answers: ["Dingin", "Beku", "Basah", "Asap"],
    correctAnswer: "Dingin",
  },
  {
    question: "Jarum : Jam :: Penunjuk : ?",
    answers: ["Arah", "Lagu", "Warna", "Rasa"],
    correctAnswer: "Arah",
  },
  {
    question: "Mata : Melihat :: Telinga : ?",
    answers: ["Mendengar", "Berbicara", "Mencium", "Meraba"],
    correctAnswer: "Mendengar",
  },
  {
    question: "Pena : Menulis :: Kuas : ?",
    answers: ["Melukis", "Menggambar", "Memotong", "Memutar"],
    correctAnswer: "Melukis",
  },
  {
    question: "Kunci : Pintu :: Kata Sandi : ?",
    answers: ["Akun", "Jalan", "Buku", "Meja"],
    correctAnswer: "Akun",
  },
  {
    question: "Akar : Pohon :: Fondasi : ?",
    answers: ["Bangunan", "Baju", "Mobil", "Kaleng"],
    correctAnswer: "Bangunan",
  },
  {
    question: "Kapal : Laut :: Pesawat : ?",
    answers: ["Udara", "Darat", "Air", "Awan"],
    correctAnswer: "Udara",
  },
  {
    question: "Bensin : Mobil :: Listrik : ?",
    answers: ["Lampu", "Kompas", "Kertas", "Pisau"],
    correctAnswer: "Lampu",
  },
  {
    question: "Pemimpin : Memimpin :: Pengikut : ?",
    answers: ["Mengikuti", "Menyuruh", "Menelepon", "Menjaga"],
    correctAnswer: "Mengikuti",
  },
  {
    question: "Garam : Asin :: Gula : ?",
    answers: ["Manis", "Pahit", "Asam", "Pedas"],
    correctAnswer: "Manis",
  },
  {
    question: "Hujan : Payung :: Panas : ?",
    answers: ["Topi", "Selimut", "Sapu", "Pensil"],
    correctAnswer: "Topi",
  },
  {
    question: "Roda : Berputar :: Pintu : ?",
    answers: ["Membuka", "Mengetik", "Menyala", "Meringkas"],
    correctAnswer: "Membuka",
  },
  {
    question: "Baterai : Energi :: Tangki : ?",
    answers: ["Bahan bakar", "Air", "Uap", "Kaca"],
    correctAnswer: "Bahan bakar",
  },
  {
    question: "Buku : Membaca :: Lagu : ?",
    answers: ["Mendengar", "Menonton", "Menari", "Menjahit"],
    correctAnswer: "Mendengar",
  },
  {
    question: "Pisau : Memotong :: Lem : ?",
    answers: ["Merekatkan", "Mengikat", "Mengukur", "Mengisi"],
    correctAnswer: "Merekatkan",
  },
  {
    question: "Kamera : Foto :: Mikrofon : ?",
    answers: ["Suara", "Bunyi", "Cahaya", "Gambar"],
    correctAnswer: "Suara",
  },
  {
    question: "Benih : Tumbuh :: Ide : ?",
    answers: ["Terwujud", "Terbaca", "Terhisap", "Terlarut"],
    correctAnswer: "Terwujud",
  },
  {
    question: "Termometer : Suhu :: Jam : ?",
    answers: ["Waktu", "Jarak", "Massa", "Volume"],
    correctAnswer: "Waktu",
  },
  {
    question: "Sapu : Membersihkan :: Obat : ?",
    answers: ["Menyembuhkan", "Memanaskan", "Mendinginkan", "Menyimpan"],
    correctAnswer: "Menyembuhkan",
  },
  {
    question: "Kue : Panggang :: Teh : ?",
    answers: ["Seduh", "Goreng", "Kupas", "Iris"],
    correctAnswer: "Seduh",
  },
  {
    question: "Penulis : Novel :: Sutradara : ?",
    answers: ["Film", "Panggung", "Lukisan", "Patung"],
    correctAnswer: "Film",
  },
  {
    question: "Atlet : Latihan :: Musisi : ?",
    answers: ["Berlatih", "Bermain", "Berkata", "Berkebun"],
    correctAnswer: "Berlatih",
  },
  {
    question: "Semua mamalia bernapas dengan paru-paru. Paus adalah mamalia. Maka paus bernapas dengan ...",
    answers: ["Paru-paru", "Insang", "Kulit", "Trakea"],
    correctAnswer: "Paru-paru",
  },
  {
    question: "Semua burung memiliki sayap. Merpati adalah burung. Maka merpati memiliki ...",
    answers: ["Sayap", "Tanduk", "Sirip", "Taring"],
    correctAnswer: "Sayap",
  },
  {
    question: "Semua segitiga memiliki 3 sisi. ABC adalah segitiga. Maka ABC memiliki ... sisi.",
    answers: ["3", "4", "5", "6"],
    correctAnswer: "3",
  },
  {
    question: "Tidak ada ikan yang hidup di darat. Lele adalah ikan. Maka lele hidup di ...",
    answers: ["Air", "Darat", "Udara", "Pasir"],
    correctAnswer: "Air",
  },
  {
    question: "Semua bilangan genap habis dibagi 2. 14 adalah bilangan genap. Maka 14 habis dibagi ...",
    answers: ["2", "3", "5", "7"],
    correctAnswer: "2",
  },
  {
    question: "Semua logam menghantarkan listrik. Tembaga adalah logam. Maka tembaga ... listrik.",
    answers: ["Menghantarkan", "Menghambat", "Menguap", "Membeku"],
    correctAnswer: "Menghantarkan",
  },
  {
    question: "Tidak ada tanaman yang berjalan. Padi adalah tanaman. Maka padi ...",
    answers: ["Tidak berjalan", "Berjalan", "Melompat", "Terbang"],
    correctAnswer: "Tidak berjalan",
  },
  {
    question: "Semua jam menunjukkan waktu. Ini adalah jam. Maka benda ini menunjukkan ...",
    answers: ["Waktu", "Jarak", "Massa", "Kecepatan"],
    correctAnswer: "Waktu",
  },
  {
    question: "Semua manusia perlu air. Seseorang adalah manusia. Maka ia ... air.",
    answers: ["Perlu", "Tidak perlu", "Takut", "Menghindari"],
    correctAnswer: "Perlu",
  },
  {
    question: "Semua bujur sangkar memiliki empat sudut siku-siku. Bentuk ABCD adalah bujur sangkar. Maka sudut-sudutnya ...",
    answers: ["Siku-siku", "Tumpul", "Lancip", "Refleks"],
    correctAnswer: "Siku-siku",
  },
  {
    question: "Semua hewan membutuhkan makanan. Kucing adalah hewan. Maka kucing ... makanan.",
    answers: ["Membutuhkan", "Membuang", "Mengubah", "Menghilangkan"],
    correctAnswer: "Membutuhkan",
  },
  {
    question: "Tidak ada gas yang memiliki bentuk tetap. Oksigen adalah gas. Maka oksigen ... bentuk tetap.",
    answers: ["Tidak memiliki", "Memiliki", "Mengubah", "Menyamai"],
    correctAnswer: "Tidak memiliki",
  },
  {
    question: "Semua buah memiliki biji. Mangga adalah buah. Maka mangga memiliki ...",
    answers: ["Biji", "Duri", "Akar", "Batang"],
    correctAnswer: "Biji",
  },
  {
    question: "Semua sudut siku-siku besarnya 90°. ∠ABC siku-siku. Maka besarnya ...°.",
    answers: ["90", "45", "60", "120"],
    correctAnswer: "90",
  },
  {
    question: "Semua prisma memiliki alas kongruen. Balok adalah prisma. Maka balok memiliki alas ...",
    answers: ["Kongruen", "Sebangun", "Tak beraturan", "Lingkaran"],
    correctAnswer: "Kongruen",
  },
  {
    question: "Semua planet mengelilingi Matahari. Bumi adalah planet. Maka Bumi mengelilingi ...",
    answers: ["Matahari", "Bulan", "Bintang Utara", "Komet"],
    correctAnswer: "Matahari",
  },
  {
    question: "Tidak ada bilangan prima yang genap, kecuali 2. 2 adalah bilangan prima. Maka 2 adalah ...",
    answers: ["Genap", "Ganjil", "Komposit", "Irasional"],
    correctAnswer: "Genap",
  },
  {
    question: "Semua segitiga sama sisi memiliki sisi sama panjang. ΔABC sama sisi. Maka sisi-sisinya ...",
    answers: ["Sama panjang", "Berbeda", "Sejajar", "Tegak lurus"],
    correctAnswer: "Sama panjang",
  },
  {
    question: "Semua persegi panjang memiliki sudut siku-siku. PQRS adalah persegi panjang. Maka sudut P adalah ...",
    answers: ["Siku-siku", "Lancip", "Tumpul", "Refleks"],
    correctAnswer: "Siku-siku",
  },
  {
    question: "Semua siswa harus belajar. Rani adalah siswa. Maka Rani harus ...",
    answers: ["Belajar", "Tidur", "Bermain", "Melamun"],
    correctAnswer: "Belajar",
  },
  {
    question: "Tidak ada burung yang berenang seperti ikan. Penguin adalah burung. Maka penguin ... berenang seperti ikan.",
    answers: ["Tidak", "Selalu", "Sering", "Kadang"],
    correctAnswer: "Tidak",
  },
  {
    question: "Semua sudut lurus besarnya 180°. ∠XYZ lurus. Maka besarnya ...°.",
    answers: ["180", "90", "120", "60"],
    correctAnswer: "180",
  },
  {
    question: "Semua segiempat memiliki 4 sisi. Layang-layang adalah segiempat. Maka layang-layang memiliki ... sisi.",
    answers: ["4", "3", "5", "6"],
    correctAnswer: "4",
  },
  {
    question: "Semua karnivora memakan daging. Singa adalah karnivora. Maka singa memakan ...",
    answers: ["Daging", "Daun", "Biji", "Buah"],
    correctAnswer: "Daging",
  },
  {
    question: "Semua prisme memiliki sisi tegak berbentuk persegi panjang. Prisma segitiga adalah prisme. Maka sisi tegaknya berbentuk ...",
    answers: ["Persegi panjang", "Segitiga", "Lingkaran", "Trapesium"],
    correctAnswer: "Persegi panjang",
  },
  {
    question: "Mana yang tidak termasuk dalam kelompok: Apel, Jeruk, Pisang, Mawar?",
    answers: ["Mawar", "Apel", "Pisang", "Jeruk"],
    correctAnswer: "Mawar",
  },
  {
    question: "Mana yang tidak termasuk dalam kelompok: Anjing, Kucing, Sapi, Padi?",
    answers: ["Anjing", "Kucing", "Sapi", "Padi"],
    correctAnswer: "Padi",
  },
  {
    question: "Mana yang tidak termasuk dalam kelompok: Meja, Kursi, Lemari, Pohon?",
    answers: ["Meja", "Kursi", "Pohon", "Lemari"],
    correctAnswer: "Pohon",
  },
  {
    question: "Mana yang tidak termasuk dalam kelompok: Merah, Biru, Hijau, Bulat?",
    answers: ["Merah", "Hijau", "Bulat", "Biru"],
    correctAnswer: "Bulat",
  },
  {
    question: "Mana yang tidak termasuk dalam kelompok: Perak, Emas, Tembaga, Kapur?",
    answers: ["Perak", "Tembaga", "Kapur", "Emas"],
    correctAnswer: "Kapur",
  },
  {
    question: "Mana yang tidak termasuk dalam kelompok: Jakarta, Bandung, Surabaya, Sungai?",
    answers: ["Sungai", "Surabaya", "Jakarta", "Bandung"],
    correctAnswer: "Sungai",
  },
  {
    question: "Mana yang tidak termasuk dalam kelompok: Meter, Detik, Kilogram, Liter?",
    answers: ["Detik", "Kilogram", "Meter", "Liter"],
    correctAnswer: "Liter",
  },
  {
    question: "Mana yang tidak termasuk dalam kelompok: Utara, Timur, Atas, Barat?",
    answers: ["Timur", "Barat", "Atas", "Utara"],
    correctAnswer: "Atas",
  },
  {
    question: "Mana yang tidak termasuk dalam kelompok: Segitiga, Persegi, Lingkaran, Bola?",
    answers: ["Persegi", "Lingkaran", "Bola", "Segitiga"],
    correctAnswer: "Bola",
  },
  {
    question: "Mana yang tidak termasuk dalam kelompok: Gulung, Balik, Putar, Rasa?",
    answers: ["Gulung", "Putar", "Balik", "Rasa"],
    correctAnswer: "Rasa",
  },
  {
    question: "Mana yang tidak termasuk dalam kelompok: Hidung, Mata, Telinga, Siku?",
    answers: ["Telinga", "Hidung", "Siku", "Mata"],
    correctAnswer: "Siku",
  },
  {
    question: "Mana yang tidak termasuk dalam kelompok: Darah, Air, Minyak, Plastik?",
    answers: ["Air", "Darah", "Minyak", "Plastik"],
    correctAnswer: "Plastik",
  },
  {
    question: "Mana yang tidak termasuk dalam kelompok: Buku, Majalah, Koran, Pisau?",
    answers: ["Pisau", "Koran", "Majalah", "Buku"],
    correctAnswer: "Pisau",
  },
  {
    question: "Mana yang tidak termasuk dalam kelompok: Laptop, Komputer, Printer, Piring?",
    answers: ["Printer", "Laptop", "Piring", "Komputer"],
    correctAnswer: "Piring",
  },
  {
    question: "Mana yang tidak termasuk dalam kelompok: Ayah, Ibu, Paman, Januari?",
    answers: ["Januari", "Paman", "Ibu", "Ayah"],
    correctAnswer: "Januari",
  },
  {
    question: "Mana yang tidak termasuk dalam kelompok: Musim Hujan, Musim Kemarau, Musim Gugur, Motor?",
    answers: ["Musim Gugur", "Musim Hujan", "Musim Kemarau", "Motor"],
    correctAnswer: "Motor",
  },
  {
    question: "Mana yang tidak termasuk dalam kelompok: Satu, Dua, Tiga, Awan?",
    answers: ["Awan", "Tiga", "Dua", "Satu"],
    correctAnswer: "Awan",
  },
  {
    question: "Mana yang tidak termasuk dalam kelompok: Beras, Gandum, Jagung, Besi?",
    answers: ["Gandum", "Besi", "Beras", "Jagung"],
    correctAnswer: "Besi",
  },
  {
    question: "Mana yang tidak termasuk dalam kelompok: Atom, Molekul, Sel, Huruf?",
    answers: ["Atom", "Huruf", "Molekul", "Sel"],
    correctAnswer: "Huruf",
  },
  {
    question: "Mana yang tidak termasuk dalam kelompok: Pagi, Siang, Malam, Bangun?",
    answers: ["Siang", "Bangun", "Pagi", "Malam"],
    correctAnswer: "Bangun",
  },
  {
    question: "Mana yang tidak termasuk dalam kelompok: Gitar, Biola, Piano, Palu?",
    answers: ["Piano", "Palu", "Biola", "Gitar"],
    correctAnswer: "Palu",
  },
  {
    question: "Mana yang tidak termasuk dalam kelompok: Singa, Harimau, Kucing, Elang?",
    answers: ["Harimau", "Singa", "Kucing", "Elang"],
    correctAnswer: "Elang",
  },
  {
    question: "Mana yang tidak termasuk dalam kelompok: Penjumlahan, Pengurangan, Perkalian, Penyanyi?",
    answers: ["Pengurangan", "Penyanyi", "Penjumlahan", "Perkalian"],
    correctAnswer: "Penyanyi",
  },
  {
    question: "Mana yang tidak termasuk dalam kelompok: Natrium, Kalium, Kalsium, Beras?",
    answers: ["Beras", "Kalium", "Kalsium", "Natrium"],
    correctAnswer: "Beras",
  },
  {
    question: "Mana yang tidak termasuk dalam kelompok: Sistem, Proses, Metode, Mangga?",
    answers: ["Metode", "Proses", "Sistem", "Mangga"],
    correctAnswer: "Mangga",
  },
];

export const generalQuestions: Question[] = [
  {
    question: "Apa ibu kota Jepang?",
    answers: ["Tokyo", "Osaka", "Kyoto", "Nagoya"],
    correctAnswer: "Tokyo",
  },
  {
    question: "Apa ibu kota Tiongkok (China)?",
    answers: ["Beijing", "Shanghai", "Guangzhou", "Shenzhen"],
    correctAnswer: "Beijing",
  },
  {
    question: "Apa ibu kota Korea Selatan?",
    answers: ["Seoul", "Busan", "Incheon", "Daegu"],
    correctAnswer: "Seoul",
  },
  {
    question: "Apa ibu kota India?",
    answers: ["New Delhi", "Mumbai", "Kolkata", "Chennai"],
    correctAnswer: "New Delhi",
  },
  {
    question: "Apa ibu kota Thailand?",
    answers: ["Bangkok", "Chiang Mai", "Pattaya", "Phuket"],
    correctAnswer: "Bangkok",
  },
  {
    question: "Apa ibu kota Malaysia?",
    answers: ["Kuala Lumpur", "Putrajaya", "Penang", "Johor Bahru"],
    correctAnswer: "Kuala Lumpur",
  },
  {
    question: "Apa ibu kota Singapura?",
    answers: ["Singapura", "Johor", "Kedah", "Melaka"],
    correctAnswer: "Singapura",
  },
  {
    question: "Apa ibu kota Australia?",
    answers: ["Canberra", "Sydney", "Melbourne", "Perth"],
    correctAnswer: "Canberra",
  },
  {
    question: "Apa ibu kota Inggris (United Kingdom)?",
    answers: ["London", "Manchester", "Liverpool", "Bristol"],
    correctAnswer: "London",
  },
  {
    question: "Apa ibu kota Prancis?",
    answers: ["Paris", "Lyon", "Marseille", "Nice"],
    correctAnswer: "Paris",
  },
  {
    question: "Apa ibu kota Italia?",
    answers: ["Roma", "Milan", "Napoli", "Turin"],
    correctAnswer: "Roma",
  },
  {
    question: "Apa ibu kota Jerman?",
    answers: ["Berlin", "Munich", "Frankfurt", "Hamburg"],
    correctAnswer: "Berlin",
  },
  {
    question: "Apa ibu kota Spanyol?",
    answers: ["Madrid", "Barcelona", "Valencia", "Sevilla"],
    correctAnswer: "Madrid",
  },
  {
    question: "Apa ibu kota Kanada?",
    answers: ["Ottawa", "Toronto", "Vancouver", "Montreal"],
    correctAnswer: "Ottawa",
  },
  {
    question: "Apa ibu kota Mesir?",
    answers: ["Kairo", "Giza", "Alexandria", "Luxor"],
    correctAnswer: "Kairo",
  },
  {
    question: "Apa ibu kota Arab Saudi?",
    answers: ["Riyadh", "Jeddah", "Madinah", "Makkah"],
    correctAnswer: "Riyadh",
  },
  {
    question: "Apa ibu kota Turki?",
    answers: ["Ankara", "Istanbul", "Izmir", "Bursa"],
    correctAnswer: "Ankara",
  },
  {
    question: "Apa ibu kota Brasil?",
    answers: ["Brasilia", "Rio de Janeiro", "Sao Paulo", "Salvador"],
    correctAnswer: "Brasilia",
  },
  {
    question: "Apa ibu kota Rusia?",
    answers: ["Moskow", "Saint Petersburg", "Kazan", "Sochi"],
    correctAnswer: "Moskow",
  },
  {
    question: "Apa ibu kota Jepang berada di pulau ...?",
    answers: ["Honshu", "Hokkaido", "Kyushu", "Shikoku"],
    correctAnswer: "Honshu",
  },
  {
    question: "Apa rumus kimia untuk air?",
    answers: ["H2O", "O2", "CO2", "NaCl"],
    correctAnswer: "H2O",
  },
  {
    question: "Simbol kimia untuk besi adalah ...",
    answers: ["Fe", "F", "I", "Ir"],
    correctAnswer: "Fe",
  },
  {
    question: "Simbol kimia untuk natrium adalah ...",
    answers: ["Na", "N", "Ne", "Ni"],
    correctAnswer: "Na",
  },
  {
    question: "Simbol kimia untuk kalium adalah ...",
    answers: ["K", "Ka", "P", "Pt"],
    correctAnswer: "K",
  },
  {
    question: "Simbol kimia untuk oksigen adalah ...",
    answers: ["O", "Ox", "Og", "H"],
    correctAnswer: "O",
  },
  {
    question: "Satuan SI untuk massa adalah ...",
    answers: ["Kilogram", "Gram", "Ton", "Ons"],
    correctAnswer: "Kilogram",
  },
  {
    question: "Satuan SI untuk waktu adalah ...",
    answers: ["Detik", "Menit", "Jam", "Hari"],
    correctAnswer: "Detik",
  },
  {
    question: "Satuan SI untuk panjang adalah ...",
    answers: ["Meter", "Kilometer", "Centimeter", "Milimeter"],
    correctAnswer: "Meter",
  },
  {
    question: "Zat yang mempercepat reaksi kimia tanpa ikut bereaksi disebut ...",
    answers: ["Katalis", "Pelarut", "Reaktan", "Produk"],
    correctAnswer: "Katalis",
  },
  {
    question: "Hukum I Newton tentang gerak membahas ...",
    answers: ["Kelembaman", "Gaya gravitasi", "Aksi-reaksi", "Energi potensial"],
    correctAnswer: "Kelembaman",
  },
  {
    question: "Gaya yang menarik benda ke pusat Bumi disebut ...",
    answers: ["Gravitasi", "Gesek", "Normal", "Sentripetal"],
    correctAnswer: "Gravitasi",
  },
  {
    question: "Proses perubahan zat cair menjadi gas disebut ...",
    answers: ["Penguapan", "Peleburan", "Pembekuan", "Kondensasi"],
    correctAnswer: "Penguapan",
  },
  {
    question: "Organ tempat pertukaran oksigen dan karbon dioksida pada manusia adalah ...",
    answers: ["Paru-paru", "Jantung", "Hati", "Ginjal"],
    correctAnswer: "Paru-paru",
  },
  {
    question: "Pembuluh darah yang membawa darah keluar dari jantung adalah ...",
    answers: ["Arteri", "Vena", "Kapiler", "Aorta"],
    correctAnswer: "Arteri",
  },
  {
    question: "Urutan planet dari Matahari yang benar adalah ...",
    answers: ["Merkurius, Venus, Bumi, Mars", "Venus, Merkurius, Bumi, Mars", "Bumi, Venus, Merkurius, Mars", "Mars, Bumi, Venus, Merkurius"],
    correctAnswer: "Merkurius, Venus, Bumi, Mars",
  },
  {
    question: "Orang yang mempelajari makhluk hidup disebut ...",
    answers: ["Biolog", "Kimiawan", "Fisikawan", "Geolog"],
    correctAnswer: "Biolog",
  },
  {
    question: "Energi yang tersimpan karena posisi disebut ...",
    answers: ["Energi potensial", "Energi kinetik", "Energi panas", "Energi bunyi"],
    correctAnswer: "Energi potensial",
  },
  {
    question: "Perpindahan panas melalui zat padat tanpa perpindahan partikel disebut ...",
    answers: ["Konduksi", "Konveksi", "Radiasi", "Difusi"],
    correctAnswer: "Konduksi",
  },
  {
    question: "Bunyi tidak dapat merambat melalui ...",
    answers: ["Ruang hampa", "Padat", "Cair", "Gas"],
    correctAnswer: "Ruang hampa",
  },
  {
    question: "Fotosintesis menghasilkan ...",
    answers: ["Oksigen", "Karbon monoksida", "Nitrogen", "Amonia"],
    correctAnswer: "Oksigen",
  },
  {
    question: "Klorofil terdapat pada ...",
    answers: ["Kloroplas", "Mitokondria", "Ribosom", "Inti sel"],
    correctAnswer: "Kloroplas",
  },
  {
    question: "Bagian sel yang menghasilkan energi adalah ...",
    answers: ["Mitokondria", "Lisosom", "Vakuola", "Ribosom"],
    correctAnswer: "Mitokondria",
  },
  {
    question: "Atom tersusun dari proton, neutron, dan ...",
    answers: ["Elektron", "Positron", "Ion", "Molekul"],
    correctAnswer: "Elektron",
  },
  {
    question: "Skala untuk mengukur kekuatan gempa adalah ...",
    answers: ["Skala Richter", "Skala Celsius", "Skala Mohs", "Skala pH"],
    correctAnswer: "Skala Richter",
  },
  {
    question: "Batuan yang terbentuk dari pendinginan magma disebut ...",
    answers: ["Batuan beku", "Batuan sedimen", "Batuan metamorf", "Batuan kapur"],
    correctAnswer: "Batuan beku",
  },
  {
    question: "Perubahan wujud dari gas menjadi cair disebut ...",
    answers: ["Kondensasi", "Sublimasi", "Deposisi", "Evaporasi"],
    correctAnswer: "Kondensasi",
  },
  {
    question: "Gelombang radio termasuk gelombang ...",
    answers: ["Elektromagnetik", "Mekanik", "Longitudinal dalam zat padat", "Permukaan"],
    correctAnswer: "Elektromagnetik",
  },
  {
    question: "Satuan frekuensi adalah ...",
    answers: ["Hertz", "Newton", "Joule", "Pascal"],
    correctAnswer: "Hertz",
  },
  {
    question: "Kecepatan adalah perubahan ... terhadap waktu.",
    answers: ["Jarak", "Massa", "Gaya", "Energi"],
    correctAnswer: "Jarak",
  },
  {
    question: "Jumlah sila dalam Pancasila adalah ...",
    answers: ["5", "4", "3", "7"],
    correctAnswer: "5",
  },
  {
    question: "Bahasa resmi Indonesia adalah ...",
    answers: ["Bahasa Indonesia", "Bahasa Jawa", "Bahasa Sunda", "Bahasa Melayu"],
    correctAnswer: "Bahasa Indonesia",
  },
  {
    question: "Lambang negara Indonesia adalah ...",
    answers: ["Garuda Pancasila", "Sang Saka Merah Putih", "Semboyan Bhinneka", "Peta Nusantara"],
    correctAnswer: "Garuda Pancasila",
  },
  {
    question: "Semboyan negara Indonesia adalah ...",
    answers: ["Bhinneka Tunggal Ika", "Tut Wuri Handayani", "Merah Putih", "Garuda Jaya"],
    correctAnswer: "Bhinneka Tunggal Ika",
  },
  {
    question: "Teks proklamasi Indonesia dibacakan pada tanggal ...",
    answers: ["17 Agustus 1945", "1 Juni 1945", "28 Oktober 1928", "10 November 1945"],
    correctAnswer: "17 Agustus 1945",
  },
  {
    question: "Kata baku dari 'aktifitas' adalah ...",
    answers: ["aktivitas", "aktifitas", "akfitas", "aktivtas"],
    correctAnswer: "aktivitas",
  },
  {
    question: "Antonim dari 'besar' adalah ...",
    answers: ["kecil", "panjang", "tinggi", "jauh"],
    correctAnswer: "kecil",
  },
  {
    question: "Sinonim dari 'pandai' adalah ...",
    answers: ["cerdas", "malas", "lambat", "bisu"],
    correctAnswer: "cerdas",
  },
  {
    question: "Arti 'khatulistiwa' adalah ...",
    answers: ["garis ekuator", "garis bujur", "garis lintas balik", "garis meridian"],
    correctAnswer: "garis ekuator",
  },
  {
    question: "Ibu kota provinsi Jawa Barat adalah ...",
    answers: ["Bandung", "Semarang", "Surabaya", "Yogyakarta"],
    correctAnswer: "Bandung",
  },
  {
    question: "Huruf vokal bahasa Indonesia berjumlah ...",
    answers: ["5", "6", "4", "7"],
    correctAnswer: "5",
  },
  {
    question: "Penulisan yang benar adalah ...",
    answers: ["insya Allah", "inshaallah", "insyaallah", "insyallah"],
    correctAnswer: "insya Allah",
  },
  {
    question: "Bentuk pasif dari 'Mereka menulis surat' adalah ...",
    answers: ["Surat ditulis oleh mereka", "Surat menulis mereka", "Mereka ditulis surat", "Menulis surat mereka"],
    correctAnswer: "Surat ditulis oleh mereka",
  },
  {
    question: "Kalimat efektif adalah kalimat yang ...",
    answers: ["Jelas dan lugas", "Panjang dan rumit", "Banyak majas", "Tidak baku"],
    correctAnswer: "Jelas dan lugas",
  },
  {
    question: "'Dia membaca buku' adalah kalimat ...",
    answers: ["aktif", "pasif", "imperatif", "tanya"],
    correctAnswer: "aktif",
  },
  {
    question: "Kata yang termasuk kata serapan adalah ...",
    answers: ["televisi", "buku", "air", "tanah"],
    correctAnswer: "televisi",
  },
  {
    question: "Bentuk jamak bahasa Indonesia dinyatakan dengan ...",
    answers: ["pengulangan", "imbuhan -s", "imbuhan -es", "huruf kapital"],
    correctAnswer: "pengulangan",
  },
  {
    question: "Huruf kapital digunakan pada ...",
    answers: ["Awal kalimat", "Akhir kalimat", "Kata depan", "Kata penghubung"],
    correctAnswer: "Awal kalimat",
  },
  {
    question: "Kata baku dari 'resiko' adalah ...",
    answers: ["risiko", "resiko", "ris iko", "reisko"],
    correctAnswer: "risiko",
  },
  {
    question: "Kata yang benar penulisannya adalah ...",
    answers: ["praktik", "praktek", "prakteg", "praktikek"],
    correctAnswer: "praktik",
  },
  {
    question: "Laut terluas di dunia adalah ...",
    answers: ["Samudra Pasifik", "Samudra Atlantik", "Samudra Hindia", "Samudra Arktik"],
    correctAnswer: "Samudra Pasifik",
  },
  {
    question: "Benua terbesar di dunia adalah ...",
    answers: ["Asia", "Afrika", "Amerika", "Eropa"],
    correctAnswer: "Asia",
  },
  {
    question: "Gunung tertinggi di dunia adalah ...",
    answers: ["Everest", "K2", "Kangchenjunga", "Lhotse"],
    correctAnswer: "Everest",
  },
  {
    question: "Negara dengan populasi terbanyak adalah ...",
    answers: ["Tiongkok atau India", "Amerika Serikat", "Indonesia", "Brasil"],
    correctAnswer: "Tiongkok atau India",
  },
  {
    question: "Alat untuk mengukur suhu adalah ...",
    answers: ["Termometer", "Barometer", "Higrometer", "Anemometer"],
    correctAnswer: "Termometer",
  },
  {
    question: "Alat untuk mengukur tekanan udara adalah ...",
    answers: ["Barometer", "Termometer", "Higrometer", "Altimeter"],
    correctAnswer: "Barometer",
  },
  {
    question: "Kompas menunjukkan arah ...",
    answers: ["Utara", "Selatan", "Timur", "Barat"],
    correctAnswer: "Utara",
  },
  {
    question: "Musim kemarau di Indonesia biasanya terjadi pada rentang bulan ...",
    answers: ["April–September", "Oktober–Maret", "Desember–Juni", "Mei–November"],
    correctAnswer: "April–September",
  },
  {
    question: "Bagian komputer yang memproses data utama disebut ...",
    answers: ["CPU", "RAM", "Harddisk", "Monitor"],
    correctAnswer: "CPU",
  },
  {
    question: "Alat pernapasan pada ikan adalah ...",
    answers: ["Insang", "Paru-paru", "Kulit", "Trakea"],
    correctAnswer: "Insang",
  },
  {
    question: "Warna primer cahaya adalah ...",
    answers: ["Merah, hijau, biru", "Merah, kuning, biru", "Merah, hijau, kuning", "Merah, biru, hitam"],
    correctAnswer: "Merah, hijau, biru",
  },
  {
    question: "Warna primer pigmen cat tradisional adalah ...",
    answers: ["Merah, kuning, biru", "Merah, hijau, biru", "Sian, magenta, kuning", "Hitam, putih, abu"],
    correctAnswer: "Merah, kuning, biru",
  },
  {
    question: "Bentuk bumi yang benar adalah ...",
    answers: ["Hampir bulat (geoid)", "Benar-benar datar", "Kubus", "Kerucut"],
    correctAnswer: "Hampir bulat (geoid)",
  },
  {
    question: "Negara kepulauan terbesar adalah ...",
    answers: ["Indonesia", "Filipina", "Jepang", "Maladewa"],
    correctAnswer: "Indonesia",
  },
  {
    question: "Sungai terpanjang di dunia sering disebut ...",
    answers: ["Nile atau Amazon", "Yangtze", "Mississippi", "Mekong"],
    correctAnswer: "Nile atau Amazon",
  },
  {
    question: "Bahasa internasional yang paling umum digunakan adalah ...",
    answers: ["Bahasa Inggris", "Bahasa Mandarin", "Bahasa Spanyol", "Bahasa Arab"],
    correctAnswer: "Bahasa Inggris",
  },
  {
    question: "Alat untuk mengukur kecepatan angin adalah ...",
    answers: ["Anemometer", "Higrometer", "Altimeter", "Barometer"],
    correctAnswer: "Anemometer",
  },
  {
    question: "Lapisan atmosfer terdekat dengan permukaan bumi adalah ...",
    answers: ["Troposfer", "Stratosfer", "Mesosfer", "Termosfer"],
    correctAnswer: "Troposfer",
  },
  {
    question: "Hewan yang berkembang biak dengan bertelur disebut ...",
    answers: ["Ovipar", "Vivipar", "Ovovivipar", "Metamorf"],
    correctAnswer: "Ovipar",
  },
  {
    question: "Satuan energi dalam SI adalah ...",
    answers: ["Joule", "Watt", "Newton", "Pascal"],
    correctAnswer: "Joule",
  },
  {
    question: "Satuan gaya dalam SI adalah ...",
    answers: ["Newton", "Joule", "Watt", "Pascal"],
    correctAnswer: "Newton",
  },
  {
    question: "Satuan daya dalam SI adalah ...",
    answers: ["Watt", "Joule", "Newton", "Pascal"],
    correctAnswer: "Watt",
  },
  {
    question: "Organ penyusun sistem peredaran darah yang memompa darah adalah ...",
    answers: ["Jantung", "Paru-paru", "Hati", "Ginjal"],
    correctAnswer: "Jantung",
  },
  {
    question: "Keragaman budaya Indonesia disebut ...",
    answers: ["Bhinneka Tunggal Ika", "Gotong royong", "Musyawarah", "Pancasila"],
    correctAnswer: "Bhinneka Tunggal Ika",
  },
  {
    question: "Teknik menulis ringkas isi bacaan disebut ...",
    answers: ["Meringkas", "Mengarang", "Menganalisis", "Menyalin"],
    correctAnswer: "Meringkas",
  },
  {
    question: "Salah satu karya sastra berbentuk puisi adalah ...",
    answers: ["Pantun", "Cerpen", "Novel", "Drama"],
    correctAnswer: "Pantun",
  },
  {
    question: "Salah satu contoh energi terbarukan adalah ...",
    answers: ["Tenaga surya", "Batu bara", "Minyak bumi", "Gas alam"],
    correctAnswer: "Tenaga surya",
  },
  {
    question: "Benda langit yang memantulkan cahaya matahari dan mengelilingi bumi adalah ...",
    answers: ["Bulan", "Bintang", "Komet", "Asteroid"],
    correctAnswer: "Bulan",
  },
  {
    question: "Rumus luas persegi adalah ...",
    answers: ["s x s", "p x l", "½ a t", "πr²"],
    correctAnswer: "s x s",
  },
  {
    question: "Rumus keliling lingkaran adalah ...",
    answers: ["2πr", "πr²", "½ a t", "s x s"],
    correctAnswer: "2πr",
  },
  {
    question: "Perangkat lunak untuk mengetik dokumen adalah ...",
    answers: ["Pengolah kata", "Peramban", "Pemutar musik", "Editor video"],
    correctAnswer: "Pengolah kata",
  },
];

export const getQuestionBank = (gameType: string): Question[] => {
  switch (gameType) {
    case "Kuis Matematika":
      return mathQuestions;
    case "Logika & Penalaran":
      return logicQuestions;
    case "Kuis Umum":
      return generalQuestions;
    default:
      return []; // Kembalikan array kosong jika tidak ditemukan
  }
};