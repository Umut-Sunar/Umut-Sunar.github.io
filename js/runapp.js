
// Liste Boş mu kontrol et , boşsa standart bir yükseklik ata

setTimeout((waitotherjs) => {


              const professional_area_childs = document.querySelector(".professional-informations").children.length;

              if (professional_area_childs < 4) {
                            const professional_information = document.querySelector(".main-container")
                            professional_information.style.height = 800 + "px"
              } else {
                            const professional_information = document.querySelector(".main-container")
                            professional_information.style.height = ""

              }


}, 500)


// Body'nin yükseliğini en uzun elementlinin yüksekliğine eşitledim. 

const contentArea = document.querySelector(".card-main-container")


contentArea.addEventListener("click", (event) => {

              setTimeout(() => {

                            const contentAreaHeight = contentArea.style.height
                            const profArea = document.querySelector(".main-pro-info")
                            const profAreaHeigth = window.getComputedStyle(profArea).height;
                            document.body.style.height=profAreaHeigth

              }, 30)






})


///////////////////////////////////////////////////////////////////////////////////////////////////
