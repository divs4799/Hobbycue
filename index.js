var btnList = document.querySelectorAll(".form-btn");
var submit = document.querySelector("#submit-btn");
var signinOption = document.querySelector("#options");
var terms = document.querySelector("#terms");
btnList.forEach((btn)=>{
    btn.addEventListener("click",(event)=>{
       if(event.target.id == "joinin"){
            btnList[1].classList.add("active");
            btnList[0].classList.remove("active");
            submit.classList.add("join-btn");
            submit.innerHTML="Agree and Continue"
            signinOption.classList.add("hidden");
            terms.classList.remove("hidden")
       }else{
        btnList[0].classList.add("active");
            btnList[1].classList.remove("active")
            submit.classList.remove("join-btn");
            signinOption.classList.remove("hidden");
            terms.classList.add("hidden")
       }
    })
})

var toTop =document.querySelector("#go-to-top-btn");
toTop.addEventListener("click",()=>{
    document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0; 
})
var Menu = document.querySelector("#menu");
var closeMenu = document.querySelector("#close-menu");
var mobileMenu =document.querySelector("#mobile-menu");
var desktop = document.querySelector("#desktop-menu");
Menu.addEventListener("click",()=>{
    mobileMenu.classList.remove("hidden");
    desktop.classList.add("hidden")
});
closeMenu.addEventListener("click",()=>{
    mobileMenu.classList.add("hidden");
    desktop.classList.remove("hidden")
})
