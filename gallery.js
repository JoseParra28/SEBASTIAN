// Gallery 

const gallery = document.querySelector(".gallery")
const galleryImg = document.querySelectorAll(".img")
const closePopUp = document.querySelector(".close-popup")
const popUp = document.querySelector(".popup-img")



for (i = 0; i < galleryImg.length; i++){
    galleryImg[i].addEventListener("click", function(){
        let changeImg = this.alt
        console.log("hwats")

        let image = document.createElement('img')
        const addimage  = document.getElementsByClassName('popup-img')
        console.log(this)
        switch (changeImg) {
            case "img-1":
                image.src = 'assets/image-asset (5).jpeg'
                addimage[0].appendChild(image)
                popUp.classList.remove("hidden")
                break;

                case "img-2":
                image.src = 'assets/image-asset (2).jpeg'
                addimage[0].appendChild(image)
                popUp.classList.remove("hidden")
                console.log("You clicked 2")
                break;

                            case "img-3":
                                image.src = 'assets/image-asset (10).jpeg'
                                addimage[0].appendChild(image)
                                popUp.classList.remove("hidden")
                                console.log("You clicked 2")
                                break;

                                case "img-4":
                                    image.src = 'assets/image-asset (3).jpeg'
                                    addimage[0].appendChild(image)
                                    popUp.classList.remove("hidden")
                                    console.log("You clicked 2")
                                    break;

                                    case "img-5":
                                        image.src = 'assets/image-asset (4).jpeg'
                                        addimage[0].appendChild(image)
                                        popUp.classList.remove("hidden")
                                        console.log("You clicked 2")
                                        break;

                                        case "img-6":
                                            image.src = 'assets/image-asset (6).jpeg'
                                            addimage[0].appendChild(image)
                                            popUp.classList.remove("hidden")
                                            console.log("You clicked 2")
                                            break;

                                            case "img-7":
                                                image.src = 'assets/image-asset (8).jpeg'
                                                addimage[0].appendChild(image)
                                                popUp.classList.remove("hidden")
                                                console.log("You clicked 2")
                                                break;

                                                case "img-8":
                                                    image.src = 'assets/image-asset (7).jpeg'
                                                    addimage[0].appendChild(image)
                                                    popUp.classList.remove("hidden")
                                                    console.log("You clicked 2")
                                                    break;

                                                    case "img-9":
                                                    image.src = 'assets/image-asset (11).jpeg'
                                                    addimage[0].appendChild(image)
                                                    popUp.classList.remove("hidden")
                                                    console.log("You clicked 2")
                                                    break;

                                                    case "img-10":
                                                    image.src = 'assets/image-asset (13).jpeg'
                                                    addimage[0].appendChild(image)
                                                    popUp.classList.remove("hidden")
                                                    console.log("You clicked 2")
                                                    break;

                                                    case "img-11":
                                                    image.src = 'assets/image-asset (9).jpeg'
                                                    addimage[0].appendChild(image)
                                                    popUp.classList.remove("hidden")
                                                    console.log("You clicked 2")
                                                    break;

                                                    case "img-12":
                                                    image.src = 'assets/image-asset (1).jpeg'
                                                    addimage[0].appendChild(image)
                                                    popUp.classList.remove("hidden")
                                                    console.log("You clicked 2")
                                                    break;

                                                    case "img-13":
                                                    image.src = 'assets/image-asset (15).jpeg'
                                                    addimage[0].appendChild(image)
                                                    popUp.classList.remove("hidden")
                                                    console.log("You clicked 2")
                                                    break;

                                                    case "img-14":
                                                    image.src = 'assets/image-asset (17).jpeg'
                                                    addimage[0].appendChild(image)
                                                    popUp.classList.remove("hidden")
                                                    console.log("You clicked 2")
                                                    break;

                                                    case "img-15":
                                                    image.src = 'assets/image-asset (18).jpeg'
                                                    addimage[0].appendChild(image)
                                                    popUp.classList.remove("hidden")
                                                    console.log("You clicked 2")
                                                    break;

                                                    case "img-16":
                                                    image.src = 'assets/image-asset (16).jpeg'
                                                    addimage[0].appendChild(image)
                                                    popUp.classList.remove("hidden")
                                                    console.log("You clicked 2")
                                                    break;

                                                    case "img-17":
                                                        image.src = 'assets/image-asset (12).jpeg'
                                                        addimage[0].appendChild(image)
                                                        popUp.classList.remove("hidden")
                                                        console.log("You clicked 2")
                                                        break;

                                                        case "img-18":
                                                            image.src = 'assets/image-asset (14).jpeg'
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