let inputName=document.getElementById("name")
let inputEmail=document.getElementById("email")
let inputContacto=document.getElementById("number")
let textArea=document.getElementById("textarea")
let form=document.getElementsByTagName("form")[0]
let lbNotificao=document.getElementById("lb-notificao")

form.addEventListener("submit",enviarMensagem)
function enviarMensagem(){
    event.preventDefault()
    if(inputName.value==""){
        alert("Preencha o Campo Nome")
    }
    if(inputEmail.value==""){
        alert("Preencha o Campo Email")
    }
    if(inputContacto.value==""){
        alert("Preencha o Campo Contacto")
    }
   lbNotificao.innerText="Dados Enviados"

}