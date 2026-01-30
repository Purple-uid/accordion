const btn = document.querySelectorAll('#rotateBtn');
let boolType = false;

btn.forEach((button, index) => {
    let boolType = false; 

    button.addEventListener('click', function() {
        const content = this.nextElementSibling;

        if (!boolType) {
            content.style.maxHeight = content.scrollHeight + 'px';
            content.style.transform = 'rotate(0deg)';
            btn.textContent = "Свернуть"
            boolType = true;
        } else {
            content.style.maxHeight = '0';
            content.style.transform = 'rotate(0deg)';
            btn.textContent = "Развернуть"
            boolType = false;
        };
    });
});