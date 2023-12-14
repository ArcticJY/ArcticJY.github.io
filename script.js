let slideIndex = 1;

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");

    if (n > slides.length) {
        slideIndex = 1;
    }

    if (n < 1) {
        slideIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Auto slide (remove/comment this line if you don't want auto sliding)
setInterval(function () {
    plusSlides(1);
}, 5000); // Change slide every 5 seconds

// Initial slide
showSlides(slideIndex);

let currentNotice = 1;
const totalNotices = document.querySelectorAll('.notice-item').length;

function showNotice(index) {
    const notices = document.querySelectorAll('.notice-item');
    notices.forEach((notice, i) => {
        notice.style.left = `${100 * (i - index)}%`;
        notice.style.opacity = (i === index) ? 1 : 0;
    });
}

function nextNotice() {
    currentNotice = (currentNotice + 1) % totalNotices;
    showNotice(currentNotice);
}

function prevNotice() {
    currentNotice = (currentNotice - 1 + totalNotices) % totalNotices;
    showNotice(currentNotice);
}

setInterval(nextNotice, 5000); // Auto-slide every 5 seconds

// Initial visibility setup
showNotice(currentNotice);

const eventContainer = document.getElementById('event-container');
let currentEventIndex = 0;

function scrollEvents(direction) {
    const eventWidth = document.querySelector('.event').offsetWidth + 10;
    currentEventIndex = Math.max(0, Math.min(currentEventIndex + direction, eventContainer.children.length - 3));
    eventContainer.style.transform = `translateX(${-currentEventIndex * eventWidth}px)`;
}

