import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getFirestore, collection, addDoc, deleteDoc, doc, getDocs } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyD0o93MUJorSwMSWkVxu_bgzv_s3OAbyY0",
    authDomain: "teamshowcase-531d0.firebaseapp.com",
    projectId: "teamshowcase-531d0",
    storageBucket: "teamshowcase-531d0.appspot.com",
    messagingSenderId: "877618284112",
    appId: "1:877618284112:web:3881426e83a786e4a8f355",
    measurementId: "G-QXPFWCHZ70"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

document.addEventListener("DOMContentLoaded", function () {
    const listbtn = document.getElementById('listbtn');
    const box = document.getElementById('box');
    const badge = document.getElementById('badge');

    if (listbtn) {
        listbtn.addEventListener('click', function() {
            if (box) {
                box.classList.toggle('hide');
            }
        });
    }

    const form = document.getElementById('form');
    const date = document.getElementById('date');
    const text = document.getElementById('text');
    const bottom = document.getElementById('bottom');
    const template = document.getElementById('template');

    let cloneCount = 0;

    async function fetchTasks() {
        try {
            const querySnapshot = await getDocs(collection(db, "ToDo"));
            querySnapshot.forEach((docSnapshot) => {
                const data = docSnapshot.data();
                const docId = docSnapshot.id;
                const clone = template.content.cloneNode(true);
                const textDateElement = clone.querySelector('.text-date');
                textDateElement.textContent = `${data.text} (${data.date})`;

                const checkbox = clone.querySelector('input[type="checkbox"]');
                checkbox.addEventListener('change', function() {
                    if (checkbox.checked) {
                        textDateElement.classList.add('strikethrough');
                    } else {
                        textDateElement.classList.remove('strikethrough');
                    }
                });

                const deletebtn = clone.querySelector('.delete');
                deletebtn.dataset.todoId = docId; // Corrected data attribute name

                deletebtn.addEventListener("click", async function () {
                    const todoId = deletebtn.dataset.todoId; // Corrected data attribute name
                    try {
                        await deleteDoc(doc(db, todoId)); // Correctly delete the document
                        console.log("Document successfully deleted!");
                        deletebtn.parentNode.parentNode.remove();
                        cloneCount--;
                        updateBadge();
                    } catch (e) {
                        console.error("Error removing document: ", e);
                    }
                });

                bottom.appendChild(clone);
                cloneCount++;
            });
            updateBadge();
        } catch (e) {
            console.error("Error fetching documents: ", e);
        }
    }

    form.addEventListener("submit", async function (event) {
        event.preventDefault();

        const textValue = text.value.trim();
        const dateValue = date.value;

        if (dateValue !== "" && textValue !== "" && cloneCount < 4) {
            const docData = {
                text: textValue,
                date: dateValue
            };

            try {
                const docRef = await addDoc(collection(db, "ToDo"), docData);
                console.log("Document written with ID: ", docRef.id);

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
                deletebtn.dataset.todoId = docRef.id; // Corrected data attribute name

                deletebtn.addEventListener("click", async function () {
                    const todoId = deletebtn.dataset.todoId; // Corrected data attribute name
                    try {
                        await deleteDoc(doc(db, todoId)); // Correctly delete the document
                        console.log("Document successfully deleted!");
                        deletebtn.parentNode.parentNode.remove();
                        cloneCount--;
                        updateBadge();
                    } catch (e) {
                        console.error("Error removing document: ", e);
                    }
                });

                bottom.appendChild(clone);
                cloneCount++;
                text.value = "";
                date.value = "";
                updateBadge();
            } catch (e) {
                console.error("Error adding document: ", e);
            }
        }
    });

    function updateBadge() {
        badge.textContent = cloneCount;
        updateBadgeValue();
    }

    function updateBadgeValue() {
        if (badge) {
            badge.style.display = cloneCount === 0 ? 'none' : 'block';
        }
    }

    updateBadgeValue();
    fetchTasks(); // Fetch and display tasks on page load
});
