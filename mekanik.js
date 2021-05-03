const tombolhome = document.getElementById("tombolhome");
const main = document.getElementById("main");
const tombolcreator = document.getElementById("tombolcreator");
const creator = document.getElementById("creator");
const start = document.querySelector(".button-start");
const sahrul = document.querySelectorAll("img");
const rip = document.querySelectorAll(".rip");
const score = document.querySelector(".inti-score");
let indexrandom, indexsebelumnya, selesai, skor;

tombolcreator.addEventListener("click", function () {
    main.classList.add("none");
    creator.classList.remove("none");
});

tombolhome.addEventListener("click", function () {
    main.classList.remove("none");
    creator.classList.add("none");
});

function posisirandom(sahrul) {
    indexrandom = Math.floor(Math.random() * sahrul.length);
    if (indexrandom === indexsebelumnya) {
        while (indexrandom === indexsebelumnya) {
            indexrandom = Math.floor(Math.random() * sahrul.length);
        }
    }
    indexsebelumnya = indexrandom;
    return indexrandom;
}

function timerandom(mininal, maximal) {
    return Math.round(Math.random() * (maximal - mininal) + mininal);
}

function munculkanSiSahrul() {
    const posisi = posisirandom(sahrul);
    const waktu = timerandom(300, 400);
    sahrul[posisi].classList.add("munculkansahrul");
    setTimeout(() => {
        hilangkanSiSahrul(posisi);
        if (!selesai) {
            munculkanSiSahrul();
        }
    }, waktu);
}

function hilangkanSiSahrul(index) {
    sahrul[index].classList.remove("munculkansahrul");
}

function keclick() {
    skor++;
    score.innerHTML = skor;
    this.classList.remove("munculkansahrul");
}

sahrul.forEach((t) => {
    t.addEventListener("click", keclick);
});

function callback() {
    skor = 0;
    selesai = false;
    score.innerHTML = skor;
    munculkanSiSahrul();
    setTimeout(() => {
        selesai = true;
    }, 10000);
}

function mulai() {
    callback();
}
