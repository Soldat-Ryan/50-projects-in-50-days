const btns = document.querySelectorAll('button.faq-toggle');

btns.forEach(btn => {
    btn.addEventListener('click', () => {
        btn.parentNode.classList.toggle('active');
    })
});