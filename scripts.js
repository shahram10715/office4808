document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.tab-button');
    const contents = document.querySelectorAll('.tab-content');

    function activate(tab) {
        buttons.forEach(b => b.classList.toggle('active', b.dataset.tab === tab));
        contents.forEach(c => c.classList.toggle('active', c.id === tab));
    }

    buttons.forEach(btn => {
        btn.addEventListener('click', () => activate(btn.dataset.tab));
    });
});
