document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById('form');
    const text = document.getElementById('text');
    const template = document.getElementById('template');
    const bottom = document.getElementById('bottom');

    let cloneCount = 0;

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const textValue = text.value.trim();

        if (textValue !== "" && cloneCount < 4) {
            const clone = template.content.cloneNode(true);

            const todoElement = clone.querySelector('.content');
            todoElement.innerHTML = `<input type="checkbox" /> ${textValue}`;

            const cloneContainer = document.createElement("div");
            cloneContainer.appendChild(clone);
            bottom.appendChild(cloneContainer);

            const deletebtn = cloneContainer.querySelector('.delete');
            deletebtn.addEventListener("click", function () {
                bottom.removeChild(cloneContainer);
                cloneCount--;
            });

            cloneCount++;

            text.value = "";
        }
    });
});