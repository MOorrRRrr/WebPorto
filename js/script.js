const cards = document.querySelectorAll('.skill-card');
const dots = document.querySelectorAll('.dot');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentIndex = 1; 

function updateCarousel(index) {
    cards.forEach((card, i) => {
        card.classList.remove('focus', 'side');
        dots[i].classList.remove('active');
        
        if (i === index) {
            card.classList.add('focus');
            dots[i].classList.add('active');
        } else {
            card.classList.add('side');
        }
    });
}

// Event Klik Tombol
nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % cards.length;
    updateCarousel(currentIndex);
});

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + cards.length) % cards.length;
    updateCarousel(currentIndex);
});

// Event Klik langsung pada kartu
cards.forEach((card, i) => {
    card.addEventListener('click', () => {
        currentIndex = i;
        updateCarousel(currentIndex);
    });
});
