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
  salle.textContent = "66 890 грн";
  viev.textContent = "Є в наявності"
  viev.classList.remove("badd");
  submitButton.disabled = false;
}
b3.onclick = function(){
  salle.textContent = "56 440 грн";
  viev.textContent = "Немає в наявності"
  viev.classList.add("badd");
  submitButton.disabled = true;
}
b4.onclick = function(){
  salle.textContent = "58 720 грн";
  viev.textContent = "Є в наявності"
  viev.classList.remove("badd");
  submitButton.disabled = false;
}
b5.onclick = function(){
  salle.textContent = "63 060 грн";
  viev.textContent = "Немає в наявності"
  viev.classList.add("badd");
  submitButton.disabled = true;
}
b6.onclick = function(){
  salle.textContent = "66 120 грн";
  viev.textContent = "Є в наявності"
  viev.classList.remove("badd");
  submitButton.disabled = false;
}
b7.onclick = function(){
  salle.textContent = "74 500 грн";
  viev.textContent = "Є в наявності"
  viev.classList.remove("badd");
  submitButton.disabled = false;
}
b8.onclick = function(){
  salle.textContent = "87 400 грн";
  viev.textContent = "Є в наявності"
  viev.classList.remove("badd");
  submitButton.disabled = false;
}
b9.onclick = function(){
  salle.textContent = "181 790 грн";
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



