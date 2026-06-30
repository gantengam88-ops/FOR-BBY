const openBtn = document.getElementById("openBtn");
const letterPage = document.getElementById("letterPage");
const typing = document.getElementById("typing");
const music = document.getElementById("music");
const card = document.querySelector(".card");

const message = `Happy Birthday Sayang ❤️

Semoga di umur yang baru ini kamu selalu sehat, bahagia, dan semua impianmu tercapai.

Terima kasih sudah menjadi orang yang selalu membuat hariku lebih berwarna.

Aku bersyukur bisa mengenalmu, tertawa bersamamu, dan membuat kenangan indah denganmu.

Semoga kita bisa terus bersama melewati banyak ulang tahun berikutnya.

I Love You More Than Yesterday ❤️`;

openBtn.addEventListener("click", () => {

    card.style.display = "none";
    letterPage.style.display = "flex";

    music.play().catch(() => {
        console.log("Musik menunggu interaksi browser.");
    });

    typing.innerHTML = "";

    let i = 0;

    function typeWriter() {
        if (i < message.length) {
            typing.innerHTML += message.charAt(i);
            i++;
            setTimeout(typeWriter, 35);
        }
    }

    typeWriter();
});
