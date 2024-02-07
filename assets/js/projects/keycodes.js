const insert = document.getElementById('insert');

window.addEventListener('keydown', (e) => {
    insert.innerHTML = `
        <div class="key">
            ${e.key === " " ? "Space" : e.key}
            <small>key</small>
        </div>

        <div class="key">
            ${e.keyCode}
            <small>(old)code</small>
        </div>

        <div class="key">
            ${e.code}
            <small>(new)code</small>
        </div>
    `;
});