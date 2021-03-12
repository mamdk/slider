let slider = document.querySelector(".slider-content");
let tally = document.querySelector(".count");
let prev = document.querySelector("#prev");
let next = document.querySelector("#next");
let index = 0;
const timeSlider = 10;

function counter(index, f, count) {
    index += f % count;
    if (index >= count) return index - count;
    else if (index < 0) return count - 1;
    return index;
}

function nextSlider() {
    index = counter(index, +1, slider.children.length);
    const ps = slider.children[counter(index, -1, slider.children.length)];

    slider.children[index].classList.remove("hidden");
    slider.children[index].classList.add("animation");
    ps.classList.remove("animation");
    ps.classList.add("animation-end");

    setTimeout(() => {
        ps.classList.add("hidden")
        ps.classList.remove("animation-end")
    }, 1000);
}

function prevSlider() {
    index = counter(index, -1, slider.children.length);
    const np = slider.children[counter(index, +1, slider.children.length)];

    slider.children[index].classList.remove("hidden");
    slider.children[index].classList.add("animation");
    np.classList.remove("animation");
    np.classList.add("animation-end");
    setTimeout(() => {
        np.classList.remove("animation-end");
        np.classList.add("hidden");
    }, 1000);
}

function setTally() {
    const tallyChildren = tally.children;
    for (let i = 0; i < tallyChildren.length; i++) {
        const ch = tallyChildren[i];
        ch.classList.remove("active-slider");
        if (i === index) ch.classList.add("active-slider");
    }
}

next.onclick = () => {
    nextSlider();
    setTally();
}

prev.onclick = () => {
    prevSlider();
    setTally();
}

setInterval(() => {
    nextSlider();
    setTally();
}, timeSlider * 1000)