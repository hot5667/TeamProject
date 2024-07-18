// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
// import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
// import { collection, addDoc } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
// import { getDocs } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";

// const firebaseConfig = {
//     apiKey: "AIzaSyD0o93MUJorSwMSWkVxu_bgzv_s3OAbyY0",
//     authDomain: "teamshowcase-531d0.firebaseapp.com",
//     projectId: "teamshowcase-531d0",
//     storageBucket: "teamshowcase-531d0.appspot.com",
//     messagingSenderId: "877618284112",
//     appId: "1:877618284112:web:3881426e83a786e4a8f355",
//     measurementId: "G-QXPFWCHZ70"   
// };
  
// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);
  
document.addEventListener("DOMContentLoaded", function () {
    const listbtn = document.getElementById('listbtn');
    const box = document.getElementById('box');
    const badge = document.getElementById('badge');
    let cloneCount = 0;
    listbtn.addEventListener('click', function() {
        box.classList.toggle('hide');
        updateBageV();
    });
    const form = document.getElementById('form');
    const date = document.getElementById('date');
    const text = document.getElementById('text');
    const bottom = document.getElementById('bottom');
    const template = document.getElementById('template');
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        const textValue = text.value.trim();
        const dateValue = date.value;
        updateBage();
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
                updateBage();
            });
            bottom.appendChild(clone);
            cloneCount++;
            text.value = "";
            date.value = "";
            updateBage();
        }
    });
    function updateBage() {
        badge.textContent = cloneCount;
        updateBageV();
    }
    function updateBageV() {
        if(cloneCount ===0) {
            badge.style.display = 'none';
        } else {
            badge.style.display = 'flex';
        }
    }
    updateBageV();
});