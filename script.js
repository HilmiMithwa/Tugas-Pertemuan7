const btnNav = document.querySelector('.btn-nav'); //Fixed


btnNav.addEventListener('click', function(e) {
  e.preventDefault();
  alert('Selamat datang di TaskFlow!');
});

//Alasan Mengapa ini tidak bisa jalan yaitu karena pada index.html, secara spesifik pada bagian
// <li><a href="#" class="btn-nav">Mulai Gratis</a></li> tidak memiliki class "btn-nav-salah". Script.js tidak menemukan  class btn-nav-salah pada index.html
//const btnNav = document.querySelector('.btn-nav-salah'); -> bagian ini merupakan pemicu error

const heading = document.querySelector('.hero-text h1'); // Error disini, namun sudah fixed


heading.innerText = 'TaskFlow – Solusi Tim Modern';

//Disaat saya console, error yang saya dapatkan yaitu Uncaught TypeError: Cannot set properties of null (setting 'innerText')
//Penyebab error sendiri variabel heading tidak menemukan elemen class dengan nama hero-heading

const cards = document.querySelectorAll('.feature-card'); //erorr juga disni namun sudah fixed


let total = 0;

for (let i = 0; i < cards.length; i++) { //error disini, namun sudah fixed
    total++;
}

console.log('Jumlah fitur: ' + total);

//Bug pertama yaitu pada bagian querySelectorAll, dimana script.js tidak menemukan elemen class "feature-cards".
//Bug kedua yaitu pada bagian for loop, dimana logikanya yang salah yaitu menggunakan operator (<=) yang menyebabkan iterasi melebihi jumlah elemen yang ada


const cobaGratis = document.querySelector('.btn-primary');

cobaGratis.addEventListener('click', function(e) {

    const defaultText = cobaGratis.innerText;
    const defaultColor = cobaGratis.style.backgroundColor;
    e.preventDefault();

    setTimeout(() => {
        cobaGratis.innerText = 'Mendaftar...';
        cobaGratis.style.backgroundColor = '#94a3b8';

        setTimeout(() => {
            this.innerText = defaultText;
            this.style.backgroundColor = defaultColor;
        }, 2000)

    }, 2000);
})

const highlightedFeatureCards = document.querySelectorAll('.feature-card');

highlightedFeatureCards.forEach((card) => {
    card.addEventListener('click', function(e)  {
        e.preventDefault(e);

        highlightedFeatureCards.forEach((card) => {
            card.classList.remove('active');
        });

        this.classList.toggle('active');
    })
})

const inputTestimonials = document.getElementById('review-input');
const reviewButton = document.getElementById('review-btn');
const reviewMessages = document.getElementById('review-msg');

 

reviewButton.addEventListener('click', function(e) {
    e.preventDefault();

    const isiUlasan = inputTestimonials.value.trim();

    if (isiUlasan === '' ) {
        reviewMessages.innerText = 'Ulasan tidak boleh kosong';
        reviewMessages.style.color = '#ef4444';
    } else if (isiUlasan.length < 10) {
        reviewMessages.innerText = 'Ulasan terlalu singkat. Minimal 10 Karakter';
        reviewMessages.style.color = '#f97316';
    } else {
        reviewMessages.innerText = 'Ulasan berhasil dikirim!';
        reviewMessages.style.color = '#22c55e';
        inputTestimonials.value = '';
    }
})


