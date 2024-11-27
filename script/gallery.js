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

                let image = document.createElement('img')
                image.src = '/assets/image-asset (5).jpeg'

                const addimage  = document.getElementsByClassName('popup-img')
                addimage[0].appendChild(image)
                popUp.classList.remove("hidden")

                break;
                case "img-2":
                

                break;
        
            default:
                break;
        }
        
    })
}
   

closePopUp.addEventListener("click", function(){
    popUp.classList.add("hidden")
})