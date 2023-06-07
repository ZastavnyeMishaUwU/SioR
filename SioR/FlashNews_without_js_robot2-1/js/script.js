let page = document.querySelector('body'); 
let themeButton = document.querySelector('.theme-button'); 
let heart = document.querySelector('.heart') 
let massage = document.querySelector(".subscription-message") 
let form = document.querySelector('.subscription') 
let email = document.querySelector('.subscription-email') 
 
 
 
themeButton.onclick = function() { 
 page.classList.toggle('dark-theme'); 
 
};  
form.onsubmit = function(evt){ 
  evt.preventDefault(); 
  massage.textContent='Адреса ' + email.value + ' доданий до списку одержувачів розсилки'
}