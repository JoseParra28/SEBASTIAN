const scrollOne = document.querySelector(".hero-img");

window.addEventListener("scroll", () => {

    const scrolled = window.scrollY
    console.log(scrolled)

    if (scrolled >= 400 ){
        document.querySelector(".hero-img").style.position = "relative";
        document.querySelector(".hero-img").style.width = "71%";
        document.querySelector(".hero-img").style.margin = "75%";
    } else{
        console.log("It works")
    }
})