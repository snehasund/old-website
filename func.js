let images = ["profile-picture.jpg", "profile-picture-2.png", "profile-picture-3.jpg"];
let currentIndex = 0;
let profilePicture = document.getElementById("profile-picture");

function changeImage() {
    currentIndex = (currentIndex + 1) % images.length;
    profilePicture.src = images[currentIndex];
}

setInterval(changeImage, 3000); // Change image every 3 seconds

document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener("scroll", function() {
        let cards = document.querySelectorAll(".card");
        
        cards.forEach(function(card) {
            if (isElementInViewport(card) && !card.classList.contains("animated")) {
                card.classList.add("animated");
            }
        });
    });
    
    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
});

function toggleFlashcard(card) {
    card.classList.toggle('flipped');
  }
  