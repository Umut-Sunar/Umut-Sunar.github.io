import CardCreator from "./cardinfocreation.js";

const data_getter = new CardCreator()


const globalData = await data_getter.gettingData()


// Önce  info-boxes lara click event 'i ile dinlenebilir hale getirelm

//  infobox'lara click eventi ekle  

const info_boxes = data_getter.returnInfoBoxClassListAsArray()[0]
const info_boxes_classlist = data_getter.returnInfoBoxClassListAsArray()[1]
const details_alanı = document.querySelector(".pro-info-details")
// aşağıdaki click event'i herhangi bir card'a tıklandığında sağda details alanı açar

function exitbuttonevent() {
              const exitButton = document.querySelector(".exitimg");
              const exit_area = document.querySelector(".exitbutton")
              exitButton.style.pointerEvents = "auto"
              setTimeout(() => {
                            const show_toast = document.querySelector(".show-toast")

                            show_toast.addEventListener("mouseenter", (event) => {

                                          exitButton.addEventListener("click", (event) => {

                                                        details_alanı.classList.add("hide")
                                                        details_alanı.classList.remove("show-toast")
                                                        const child_nodes_details = document.querySelector(".main-pro-info").childNodes
                                                        child_nodes_details.forEach((element) => {

                                                                      document.querySelector(".main-pro-info").removeChild(element)
                                                        })



                                          })

                            })
              }, 1)
}

// İnfo box 'lara  silme ve ekleme  işlevi kazandırır. Ancak malesef resetContent() fonskyionu sadece infobox'lar üzerinden yapılabiliniyor.
info_boxes.forEach((eachInfoBox) => {
              const exit_area = document.querySelector(".exitbutton")

              eachInfoBox.addEventListener("click", (event) => {
                            const clicked_item =resetContent(event)

              })
})

export function loadContentToDetailsArea(whichElement) {

              // Details alanı içerik sayısına göre sayfaya H2 ve P ekleme
              if (whichElement != undefined) {
                            const clicked_infoBox_Class = data_getter.returnSpecificClassName(whichElement, "detail")

                            const language = data_getter.returnLanguage()


                            if (language === "TR" && globalData.TR.details[clicked_infoBox_Class].detailsType === "internal") {
                                          // ilgili div 'e baglı  yani, infoBox'a ait  yan tarafta oluşturacağım content' al. 
                                          const contentHeaders = globalData.TR.details[clicked_infoBox_Class].Content.ContentHeaders;
                                          const contentDetails = globalData.TR.details[clicked_infoBox_Class].Content.ContentDetails;
                                          //Content'in uzunlugunu bul , çünkü ona göre birden fazla DİV oluşturacaksın. 
                                          const content_length = contentHeaders.length

                                          // length kadar div oluştur.  Her oluşturduğunu ayrıştırmak için  detail1-1 vs diye class ver

                                          for (let i = 0; i <= content_length; i++) {
                                                        const newClass = `${clicked_infoBox_Class}${i}`;
                                                        // ne içeriyor bir h2 bir p  // class'ları classofinfobox parametresi ile verildi. 
                                                        const details_div = data_getter.DetailsCardCreator(clicked_infoBox_Class, newClass);
                                                        const children_of_div = details_div.children;


                                                        // div'in altrındaki cocuklara içeriklerini yükle
                                                        setTimeout((contentDelay) => {
                                                                      children_of_div[0].textContent = contentHeaders[i]
                                                                      children_of_div[1].textContent = contentDetails[i]

                                                                      const pro_info_content = document.querySelector(".main-pro-info")
                                                                      pro_info_content.appendChild(details_div)
                                                        }, 15)

                                          }

                            }
                            else if (globalData.TR.details[clicked_infoBox_Class].detailsType === "external") {
                                          document.querySelector(".pro-info-details").classList.add("hide")
                                          whichElement.setAttribute("onclick", openTab())

                                          function openTab() {
                                                        window.open(globalData.TR.details[clicked_infoBox_Class].externalLink)

                                          }
                            }
                            else if (language === "ENG" && globalData.TR.details[clicked_infoBox_Class].detailsType === "internal") {

                                          // ilgili div 'e baglı  yani, infoBox'a ait  yan tarafta oluşturacağım content' al. 
                                          const contentHeaders = globalData.ENG.details[clicked_infoBox_Class].Content.ContentHeaders;
                                          const contentDetails = globalData.ENG.details[clicked_infoBox_Class].Content.ContentDetails;
                                          //Content'in uzunlugunu bul , çünkü ona göre birden fazla DİV oluşturacaksın. 
                                          const content_length = contentHeaders.length

                                          // length kadar div oluştur.  Her oluşturduğunu ayrıştırmak için  detail1-1 vs diye class ver

                                          for (let i = 0; i <= content_length; i++) {
                                                        const newClass = `${clicked_infoBox_Class}${i}`;
                                                        // ne içeriyor bir h2 bir p  // class'ları classofinfobox parametresi ile verildi. 
                                                        const details_div = data_getter.DetailsCardCreator(clicked_infoBox_Class, newClass);
                                                        const children_of_div = details_div.children;


                                                        // div'in altrındaki cocuklara içeriklerini yükle
                                                        setTimeout((contentDelay) => {
                                                                      children_of_div[0].textContent = contentHeaders[i]
                                                                      children_of_div[1].textContent = contentDetails[i]

                                                                      const pro_info_content = document.querySelector(".main-pro-info")
                                                                      pro_info_content.appendChild(details_div)
                                                        }, 15)




                                          }


                            }




              }
}


// eklendiği yerde content'i siler ve ilgili şarta göre tekrar yükler
export const resetContent = (event) =>  {

              const whichInfoBoxClicked = (event.currentTarget)
              
              contentLoader(whichInfoBoxClicked)

              return whichInfoBoxClicked
}

export function contentLoader(whichInfoBoxClicked) {

              const className = data_getter.returnSpecificClassName(whichInfoBoxClicked, "detail")


              const prof_content_area = document.querySelector(".pro-info-details")
              const Is_show = prof_content_area.classList.contains("show-toast")


              const child_nodes_details = Array.from(document.querySelector(".main-pro-info").children)


              child_nodes_details.forEach((element) => {

                            document.querySelector(".main-pro-info").removeChild(element)
              })



              const isInternal = globalData.TR.details[className].detailsType === "internal"




              if (isInternal) {
                            setTimeout(() => {
                                          details_alanı.className = "pro-info-details ";

                            }, 1
                            )
                            setTimeout(() => {
                                          details_alanı.classList.add("show-toast")

                                          exitbuttonevent()
                            }, 1)
              }

              setTimeout(loadContentToDetailsArea(whichInfoBoxClicked), 1)
}

export default loadContentToDetailsArea();
