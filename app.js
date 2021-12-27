const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.navlinks');
    const break1 = document.querySelector('.break1');
    const break2 = document.querySelector('.break2');

    if (burger){
        burger.addEventListener('click',() =>{
            nav.classList.toggle("show");
            setTimeout(function(){
                nav.classList.toggle("ham"); //This will be delayed for 1/2 second
            }, 400);
            burger.classList.toggle('ani');
            break1.remove();
            break2.remove();
        })}
}
navSlide()
