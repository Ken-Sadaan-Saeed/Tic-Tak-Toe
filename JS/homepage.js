function displayDate() {
    alert(Date());
}

document.addEventListener('DOMContentLoaded', function() {
    const btn = document.querySelector('.btn');
    if (!btn) return;

    function moveAway() {
        const safeMargin = 10; // percent
        const x = Math.random() * (100 - safeMargin * 2) + safeMargin;
        const y = Math.random() * (100 - safeMargin * 2) + safeMargin;
        btn.style.left = x + '%';
        btn.style.top = y + '%';
        btn.style.transform = 'translate(-50%, -50%)';
    }

    btn.addEventListener('mouseenter', moveAway);
});
