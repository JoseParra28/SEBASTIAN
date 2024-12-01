const scBtnContent = ["Standard Package", "Deluxe Package", "Professional Package", "Elite Package" ];
const scBtns = document.querySelectorAll(".sc-btn");

for(let i = 0; i < scBtnContent.length; i++){
    document.querySelectorAll('button')[i].addEventListener("click", function(){
        const currentBtn = this.innerHTML
        let submitBtn = document.querySelector("#submit-appo")
        
        switch (currentBtn) {
            case "Book Standard":
                let phaseOne = document.querySelector(".phase-1");
                let phaseTwo = document.querySelector(".phase-2");

                let getDate = document.querySelector("#date-field").value;
                let getTime = document.querySelector("#time-field").value;

                phaseOne.classList.add("hidden")
                phaseTwo.classList.remove("hidden")

                submitBtn.addEventListener("click", function (){
                    console.log(`you have selected ${currentBtn} `)
                    console.log(getDate)
                    console.log(getTime)
                })
                
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

// const getDate = document.querySelector("#date-field").value;
// const getTime = document.querySelector("#time-field").value;


    
