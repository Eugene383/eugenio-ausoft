
let boxServices1=document.getElementById("box-services-1")
let boxServices2=document.getElementById("box-services-2")


boxServices1.addEventListener("click",desabilitarBox1)
function desabilitarBox1(){
    boxServices1.style.display="none"
}

boxServices2.addEventListener("click",mostrarbox1)
function mostrarbox1(){
    boxServices1.style.display="block"
}

