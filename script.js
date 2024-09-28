const Slide = [
    {
        name:"Nelson Mandella",
        photoUrl:
        "photos/NelsonMandella.jpg",
        text:"Education is the most powerful weapon which you can use to change the world.",

    },
    {
        name:"Bill Gates",
        photoUrl:
        "photos/Gates.jpg",
        text: "If you are born poor its not your mistake, But if you die poor its your mistake.",
    },
    {
        name:"Steve Jobs",
        photoUrl:
        "photos/SteveJobs.jpg",
        text: "Stay hungry, Stay foolish."
    }
]

const imgEl = document.querySelector("img");
const textEl = document.querySelector(".text");
const usernameEl = document.querySelector(".username");

let idx = 0

updateSlide();

function updateSlide() {
    const {name, photoUrl, text} = Slide[idx];
    imgEl.src = photoUrl;
    textEl.innerText = text;
    usernameEl.innerText = name;
    idx++;
    if (idx === Slide.length) {
        idx = 0;
    }
    setTimeout(() => {
        updateSlide();
    }, 5000);
}


