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

// Dropdown
let showMenu = document.querySelector(".hidden");
let showMenuBtn = document.querySelector(".drop");
let closeMenuBtn = document.querySelector(".close-menu")

showMenuBtn.addEventListener("click", function(){
    let removeClass = document.querySelector(".hidden");
    removeClass.classList.remove("hidden")
    showMenu.classList.add("dropdown")
})

closeMenuBtn.addEventListener("click", function(){
    let removeClass = document.querySelector(".dropdown");
    showMenu.classList.remove("dropdown")
    removeClass.classList.add("hidden")
})



// Info 

const form = document.querySelector('form');
        const formElements = document.querySelectorAll('input[type="text"], input[type="email"], select, textarea, input[type="submit"]');

        function applyGradientBorder(element, x, y, innerColor, outerColor, size) {
            element.style.borderImage = `radial-gradient(circle ${size}px at ${x}px ${y}px, ${innerColor}, ${outerColor}) 1`;
        }

        function resetBorder(element, color) {
            element.style.borderImage = 'none';
            element.style.borderColor = color;
        }

        form.addEventListener('mousemove', (e) => {
            const rect = form.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            applyGradientBorder(form, x, y, '#444', '#fff', 300);
        });

        form.addEventListener('mouseleave', () => {
            resetBorder(form, 'black');
        });

        formElements.forEach(element => {
            element.addEventListener('mousemove', (e) => {
                const rect = element.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                applyGradientBorder(element, x, y, '#fff', '#555', 150);
            });

            element.addEventListener('mouseleave', () => {
                resetBorder(element, '#555');
            });
        });