document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById('form');
    const text = document.getElementById('text');
    const template = document.getElementById('template');
    const bottom = document.getElementById('bottom');

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        // console.log('폼이 제출되었습니다.');

        const textValue = text.value.trim();
        // console.log(text.value);
        // console.log(textValue);

        if (textValue !== "") {
            const clone = template.content.cloneNode(true);

            const todoElement = clone.querySelector('.content');
            todoElement.innerHTML = `<input type="checkbox" /> ${textValue}`;

            const cloneContainer = document.createElement("div");
            cloneContainer.appendChild(clone);
            bottom.appendChild(cloneContainer);

            const deletebtn = cloneContainer.querySelector('.delete');
            deletebtn.addEventListener("click", function () {
                bottom.removeChild(cloneContainer);
            });
            
            text.vlaue = "";
        }
    });
});