const scBtnContent = ["Standard Package", "Deluxe Package", "Professional Package", "Elite Package" ];
const scBtns = document.querySelectorAll(".sc-btn");

for(let i = 0; i < scBtnContent.length; i++){
    document.querySelectorAll('button')[i].addEventListener("click", function(){
        const currentBtn = this.innerHTML
        let submitBtn = document.querySelector("#submit-appo")
        
        
                let phaseOne = document.querySelector(".phase-1");
                let phaseTwo = document.querySelector(".phase-2");
                let phaseThree = document.querySelector(".phase-3");
                let phaseFour = document.querySelector(".phase-4");
                let phaseFive = document.querySelector(".phase-5");


                let trackerOne = document.querySelector(".tracker-1 ")
                let trackerTwo = document.querySelector(".tracker-2 ")
                let trackerThree = document.querySelector(".tracker-3 ")
                let trackerFour = document.querySelector(".tracker-4 ")

                phaseOne.classList.add("hidden")
                phaseTwo.classList.remove("hidden")

                trackerOne.classList.remove("current")
                trackerTwo.classList.add("current")

                // phaseTwo.classList.add("hidden")
                // phaseThree.classList.remove("hidden")

               

                submitBtn.addEventListener("click", function (){

                    let custInfo = document.querySelector(".cust-info");
                    let getDate = document.querySelector(".date-field").value;
                    let getTime = document.querySelector(".time-field").value;

                    phaseTwo.classList.add("hidden")
                    phaseThree.classList.remove("hidden")

                    trackerTwo.classList.remove("current")
                    trackerThree.classList.add("current")
                    
                    custInfo.addEventListener("click", function(){
                    let confirmation = document.querySelector(".confirm")
                    let nameDisplay = document.querySelector(".name-field").value;
                    let surnameDisplay = document.querySelector(".surname-field").value;
                    let emailDisplay = document.querySelector(".email-field").value;
                    let returnDisplay = document.querySelector(".returning").value;

                    // if (!nameDisplay || !surnameDisplay){
                    //     console.log("you need a name")
                    // } else {

                    // }
                    phaseThree.classList.add("hidden")
                    phaseFour.classList.remove("hidden")

                    trackerThree.classList.remove("current")
                    trackerFour.classList.add("current")

                    document.querySelector(".cust-name").innerHTML = `Name: ${nameDisplay} ${surnameDisplay}`
                    document.querySelector(".cust-package").innerHTML = `Package: ${currentBtn}`
                    document.querySelector(".cust-date").innerHTML = `For ${getDate}`
                    document.querySelector(".cust-time").innerHTML = `At ${getTime}`

                        confirmation.addEventListener("click", function(){
                            let success = document.querySelector(".current")
                            phaseFour.classList.add("hidden")
                            phaseFive.classList.remove("hidden")
                            success.style.backgroundColor = "green"
                        })
                        
                    })

                   
                })
                
        //         switch (currentBtn) {
        //             case "Book Standard":

        //         break;

        //         case "Book Deluxe":
        //             console.log(`you have selected ${currentBtn} `)
                    
        //             break;
        //             case "Book Professional":
        //                 console.log(`you have selected ${currentBtn} `)
                        
        //                 break;
        //                 case "Book Elite":
        //                     console.log(`you have selected ${currentBtn} `)
                            
        //                     break;
        
        //     default:
        //         break;
        // }
    })
}

// const getDate = document.querySelector("#date-field").value;
// const getTime = document.querySelector("#time-field").value;


    
