const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
    question.innerHTML = "I Love You Too Yaya!";
    gif.src =
    "https://media.tenor.com/9L3dafxnOfoAAAAi/peach-goma-peach-and-goma.gif"
});

noBtn.addEventListener('mouseover', ()=> {
    const noBtnRect = noBtn.getBoundingClientRect();
    const maxX = window.innerWidth - noBtnRect.width;
    const maxY = window.innerHeight - noBtnRect.height;

    const randomX = Math.floor(Math.random() * maxX)
    const randomY = Math.floor(math.random() * maxY)

    noBtn.Style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
})