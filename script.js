const btn = document.getElementById("openBtn");
const letter = document.getElementById("letter");
const typing = document.getElementById("typing");
const music = document.getElementById("music");

const text = `Selamat ulang tahun, sayang ❤️

Semoga semua impianmu tercapai.

Terima kasih sudah hadir di hidupku.

Aku akan selalu ada untukmu.

I Love You ❤️`;

btn.onclick = function () {
    letter.style.display = "block";
    music.play();

    let i = 0;
    typing.innerHTML = "";

    function type() {
        if (i < text.length) {
            typing.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, 50);
        }
    }

    type();
};
