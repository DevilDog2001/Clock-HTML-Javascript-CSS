z = document.getElementById("input")

function clr(){
    z.value = " "
}
function num(Samuel){
    if (Samuel.innerText == "x"){
        z.value += "*" 
    }
    else if (Samuel.innerText == "÷"){
        z.value += "/"
    }
    else{
        z.value += Samuel.innerText
    }
}
function calculate(){
    document.getElementById('input').value=eval(document.getElementById('input').value)
}
