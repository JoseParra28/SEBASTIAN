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
                document.createElement('h1') = "hello"
                break;

                case "img-2":
                image.src = '/assets/image-asset-1.png'
                addimage[0].appendChild(image)
                popUp.classList.remove("hidden")
                console.log("You clicked 2")
                break;

                            case "img-3":
                                image.src = '/assets/image-asset-1.png'
                                addimage[0].appendChild(image)
                                popUp.classList.remove("hidden")
                                console.log("You clicked 2")
                                break;

                                case "img-4":
                                    image.src = '/assets/image-asset-1.png'
                                    addimage[0].appendChild(image)
                                    popUp.classList.remove("hidden")
                                    console.log("You clicked 2")
                                    break;

                                    case "img-5":
                                        image.src = '/assets/image-asset-1.png'
                                        addimage[0].appendChild(image)
                                        popUp.classList.remove("hidden")
                                        console.log("You clicked 2")
                                        break;

                                        case "img-6":
                                            image.src = '/assets/image-asset-1.png'
                                            addimage[0].appendChild(image)
                                            popUp.classList.remove("hidden")
                                            console.log("You clicked 2")
                                            break;

                                            case "img-7":
                                                image.src = '/assets/image-asset-1.png'
                                                addimage[0].appendChild(image)
                                                popUp.classList.remove("hidden")
                                                console.log("You clicked 2")
                                                break;

                                                case "img-8":
                                                    image.src = '/assets/image-asset-1.png'
                                                    addimage[0].appendChild(image)
                                                    popUp.classList.remove("hidden")
                                                    console.log("You clicked 2")
                                                    break;

                                                    case "img-9":
                                                    image.src = '/assets/image-asset-1.png'
                                                    addimage[0].appendChild(image)
                                                    popUp.classList.remove("hidden")
                                                    console.log("You clicked 2")
                                                    break;

                                                    case "img-10":
                                                    image.src = '/assets/image-asset-1.png'
                                                    addimage[0].appendChild(image)
                                                    popUp.classList.remove("hidden")
                                                    console.log("You clicked 2")
                                                    break;

                                                    case "img-11":
                                                    image.src = '/assets/image-asset-1.png'
                                                    addimage[0].appendChild(image)
                                                    popUp.classList.remove("hidden")
                                                    console.log("You clicked 2")
                                                    break;

                                                    case "img-12":
                                                    image.src = '/assets/image-asset-1.png'
                                                    addimage[0].appendChild(image)
                                                    popUp.classList.remove("hidden")
                                                    console.log("You clicked 2")
                                                    break;

                                                    case "img-13":
                                                    image.src = '/assets/image-asset-1.png'
                                                    addimage[0].appendChild(image)
                                                    popUp.classList.remove("hidden")
                                                    console.log("You clicked 2")
                                                    break;

                                                    case "img-14":
                                                    image.src = '/assets/image-asset-1.png'
                                                    addimage[0].appendChild(image)
                                                    popUp.classList.remove("hidden")
                                                    console.log("You clicked 2")
                                                    break;

                                                    case "img-15":
                                                    image.src = '/assets/image-asset-1.png'
                                                    addimage[0].appendChild(image)
                                                    popUp.classList.remove("hidden")
                                                    console.log("You clicked 2")
                                                    break;

                                                    case "img-16":
                                                    image.src = '/assets/image-asset-1.png'
                                                    addimage[0].appendChild(image)
                                                    popUp.classList.remove("hidden")
                                                    console.log("You clicked 2")
                                                    break;

                                                    // case "img-2":
                                                    //     image.src = '/assets/image-asset-1.png'
                                                    //     addimage[0].appendChild(image)
                                                    //     popUp.classList.remove("hidden")
                                                    //     console.log("You clicked 2")
                                                    //     break;

                                                    //     case "img-2":
                                                    //         image.src = '/assets/image-asset-1.png'
                                                    //         addimage[0].appendChild(image)
                                                    //         popUp.classList.remove("hidden")
                                                    //         console.log("You clicked 2")
                                                    //         break;

                                                    
                
        
            default:
                break;
        }
        
    })
}
   

closePopUp.addEventListener("click", function(){
    popUp.classList.add("hidden")
})