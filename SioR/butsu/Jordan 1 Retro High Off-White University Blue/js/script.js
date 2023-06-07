let radioButtons = document.querySelectorAll('.input');
let submitButton = document.querySelector('.button');
let salle = document.querySelector('.salle');
let viev = document.querySelector('.viev')
let b1 = document.querySelector('.b1');
let b2 = document.querySelector('.b2');
let b3 = document.querySelector('.b3');
let b4 = document.querySelector('.b4');
let b5 = document.querySelector('.b5');
let b6 = document.querySelector('.b6');
let b7 = document.querySelector('.b7');
let b8 = document.querySelector('.b8');
let b9 = document.querySelector('.b9');

b1.onclick = function(){
salle.textContent = "77 510 грн";
viev.textContent = "Є в наявності"
  viev.classList.remove("badd");
  submitButton.disabled = false;
} 
b2.onclick = function(){
  salle.textContent = "72 350 грн";
  viev.textContent = "Є в наявності"
  viev.classList.remove("badd");
  submitButton.disabled = false;
}
b3.onclick = function(){
  salle.textContent = "68 050 грн";
  viev.textContent = "Немає в наявності"
  viev.classList.add("badd");
  submitButton.disabled = true;
}
b4.onclick = function(){
  salle.textContent = "82 840 грн";
  viev.textContent = "Є в наявності"
  viev.classList.remove("badd");
  submitButton.disabled = false;
}
b5.onclick = function(){
  salle.textContent = "84 390 грн";
  viev.textContent = "Немає в наявності"
  viev.classList.add("badd");
  submitButton.disabled = true;
}
b6.onclick = function(){
  salle.textContent = "84 820 грн";
  viev.textContent = "Є в наявності"
  viev.classList.remove("badd");
  submitButton.disabled = false;
}
b7.onclick = function(){
  salle.textContent = "87 400 грн";
  viev.textContent = "Є в наявності"
  viev.classList.remove("badd");
  submitButton.disabled = false;
}
b8.onclick = function(){
  salle.textContent = "93 640 грн";
  viev.textContent = "Є в наявності"
  viev.classList.remove("badd");
  submitButton.disabled = false;
}
b9.onclick = function(){
  salle.textContent = "164 370 грн";
  viev.textContent = "Є в наявності"
  viev.classList.remove("badd");
  submitButton.disabled = false;
  }       
for(let radioButton of radioButtons){
  submitButton.onclick = function() {
    let evaluation = radioButton.getAttribute('data-evaluation');
    if (evaluation === 'good') {
      submitButton.disabled = false;
      alert("Товар в кошику");
    }
  };
};

document.getElementById("witr").onclick = setGreen;
document.getElementById("yellow").onclick = setYellow;
let body = document.querySelector('body')



function setYellow() {
  body.classList.toggle('bacround')


}
function setGreen() {
  body.classList.toggle('bacround')
}



