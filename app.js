const navslide = () => {
    const burger = document.querySelector('.burger')
    const nav = document.querySelector('.navlinks')

    if (burger){
        burger.addEventListener('click',() =>{
            nav.classList.toggle("ham")
            burger.classList.toggle('ani')
        })}
}

navslide();