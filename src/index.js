// window.onscroll(() => {
//     var a = element.scrollTop;
//     var b = element.scrollHeight - element.clientHeight;
//     var c = a / b;

//     console.log("test");
// })

window.addEventListener("scroll", function () {
    let scroll = this.scrollY;
    console.log(scroll);

    let frame1 = document.getElementById("list-point");
    if (scroll > 100) {
        frame1.classList.add("list-point-add");
        frame1.classList.remove("list-point-del");
    } else {
        frame1.classList.add("list-point-del");
        frame1.classList.remove("list-point-add");
    }
});
