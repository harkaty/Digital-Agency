const humberger = document.querySelector('.humberger');
const navbar1 = document.querySelector('.nav');

humberger.addEventListener("click", () =>{
    navbar1.classList.toggle('active');

});
window.addEventListener('scroll', () =>{
   navbar1.classList.toggle('change');
});