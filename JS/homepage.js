console.log('homepage.js loaded');

function displayDate() {
    alert(Date());
}

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded — attaching move handler');
    const btn = document.querySelector('.btn');
    if (!btn) {
        console.warn('button .btn not found');
        return;
    }

    function moveAway() {
        console.log('moveAway called');
        const safeMargin = 10; // percent
        const x = Math.random() * (100 - safeMargin * 2) + safeMargin;
        const y = Math.random() * (100 - safeMargin * 2) + safeMargin;
        btn.style.left = x + '%';
        btn.style.top = y + '%';
        btn.style.transform = 'translate(-50%, -50%)';
    }

    btn.addEventListener('mouseenter', moveAway);
});
