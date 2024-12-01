const scBtnContent = ["Standard Package", "Deluxe Package", "Professional Package", "Elite Package" ];
const scBtns = document.querySelectorAll(".sc-btn");

for(let i = 0; i < scBtnContent.length; i++){
    document.querySelectorAll('button')[i].addEventListener("click", function(){
        const currentBtn = this.innerHTML
        
        switch (currentBtn) {
            case "Book Standard":
                console.log(`you have selected ${currentBtn} `)
                
                break;
                case "Book Deluxe":
                    console.log(`you have selected ${currentBtn} `)
                    
                    break;
                    case "Book Professional":
                        console.log(`you have selected ${currentBtn} `)
                        
                        break;
                        case "Book Elite":
                            console.log(`you have selected ${currentBtn} `)
                            
                            break;
        
            default:
                break;
        }
    })
}

    
