// Gallery 

const gallery = document.querySelector(".gallery")
const galleryImg = document.querySelectorAll(".img")
const closePopUp = document.querySelector(".close-popup")
const popUp = document.querySelector(".popup-img")



for (i = 0; i < galleryImg.length; i++){
    galleryImg[i].addEventListener("click", function(){
        let changeImg = this.alt

        let image = document.createElement('img')
        const addimage  = document.getElementsByClassName('popup-img')
        console.log(this)
        switch (changeImg) {
            case "img-1":
                image.src = '/assets/image-asset (5).jpeg'
                addimage[0].appendChild(image)
                popUp.classList.remove("hidden")
                break;

                case "img-2":
                image.src = '/assets/image-asset-1.png'
                addimage[0].appendChild(image)
                popUp.classList.remove("hidden")
                console.log("You clicked 2")
                break;
                
        
            default:
                break;
        }
        
    })
}
   

closePopUp.addEventListener("click", function(){
    popUp.classList.add("hidden")
})