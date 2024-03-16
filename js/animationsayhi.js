import CardCreator from "./cardinfocreation.js";

const data_getter = new CardCreator()


const globalData = await data_getter.gettingData()


const sayhi_button = document.querySelector(".sayhi")


function classToggle() {

              document.querySelector(".sayhi").classList.remove("animate__animated","animate__tada","animate__delay-2s","animate__repeat-1")
setTimeout( (add) => {
              document.querySelector(".sayhi").classList.add("animate__animated","animate__tada","animate__delay-2s","animate__repeat-1")


},10000 )
              



}

sayhi_button.addEventListener('animationend', (event) => {

              setTimeout(classToggle, 5000)

})

// Say hi veya Merhaba De ! yazması
const sayhiText = document.querySelector(".sayhitext")
const language_area=document.getElementById("language-button")
language_area.addEventListener("click" ,()=> {
              setTimeout((delay) => { if(language_area.classList.contains("main-switchTR")){
                            sayhiText.textContent = ""
                            sayhiText.textContent = "Merhaba de!"
              }else if ( language_area.classList.contains("main-switchENG")) {
                            sayhiText.textContent = ""
                            sayhiText.textContent = "Say Hi!"
 
              }},2)
             


})

