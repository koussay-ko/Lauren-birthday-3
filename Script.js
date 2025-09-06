// Wait until DOM is loaded
document.addEventListener("DOMContentLoaded", function() {

    // Elements
    const btnLetter = document.getElementById("btn__letter");
    const boxMail = document.querySelector(".boxMail");
    const closeBox = document.querySelector(".boxMail .fa-xmark");
    const audio = document.getElementById("birthdayAudio");

    // Open letter box
    btnLetter.addEventListener("click", () => {
        boxMail.classList.add("active");
        audio.play(); // play audio when box opens
    });

    // Close letter box
    closeBox.addEventListener("click", () => {
        boxMail.classList.remove("active");
        audio.pause(); // pause audio when closed
    });

    // Optional: click outside box to close
    boxMail.addEventListener("click", (e) => {
        if (e.target === boxMail) {
            boxMail.classList.remove("active");
            audio.pause();
        }
    });
});
