let topbtn = document.getElementById("bottomTOP")

// this event for to show top button
window.addEventListener("scroll", function () {
    if (this.pageYOffset > 100) {
        topbtn.classList.add("active")
    } else {
        topbtn.classList.remove("active")

    }
})


// this event for to scroll smooth from bottom to top
topbtn.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})
