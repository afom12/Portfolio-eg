// Modern JavaScript with GSAP Animations and Interactive Elements
document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    
    mobileMenu.addEventListener('click', function() {
        this.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
    
    // Close mobile menu when clicking a nav link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
    
    // Theme Toggle
    const themeToggle = document.getElementById('theme-toggle');
    let currentTheme = 'light';
    
    themeToggle.addEventListener('click', function() {
        if (currentTheme === 'light') {
            document.body.classList.add('dark-mode');
            themeToggle.innerHTML = '<span class="icon">🌅</span><span class="tooltip">Toggle Theme</span>';
            currentTheme = 'dark';
        } else if (currentTheme === 'dark') {
            document.body.classList.remove('dark-mode');
            themeToggle.innerHTML = '<span class="icon">☀️</span><span class="tooltip">Toggle Theme</span>';
            currentTheme = 'light';
        }
        
        // Animate the theme toggle button
        gsap.fromTo(themeToggle, 
            { scale: 0.8, rotation: -30 },
            { scale: 1, rotation: 0, duration: 0.5, ease: "elastic.out(1, 0.5)" }
        );
    });
    
    // GSAP Animations
    gsap.registerPlugin(ScrollTrigger);
    
    // Hero section animation
    gsap.from('.hero-subtitle', {
        opacity: 0,
        y: 20,
        duration: 0.8,
        delay: 0.2
    });
    
    gsap.from('.hero-title', {
        opacity: 0,
        y: 20,
        duration: 0.8,
        delay: 0.4
    });
    
    gsap.from('.hero-tagline', {
        opacity: 0,
        y: 20,
        duration: 0.8,
        delay: 0.6
    });
    
    gsap.from('.hero-description', {
        opacity: 0,
        y: 20,
        duration: 0.8,
        delay: 0.8
    });
    
    gsap.from('.cta-btn', {
        opacity: 0,
        y: 20,
        duration: 0.8,
        delay: 1
    });
    
    gsap.from('.profile-photo', {
        opacity: 0,
        scale: 0.8,
        duration: 1,
        delay: 0.5,
        ease: "back.out(1.7)"
    });
    
    gsap.from('.image-frame', {
        opacity: 0,
        x: 20,
        y: 20,
        duration: 1,
        delay: 0.8,
        ease: "power3.out"
    });
    
    // Section animations
    gsap.utils.toArray('section').forEach(section => {
        gsap.from(section, {
            scrollTrigger: {
                trigger: section,
                start: "top 80%",
                toggleActions: "play none none none"
            },
            opacity: 0,
            y: 50,
            duration: 0.8
        });
    });
    
    // Project card animations
    gsap.utils.toArray('.project-card').forEach((card, i) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: "top 80%",
                toggleActions: "play none none none"
            },
            opacity: 0,
            y: 50,
            duration: 0.6,
            delay: i * 0.1
        });
    });
    
    // Skill bar animations
    gsap.utils.toArray('.skill-level').forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0';
        
        ScrollTrigger.create({
            trigger: bar,
            start: "top 80%",
            onEnter: () => {
                gsap.to(bar, {
                    width: width,
                    duration: 1.5,
                    ease: "power3.out"
                });
            }
        });
    });
    
    // Floating theme button tooltip
    const themeButton = document.querySelector('.theme-button');
    const tooltip = document.querySelector('.tooltip');
    
    themeButton.addEventListener('mouseenter', () => {
        gsap.to(tooltip, {
            opacity: 1,
            right: 60,
            duration: 0.3
        });
    });
    
    themeButton.addEventListener('mouseleave', () => {
        gsap.to(tooltip, {
            opacity: 0,
            right: 70,
            duration: 0.3
        });
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Contact form submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = this.querySelector('#name').value;
            const email = this.querySelector('#email').value;
            const message = this.querySelector('#message').value;
            
            // Here you would typically send the form data to a server
            console.log('Form submitted:', { name, email, message });
            
            // Show success message
            alert('Thank you for your message! I will get back to you soon.');
            
            // Reset form
            this.reset();
            
            // Animate the submit button
            gsap.fromTo(this.querySelector('button'), 
                { scale: 0.8 },
                { scale: 1, duration: 0.5, ease: "elastic.out(1, 0.5)" }
            );
        });
    }
});