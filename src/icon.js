document.addEventListener("DOMContentLoaded", function() {
    const transitionIcon = document.getElementById('transition-icon');
    const transitionContainer = document.querySelector('.icon-container');
    const body = document.body;

    let hoverTimer;

    function startHoverTimer() {
        hoverTimer = setTimeout(() => {
            transitionContainer.classList.add('transition');
            body.classList.add('transition-active'); 

            transitionContainer.addEventListener('animationend', function() {
                transitionContainer.style.display = 'none';
                body.classList.remove('transition-active'); 
                document.body.style.overflow = 'unset';
            }, { once: true }); 
        }, 1000); 
    }

    function cancelHoverTimer() {
        clearTimeout(hoverTimer);
    }

    transitionIcon.addEventListener('mouseover', startHoverTimer);
    transitionIcon.addEventListener('mouseout', cancelHoverTimer);
});
