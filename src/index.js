let last = 0;

window.addEventListener("scroll", function () {
    let scroll = this.scrollY;

    // TRANSLATE FOR IMAGES
    let img1 = document.querySelector("#img-1");
    let img2 = document.querySelector("#img-2");
    let img3 = document.querySelector("#img-3");
    let img4 = document.querySelector("#img-4");
    img1.style = `transform: translateY(${-0.23 * scroll}px);`
    img2.style = `transform: translateY(${(-0.23 * scroll) - 95}px);`
    img3.style = `transform: translateY(${(-0.23 * scroll) - 60}px);`
    img4.style = `transform: translateY(${(-0.23 * scroll) + 100}px);`

    // ANIMATION FOR LIST-POINTS
    let frame1 = document.getElementById("list-point-1");
    let frame2 = document.getElementById("list-point-2");
    let frame3 = document.getElementById("list-point-3");
    let frame4 = document.getElementById("list-point-4");

    let text1 = document.getElementById("text-point-1");
    let text2 = document.getElementById("text-point-2");
    let text3 = document.getElementById("text-point-3");
    let text4 = document.getElementById("text-point-4");

    // ANIMATION FOR DIV-IMAGES
    let div1 = document.getElementById("boreas");
    let div2 = document.getElementById("zephryos");
    let div3 = document.getElementById("notos");
    let div4 = document.getElementById("euros");

    // ANIMATION FOR TEXT-IMAGES
    let text_1 = document.getElementById("text-1");
    let text_2 = document.getElementById("text-2");
    let text_3 = document.getElementById("text-3");
    let text_4 = document.getElementById("text-4");

    let date_1 = document.getElementById("date-1");
    let date_2 = document.getElementById("date-2");
    let date_3 = document.getElementById("date-3");
    let date_4 = document.getElementById("date-4");


    if (scroll <= 168) {
        if (last !== 0) {
            last = 0;
            frame1.classList.replace("list-point-del", "list-point-add");
            frame2.classList.replace("list-point-add", "list-point-del");
            text1.classList.replace("color-gray", "color-white");
            text2.classList.replace("color-white", "color-gray");
            div1.classList.replace("opacity-mid", "opacity-full");
            div2.classList.replace("opacity-full", "opacity-mid");
            img1.classList.replace("img-not", "img-hover");
            img2.classList.replace("img-hover", "img-not");
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
            div1.classList.replace("opacity-full", "opacity-mid");
            div2.classList.replace("opacity-mid", "opacity-full");
            div3.classList.replace("opacity-full", "opacity-mid");
            img1.classList.replace("img-hover", "img-not");
            img2.classList.replace("img-not", "img-hover");
            img3.classList.replace("img-hover", "img-not");
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
            div2.classList.replace("opacity-full", "opacity-mid");
            div3.classList.replace("opacity-mid", "opacity-full");
            div4.classList.replace("opacity-full", "opacity-mid");
            img2.classList.replace("img-hover", "img-not");
            img3.classList.replace("img-not", "img-hover");
            img4.classList.replace("img-hover", "img-not");
        }
    } else {
        if (last !== 3) {
            last = 3;
            frame4.classList.replace("list-point-del", "list-point-add");
            frame3.classList.replace("list-point-add", "list-point-del");
            text3.classList.replace("color-white", "color-gray");
            text4.classList.replace("color-gray", "color-white");
            div3.classList.replace("opacity-full", "opacity-mid");
            div4.classList.replace("opacity-mid", "opacity-full");
            img3.classList.replace("img-hover", "img-not");
            img4.classList.replace("img-not", "img-hover");
        }
    }
});
