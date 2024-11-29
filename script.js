const typewriterElement = document.getElementById('typewriter');
const texts = ["Web development ", "JAVA ", "Marketing ","DSA ","MERN"];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingSpeed = 100; // Speed of typing
const deletingSpeed = 100; // Speed of deleting
const delayBetweenTexts = 2000; // Delay between texts

function type() {
    const currentText = texts[textIndex];
    
    if (isDeleting) {
        typewriterElement.textContent = currentText.substring(0, charIndex--);
    } else {
        typewriterElement.textContent = currentText.substring(0, charIndex++);
    }
    
    if (!isDeleting && charIndex === currentText.length) {
        isDeleting = true;
        setTimeout(type, delayBetweenTexts);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        setTimeout(type, 500);
    } else {
        setTimeout(type, isDeleting ? deletingSpeed : typingSpeed);
    }
}

// Start the typewriter effect
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(type, 1000);
});

function scrollToAbout() {
    // Get the about section element
    var aboutSection = document.querySelector('.about1');
    // Scroll to the about section using the scrollIntoView() method
    aboutSection.scrollIntoView({ behavior: 'smooth' });
  }
  function scrollToSkill() {
    // Get the about section element
    var aboutSection = document.querySelector('.skill');
    // Scroll to the about section using the scrollIntoView() method
    aboutSection.scrollIntoView({ behavior: 'smooth' });
  }
  function scrollToHome() {
    // Get the about section element
    var aboutSection = document.querySelector('.up');
    // Scroll to the about section using the scrollIntoView() method
    aboutSection.scrollIntoView({ behavior: 'smooth' });
  }
  function scrollToProject() {
    // Get the about section element
    var aboutSection = document.querySelector('.projects');
    // Scroll to the about section using the scrollIntoView() method
    aboutSection.scrollIntoView({ behavior: 'smooth' });
  }
  function scrollToContact() {
    // Get the about section element
    var aboutSection = document.querySelector('.contact');
    // Scroll to the about section using the scrollIntoView() method
    aboutSection.scrollIntoView({ behavior: 'smooth' });
  }

  
  document.addEventListener("DOMContentLoaded", function() {
    const progressBars = document.querySelectorAll('.progress-bar');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progress = entry.target.getAttribute('data-progress');
                entry.target.style.width = progress + '%';
            } else {
                entry.target.style.width = '0%'; // Reset the width when out of view
            }
        });
    }, {
        threshold: 0.5 // Trigger when 50% of the element is visible
    });

    progressBars.forEach(bar => {
        observer.observe(bar);
    });
});
