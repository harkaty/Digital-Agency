const humberger = document.querySelector('.humberger');
const navbar1 = document.querySelector('.nav');
const search = document.querySelector('.searchIcon');

humberger.addEventListener("click", () =>{
    navbar1.classList.toggle('active');

});
window.addEventListener('scroll', () =>{
   navbar1.classList.toggle('change');
});
search.addEventListener("click", () => {
    navbar1.classList.toggle('search');
});