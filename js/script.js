// JavaScript for toggling the mobile menu
// Menu Toggle for Responsive Navigation
const menuToggle = document.querySelector('.menu-toggle');
const navList = document.querySelector('nav ul');

// Toggle the 'open' class when the menu toggle is clicked
menuToggle.addEventListener('click', () => {
    navList.classList.toggle('open');
});



function fetchSermons() {
    fetch('https://example.com/api/sermons') // Example API endpoint
        .then(response => response.json())
        .then(data => {
            const sermonList = document.getElementById('sermon-list');
            data.sermons.forEach(sermon => {
                const sermonItem = document.createElement('div');
                sermonItem.innerHTML = `<h3>${sermon.title}</h3><p>${sermon.description}</p>`;
                sermonList.appendChild(sermonItem);
            });
        })
        .catch(error => console.error('Error fetching sermons:', error));
}

// Show sermon details in a modal
const sermonModal = document.getElementById('sermonModal');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const closeBtn = document.querySelector('.close');

document.querySelectorAll('.sermon-item').forEach(item => {
    item.addEventListener('click', () => {
        modalTitle.textContent = item.querySelector('h3').textContent;
        modalDescription.textContent = item.querySelector('p').textContent;
        sermonModal.classList.add('active');
    });
});

closeBtn.addEventListener('click', () => {
    sermonModal.classList.remove('active');
});

window.addEventListener('click', (e) => {
    if (e.target === sermonModal) {
        sermonModal.classList.remove('active');
    }
});


/////////////////////////////////////////////////////
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}

// Optional: Auto-slide every 5 seconds
setInterval(function() {
    plusSlides(1);
}, 5000);
