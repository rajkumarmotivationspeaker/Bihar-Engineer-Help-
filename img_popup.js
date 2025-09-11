let a = document.getElementById("pop_cross")
console.log(a)

let b = document.getElementById("pop_img")
console.log(b)

a.style.display = "none"
b.style.display = "none"

function showpop(){
    a.style.display = "block"
    b.style.display = "block"
}

function hidepop(){
    a.style.display = "none"
    b.style.display = "none"
    
}


setTimeout(showpop, 18000)
