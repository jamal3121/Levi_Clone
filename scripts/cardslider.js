const initSlider = () => {
    const imageList = document.querySelector(".slider-wrapper .image-list");
    const slideButtons = document.querySelectorAll(".slider-wrapper .slide01");

    slideButtons.forEach(button =>{
        button.addEventListener('click',()=>{
            // console.log(button)
            const direction = button.id === "prev-slide" ? -1 : 1;
            const scrollAmount = 325 * direction;
            imageList.scrollBy({left:scrollAmount,behavior:"smooth"})
        })
    })
   
}

window.addEventListener("resize", initSlider);