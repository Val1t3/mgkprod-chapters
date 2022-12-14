let last = 0;

window.addEventListener("scroll", function () {
    let scroll = this.scrollY;

    // TRANSLATE FOR IMAGES
    let img = document.querySelector("#img-1");
    let img2 = document.querySelector("#img-2");
    let img3 = document.querySelector("#img-3");
    let img4 = document.querySelector("#img-4");
    img.style = `transform: translateY(${-0.2 * scroll}px);`
    img2.style = `transform: translateY(${(-0.2 * scroll) - 120}px);`
    img3.style = `transform: translateY(${(-0.2 * scroll) - 150}px);`
    img4.style = `transform: translateY(${(-0.2 * scroll)}px);`

    // ANIMATION FOR LIST-POINTS
    let frame1 = document.getElementById("list-point-1");
    let frame2 = document.getElementById("list-point-2");
    let frame3 = document.getElementById("list-point-3");
    let frame4 = document.getElementById("list-point-4");

    let text1 = document.getElementById("text-point-1");
    let text2 = document.getElementById("text-point-2");
    let text3 = document.getElementById("text-point-3");
    let text4 = document.getElementById("text-point-4");

    if (scroll <= 168) {
        if (last !== 0) {
            last = 0;
            frame1.classList.replace("list-point-del", "list-point-add");
            frame2.classList.replace("list-point-add", "list-point-del");
            text1.classList.replace("color-gray", "color-white");
            text2.classList.replace("color-white", "color-gray");
        }
    } else if (scroll > 168 && scroll <= 850) {
        if (last !== 1) {
            last = 1;
            frame1.classList.replace("list-point-add", "list-point-del");
            frame2.classList.replace("list-point-del", "list-point-add");
            frame3.classList.replace("list-point-add", "list-point-del");
            text1.classList.replace("color-white", "color-gray");
            text2.classList.replace("color-gray", "color-white");
            text3.classList.replace("color-white", "color-gray");
        }
    } else if (scroll > 850 && scroll <= 1529) {
        if (last !== 2) {
            last = 2;
            frame2.classList.replace("list-point-add", "list-point-del");
            frame3.classList.replace("list-point-del", "list-point-add");
            frame4.classList.replace("list-point-add", "list-point-del");
            text2.classList.replace("color-white", "color-gray");
            text3.classList.replace("color-gray", "color-white");
            text4.classList.replace("color-white", "color-gray");
        }
    } else {
        if (last !== 3) {
            last = 3;
            frame4.classList.replace("list-point-del", "list-point-add");
            frame3.classList.replace("list-point-add", "list-point-del");
            text3.classList.replace("color-white", "color-gray");
            text4.classList.replace("color-gray", "color-white");
        }
    }
});
