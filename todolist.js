document.addEventListener("DOMContentLoaded", function () {
    const listbtn = document.getElementById('listbtn');
    const box = document.getElementById('box');

    listbtn.addEventListener('click', function() {
        box.classList.toggle('hide');
    });

    const form = document.getElementById('form');
    const date = document.getElementById('date');
    const text = document.getElementById('text');
    const bottom = document.getElementById('bottom');
    const template = document.getElementById('template');

    let cloneCount = 0;

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const textValue = text.value.trim();
        const dateValue = date.value;

        if (dateValue !== "" && textValue !== "" && cloneCount < 4) {
            const clone = template.content.cloneNode(true);
            const textDateElement = clone.querySelector('.text-date');

            textDateElement.textContent = `${textValue} (${dateValue})`;
            
            const checkbox = clone.querySelector('input[type="checkbox"]');
            checkbox.addEventListener('change', function() {
                if (checkbox.checked) {
                    textDateElement.classList.add('strikethrough');
                } else {
                    textDateElement.classList.remove('strikethrough');
                }
            });

            const deletebtn = clone.querySelector('.delete');
            deletebtn.addEventListener("click", function () {
                deletebtn.parentNode.parentNode.remove();
                cloneCount--;
            });

            bottom.appendChild(clone);
            cloneCount++;
            text.value = "";
            date.value = "";
        }
    });
});