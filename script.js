// Theme Toggle Switch Script
const themeToggleBtn = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

// Check Local Storage or System Preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    htmlElement.className = savedTheme;
} else {
    htmlElement.classList.add('dark'); // Default theme
}

// Toggle Theme Event
themeToggleBtn.addEventListener('click', () => {
    if (htmlElement.classList.contains('dark')) {
        htmlElement.classList.remove('dark');
        htmlElement.classList.add('light');
        localStorage.setItem('theme', 'light');
    } else {
        htmlElement.classList.remove('light');
        htmlElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
    }
});

// Interactive Modal Logic for Project Demos
const modal = document.getElementById('demoModal');
const closeModal = document.querySelector('.close-modal');
const modalTitle = document.getElementById('modalTitle');
const modalLive = document.getElementById('modalLive');
const modalGithub = document.getElementById('modalGithub');

function openDemo(title, githubUrl, liveUrl) {
    modalTitle.innerText = title;
    modalGithub.href = githubUrl || '#';
    
    if (liveUrl) {
        modalLive.style.display = 'inline-flex';
        modalLive.href = liveUrl;
    } else {
        modalLive.style.display = 'none';
    }
    
    modal.style.display = 'flex';
}

closeModal.onclick = function() {
    modal.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Typing Effect Animation
// Continuous Typing & Deleting Effect
const roles = [
    "Menna Allah Mohamed",
    "a Front-End Developer"
];

const typingElement = document.getElementById("typing-text");
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function handleType() {
    const currentText = roles[textIndex];
    
    if (isDeleting) {
        typingElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
    }

    // سرعة الكتابة والمسح
    let typeSpeed = isDeleting ? 50 : 100;

    // عند اكتمال كتابة الكلمة
    if (!isDeleting && charIndex === currentText.length) {
        typeSpeed = 2000; // انتظار ثانيتين قبل البدء في المسح
        isDeleting = true;
    } 
    // عند الانتهاء من مسح الكلمة
    else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % roles.length; // الانتقال للعنوان التالي
        typeSpeed = 500; // انتظار نصف ثانية قبل كتابة العنوان الجديد
    }

    setTimeout(handleType, typeSpeed);
}

// Start animation on load
document.addEventListener("DOMContentLoaded", () => {
    if (typingElement) {
        setTimeout(handleType, 500);
    }
});