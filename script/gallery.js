// Gallery 

const gallery = document.querySelector(".gallery")
const galleryImg = document.querySelectorAll(".img")
const closePopUp = document.querySelector(".close-popup")
const popUp = document.querySelector(".popup-img")



for (i = 0; i < galleryImg.length; i++){
    galleryImg[i].addEventListener("click", function(){
        let changeImg = this.alt
        switch (changeImg) {
            case "img-1":
                let image = document.querySelectorAll('image')
                image.src = '/assets/image-asset (5).jpeg'
                this.popUp.classList.remove("hidden")
                console.log(this)
                break;
        
            default:
                break;
        }
        
    })
}
   

closePopUp.addEventListener("click", function(){
    popUp.classList.add("hidden")
})