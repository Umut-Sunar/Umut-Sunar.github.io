
// globalData olarak null belirledim , getData'dan  gelen bilgiyi alıp, global
// de işlenebilir hale getiyiriyorum




class CardCreator {

              constructor() {
                            

              }

              CreateCardDetails(specificClass) {

                            // önce div oluştur ve class ata
                            const card_div_info_box = document.createElement("div");
                            card_div_info_box.classList.add("info-box");
                            card_div_info_box.classList.add(specificClass);
                            //p oluştur class ata 
                            const card_p_infoBoxHead = document.createElement("p");
                            card_p_infoBoxHead.classList.add("info-box-head");
                            // img ata ve url al
                            const card_img_InfoBoxIcon = document.createElement("img");
                            card_img_InfoBoxIcon.classList.add("info-box-icon")
                            // hepsini div'in altına ekle
                            card_div_info_box.append(card_p_infoBoxHead, card_img_InfoBoxIcon)
                            return card_div_info_box
              }

              detectSwitchAreaLanguageClass() {

                            const langInfoClass = document.getElementById("language-button").classList
                            return langInfoClass

              }


              detectWhichLanguageSelected(callback) {

                            // callback fonksiyon burada 
                            let result_len = null
                            let languageClassList = callback()

                            if (languageClassList.contains("main-switchTR")) {

                                          result_len = "TR"
                            }
                            else if (languageClassList.contains("main-switchENG")) {

                                          result_len = "ENG"
                            }

                            return result_len

              }
              returnLanguage() {

                            const result = this.detectWhichLanguageSelected(this.detectSwitchAreaLanguageClass)
                            return result

              }

              returnInfoBoxClassListAsArray() {
                            // [divinfobox, divinfobox] , [detail1,details2] şeklinde  iç içe array döner
                            const info_boxes = document.querySelectorAll(".info-box") // tüm info-box'ları aldım. 

                            let all_classlist = []
                            info_boxes.forEach((eachinfobox) => {


                                          const info_box_classlist = Array.from(eachinfobox.classList)
                                          all_classlist.push(info_box_classlist)


                            })

                            const result = [];
                            result.push(info_boxes)
                            result.push(all_classlist)

                            return result

              }

              returnSpecificClassName(element, PieceOfClassName) {
                            // element'i ve içerdiği bir parca class ismini verirsen sana sahip olduğu class'ı döner
                            const class_List = Array.from(element.classList);

                            const result = class_List.find((classlist => classlist.startsWith(PieceOfClassName)))
                            return result


              }


              CardInfoPush(callbackdetectSwitchAreaLanguageClass, contentData, callbackCreateCard) {

                            const langInfoClass = callbackdetectSwitchAreaLanguageClass()

                            let result = []

                            if (langInfoClass.contains("main-switchTR")) {



                                          // TR 'yi seç, details 'ı seç e içinde details1 ... var.
                                          const contentTRDetails = contentData.TR.details
                                          const contentTRDetailsKeys = Object.keys(contentTRDetails)
                                          // Kaç adet data var bulman lazın sonra for in ile dön card oluştur

                                          result = contentTRDetailsKeys.map(key => {

                                                        const card_div_info_box = callbackCreateCard(key);
                                                        const ChildOfCardDiv = card_div_info_box.children;
                                                        // p 'yi seçiyorum
                                                        ChildOfCardDiv[0].textContent = contentTRDetails[key].detailsname
                                                        // img'yi seçiyorum
                                                        ChildOfCardDiv[1].src = contentTRDetails[key].detailsIcon

                                                        return card_div_info_box

                                          });
                            }
                            else if (langInfoClass.contains("main-switchENG")) {

                                          // ENG 'yi seç, details 'ı seç e içinde details1 ... var.
                                          const contentEngDetails = contentData.ENG.details
                                          const contentEngDetailsKeys = Object.keys(contentEngDetails)
                                          // Kaç adet data var bulman lazın sonra for in ile dön card oluştur

                                          result = contentEngDetailsKeys.map(key => {

                                                        const card_div_info_box = callbackCreateCard(key);
                                                        const ChildOfCardDiv = card_div_info_box.children;
                                                        // p 'yi seçiyorum
                                                        ChildOfCardDiv[0].textContent = contentEngDetails[key].detailsname
                                                        // img'yi seçiyorum
                                                        ChildOfCardDiv[1].src = contentEngDetails[key].detailsIcon

                                                        return card_div_info_box

                                          });
                            }

                            return result
              }


              CardProfHeaderSelection() {
                            // her bir professional içindeki butonun icon ve  header seçimini yapar geriye bir array döner. DİV'i döndürür
                            //Alt eleman seçimleri içinde Children kullan

                            let result = document.querySelectorAll(".info-box")
                            return result

              }

              DetailsCardCreator(classname, spesificClassName) {

                            const div = document.createElement("div");
                            div.classList.add(classname)
                            div.classList.add(spesificClassName)

                            const singleHeader = document.createElement("h2");
                            const singleP = document.createElement("p");
                            singleHeader.classList.add(classname);
                            singleHeader.classList.add(spesificClassName)
                            singleP.classList.add(classname);
                            singleP.classList.add(spesificClassName)

                            div.append(singleHeader, singleP)

                            return div

              }

              async gettingData() {

                            let globalData = null
                            // json olarak oluşturduğum datayı çekiyorum
                            async function getData() {

                                          await axios.get("./informations.json").then((response)=> {

                                                        globalData= response.data
                                                       
                                                        
                                                        
                                          }).catch(error => console.log("hata oluştu : " ,error))
                            }
                            // aşağıdaki kod getdata'yı bekliyor sonra devreye giriyor
                            await getData()
                            
                            return globalData
              }


              // CARD INFO PUSH MAIN FUNCTION //
              CardCreation(globalData) {

                            this.CardInfoPush(this.detectSwitchAreaLanguageClass, globalData, this.CreateCardDetails).forEach((eachInfoBoxDiv) => { document.querySelector(".professional-informations").appendChild(eachInfoBoxDiv) })

              }

              //  GET DATA AND RUN CARD INFO 
              async run() {
                            const globalData =  await this.gettingData()
                            
                            this.CardCreation(globalData)
                            

              }

}

const cardyukle = new CardCreator()

cardyukle.run()


export default CardCreator;