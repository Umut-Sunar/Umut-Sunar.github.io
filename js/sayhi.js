

document.querySelector(".sayhi").addEventListener("click", (event) => {


              if (document.querySelector(".sayhi_input") === null) {
                            const input_element = document.createElement("input")
                            const sayhi_input_div = document.createElement("div")
                            sayhi_input_div.classList.add("input-container")
                            const main_container = document.querySelector(".card-main-container")
                            input_element.classList.add("sayhi_input")


                            const send_arrow = document.createElement("img")
                            send_arrow.src = "assets/images/arrow-right-solid.svg"
                            send_arrow.classList.add("input-send")
                            sayhi_input_div.append(input_element, send_arrow)
                            main_container.appendChild(sayhi_input_div)

                            const button = document.querySelector(".sayhi")


                            document.querySelector(".input-send").addEventListener("click", (event) => {
                                          const mesaj = input_element.textContent
                                          // post(mesaj)
                                          main_container.removeChild(main_container.lastChild)


                            })




              }


})
// async function post(msj) {

//               await axios.post("./js/messages.json", {

//                             "mesaj": `${msj}`,

//               }
//               ).then((response) => {

//                             console.log(response.data)
//                             main_container.removeChild(main_container.lastChild)


//               })
// }





