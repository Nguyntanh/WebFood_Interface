document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const header = document.getElementById('header');
    let touchStartX = 0;
    let touchEndX = 0;

    // Toggle header visibility on hamburger click
    hamburger.addEventListener('click', () => {
        header.classList.toggle('active');
    });

    // Handle touch swipe for mobile
    document.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });

    document.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        if (window.innerWidth <= 600) {
            if (touchEndX - touchStartX > 50 && !header.classList.contains('active')) {
                header.classList.add('active');
            } else if (touchStartX - touchEndX > 50 && header.classList.contains('active')) {
                header.classList.remove('active');
            }
        }
    });

    // Close header when clicking outside on mobile
    document.addEventListener('click', (e) => {
        if (window.innerWidth <= 600 && !header.contains(e.target) && !hamburger.contains(e.target) && header.classList.contains('active')) {
            header.classList.remove('active');
        }
    });
});