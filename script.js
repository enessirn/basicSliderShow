let slider = document.getElementById("slider")

let sliderImages = [
    "img/spain.jpg",
    "img/spain2.jpg",
    "img/spain3.jpg"

]

let imgElement = document.createElement("img")

let sayac = 0
function sliderShow() {
    sayac++

    imgElement.src = sliderImages[sayac]

    if (sayac === sliderImages.length-1) 
        sayac = -1


}
setInterval(() => {
    sliderShow()
}, 1000);

slider.appendChild(imgElement)