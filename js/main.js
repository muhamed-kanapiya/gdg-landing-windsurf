// Theme Switcher
const themeToggle = document.querySelector('.theme-toggle');
const body = document.body;
const icon = themeToggle.querySelector('i');

themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-theme');
    body.classList.toggle('dark-theme');
    icon.classList.toggle('fa-moon');
    icon.classList.toggle('fa-sun');
});

// Intersection Observer for animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Add fade-in class to elements
document.querySelectorAll('section').forEach(section => {
    section.classList.add('fade-in');
    observer.observe(section);
});

// Modal Handling
const modal = document.getElementById('registerModal');
const registerBtn = document.getElementById('registerBtn');
const closeModal = document.querySelector('.close-modal');
const registrationForm = document.getElementById('registrationForm');

registerBtn.addEventListener('click', () => {
    modal.classList.add('active');
});

closeModal.addEventListener('click', () => {
    modal.classList.remove('active');
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('active');
    }
});

// Form Validation and Submission
registrationForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const ticket = document.getElementById('ticket');
    
    if (validateForm(name, email, ticket)) {
        // Show success message
        showMessage('Registration successful! We\'ll contact you soon.', 'success');
        registrationForm.reset();
        setTimeout(() => {
            modal.classList.remove('active');
        }, 2000);
    }
});

function validateForm(name, email, ticket) {
    let isValid = true;
    
    if (!name.value.trim()) {
        showError(name, 'Name is required');
        isValid = false;
    }
    
    if (!email.value.trim()) {
        showError(email, 'Email is required');
        isValid = false;
    } else if (!isValidEmail(email.value)) {
        showError(email, 'Please enter a valid email');
        isValid = false;
    }
    
    if (!ticket.value) {
        showError(ticket, 'Please select a ticket type');
        isValid = false;
    }
    
    return isValid;
}

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function showError(input, message) {
    const formGroup = input.parentElement;
    const error = formGroup.querySelector('.error-message') || document.createElement('div');
    error.className = 'error-message';
    error.textContent = message;
    if (!formGroup.querySelector('.error-message')) {
        formGroup.appendChild(error);
    }
    input.classList.add('error');
}

function showMessage(message, type) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${type}`;
    messageDiv.textContent = message;
    registrationForm.insertBefore(messageDiv, registrationForm.firstChild);
    setTimeout(() => {
        messageDiv.remove();
    }, 3000);
}

// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    const icon = menuToggle.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.navbar')) {
        navLinks.classList.remove('active');
        const icon = menuToggle.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// Close mobile menu when clicking on a link
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        const icon = menuToggle.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    });
});

// Schedule Data
const scheduleData = [
    {
        time: '9:00 AM',
        title: 'Registration & Breakfast',
        speaker: '',
        track: 'all'
    },
    {
        time: '10:00 AM',
        title: 'Keynote: Future of Web Development',
        speaker: 'John Doe',
        track: 'web'
    },
    {
        time: '11:00 AM',
        title: 'Flutter for Cross-platform Development',
        speaker: 'Jane Smith',
        track: 'mobile'
    },
    {
        time: '12:00 PM',
        title: 'Cloud Native Applications',
        speaker: 'Mike Johnson',
        track: 'cloud'
    },
    // Add more schedule items as needed
];

// Populate Schedule
const timeline = document.querySelector('.timeline');
const filterButtons = document.querySelectorAll('.filter-btn');

function populateSchedule(track = 'all') {
    timeline.innerHTML = '';
    const filteredSchedule = track === 'all' 
        ? scheduleData 
        : scheduleData.filter(item => item.track === track);
    
    filteredSchedule.forEach(item => {
        const scheduleItem = document.createElement('div');
        scheduleItem.className = 'schedule-item fade-in';
        scheduleItem.innerHTML = `
            <div class="time">${item.time}</div>
            <div class="content">
                <h3>${item.title}</h3>
                ${item.speaker ? `<p>Speaker: ${item.speaker}</p>` : ''}
            </div>
        `;
        timeline.appendChild(scheduleItem);
        observer.observe(scheduleItem);
    });
}

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        populateSchedule(button.dataset.track);
    });
});

// Testimonials Data
const testimonials = [
    {
        name: 'Sarah Johnson',
        handle: '@sarahdev',
        image: 'assets/testimonial1.jpg',
        text: 'Amazing event! Learned so much about the latest web technologies.'
    },
    {
        name: 'Mike Chen',
        handle: '@mikechen',
        image: 'assets/testimonial2.jpg',
        text: 'The workshops were incredibly hands-on and practical.'
    },
    // Add more testimonials as needed
];

// Populate Testimonials
const testimonialsGrid = document.querySelector('.testimonials-grid');

function populateTestimonials() {
    testimonials.forEach(testimonial => {
        const testimonialCard = document.createElement('div');
        testimonialCard.className = 'testimonial-card fade-in';
        testimonialCard.innerHTML = `
            <div class="profile">
                <img src="${testimonial.image}" alt="${testimonial.name}">
                <div class="info">
                    <h4>${testimonial.name}</h4>
                    <p>${testimonial.handle}</p>
                </div>
            </div>
            <p class="quote">${testimonial.text}</p>
        `;
        testimonialsGrid.appendChild(testimonialCard);
        observer.observe(testimonialCard);
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    populateSchedule();
    populateTestimonials();
});
