const scBtnContent = ["Standard Package", "Deluxe Package", "Professional Package", "Elite Package" ];
const scBtns = document.querySelectorAll(".sc-btn");

for(let i = 0; i < scBtnContent.length; i++){
    document.querySelectorAll('button')[i].addEventListener("click", function(){
        console.log(this)
    })
}

    
