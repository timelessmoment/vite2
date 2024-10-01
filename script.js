// Script for countdown timer (optional)
const eventDate = new Date("Dec 12, 2024 10:00:00").getTime();
const countdownElement = document.createElement('div');
document.body.insertBefore(countdownElement, document.querySelector('footer'));

const x = setInterval(function() {
    const now = new Date().getTime();
    const distance = eventDate - now;
    
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    countdownElement.innerHTML = `Hitung Mundur: ${days} hari ${hours} jam ${minutes} menit ${seconds} detik`;
    
    if (distance < 0) {
        clearInterval(x);
        countdownElement.innerHTML = "Acara sudah dimulai!";
    }
}, 1000);