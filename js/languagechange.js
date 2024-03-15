import CardCreator from "./cardinfocreation.js";
import { loadContentToDetailsArea } from "./carddetails.js";
import { resetContent } from "./carddetails.js";
import { contentLoader } from "./carddetails.js";
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

// datayı getir//

const data_getter = new CardCreator()


const globalData = await data_getter.gettingData()
let exact_info_box = null

// listen click on  change language button 
const language_area = document.getElementById("language-button")

language_area.addEventListener("click", (ev) => {


  const img = document.querySelector("#language-icon") // language img
  const circle = document.querySelector("#circle")// circle seelction

  // language area'nın  toggle mainswitch class => language area
  language_area.classList.toggle("main-switchTR")
  language_area.classList.toggle("main-switchENG")

  //cirle yönünü değiştir

  circle.classList.toggle("circle-ENG")
  circle.classList.toggle("circle-TR")

  // language area'nın  class'ına bak ve img'nin src'isini değiştir
  setTimeout((change) => {
    // geçikmeli olarak   dil değişikliğindeki info-box img src, class düzenlemeleri ve p ve img'de içerik değişiklikleri yapılır

    if (language_area.classList.contains("main-switchTR")) {

      img.src = "assets/images/Türkiye (TR).png"
      img.classList.remove("ENG")
      img.classList.add("TR")

      //Türkçe içerikleri yükle


      const card_div_info_box = data_getter.CardProfHeaderSelection()
      const contentTRDetails = globalData.TR.details

      card_div_info_box.forEach((eachDiv) => {

        const ArrayEachDivClass = Array.from(eachDiv.classList)
        const whichDetail = ArrayEachDivClass.find((element => element.startsWith('detail')));

        const ChildOfCardDiv = eachDiv.children;

        // p 'yi seçiyorum
        const p_classlist = ChildOfCardDiv[0].classList

        ChildOfCardDiv[0].textContent = capitalize(contentTRDetails[whichDetail].detailsname)
        // img'yi seçiyorum
        ChildOfCardDiv[1].src = contentTRDetails[whichDetail].detailsIcon
      })


      // İsim , soyisim, şehir ve area konularının elementini seç ve içerikleri getir
      const contentTR = globalData.TR
      const name = document.querySelector(".name").textContent = contentTR.name
      const city = document.querySelector(".city").textContent = contentTR.location
      const professionalty = document.querySelector(".profile-information").textContent = contentTR.expertise

      // Content alanı için değişiklik


    } else if (language_area.classList.contains("main-switchENG")) {
      // Change background  flagdo this 
      img.src = "assets/images/United Kingdom GB).svg"
      img.classList.remove("TR")
      img.classList.add("ENG")

      //ingilzice içerikleri yükle
      const card_div_info_box = data_getter.CardProfHeaderSelection()
      const contentEngDetails = globalData.ENG.details

      // İsim , soyisim, şehir ve area konularının elementini seç ve içerikleri getir
      const contentENG = globalData.ENG
      const name = document.querySelector(".name").textContent = contentENG.name
      const city = document.querySelector(".city").textContent = contentENG.location
      const professionalty = document.querySelector(".profile-information").textContent = contentENG.expertise

      card_div_info_box.forEach((eachDiv) => {

        const ArrayEachDivClass = Array.from(eachDiv.classList)
        const whichDetail = ArrayEachDivClass.find((element => element.startsWith('detail')));

        const ChildOfCardDiv = eachDiv.children;

        // p 'yi seçiyorum
        const p_classlist = ChildOfCardDiv[0].classList

        ChildOfCardDiv[0].textContent = capitalize(contentEngDetails[whichDetail].detailsname)
        // img'yi seçiyorum
        ChildOfCardDiv[1].src = contentEngDetails[whichDetail].detailsIcon
      })
      // content details alanı 


    }


  }, 100)


  const details_area_childen = document.querySelector(".main-pro-info").children

  if (details_area_childen.length > 0) {

    const classHame = Array.from(details_area_childen[0].classList)
    const languageRelatedİnfoBox = classHame.find(classElement => classElement.startsWith("detail"))

     exact_info_box =document.getElementsByClassName(`info-box ${languageRelatedİnfoBox}`)
    contentLoader(exact_info_box[0])
    //  loadContentToDetailsArea(exact_info_box[0])
  }



})



