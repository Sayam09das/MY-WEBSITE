const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('nav ul');
const hamburgerIcon = hamburger.querySelector('i');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburgerIcon.classList.toggle('fa-bars');
    hamburgerIcon.classList.toggle('fa-times');
});

document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburgerIcon.classList.add('fa-bars');
        hamburgerIcon.classList.remove('fa-times');
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', async function (event) {
        event.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const message = document.getElementById('message').value.trim();

        try {
            const response = await fetch('/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, email, subject, message })
            });

            if (response.ok) {
                const result = await response.json();
                showToast(result.message || 'Message sent successfully!', 'success');
                form.reset();
                setTimeout(() => {
                    window.location.href = '/';
                }, 1000);
            } else {
                const errorResult = await response.json();
                showToast(errorResult.error || 'Something went wrong.', 'error');
            }

        } catch (error) {
            console.error('Fetch error:', error);
            showToast('Network error. Please try again later.', 'error');
        }
    });

    function showToast(message, type) {
        Toastify({
            text: message,
            duration: 3000,
            gravity: 'top',
            position: 'right',
            backgroundColor: type === 'success' ? '#4BB543' : '#FF0000',
            close: true
        }).showToast();
    }
});
