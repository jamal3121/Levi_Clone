var arrowup = document.querySelector('#arrow-up');
var explore = document.querySelector('#explore-mre')
var about = document.querySelector("#about-contain")


arrowup.addEventListener('click',()=>{
    if(arrowup.classList.contains('fa-angle-down')){
        arrowup.classList.remove("fa-angle-down");
        arrowup.classList.add("fa-angle-up");
        explore.style.display = 'block'
        about.style.display = 'block'

    }
    else{
        arrowup.classList.add("fa-angle-down");
        arrowup.classList.remove("fa-angle-up");
        explore.style.display = 'none'
        about.style.display = 'none'

    }
})
