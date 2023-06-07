
let radioButtons = document.querySelectorAll('.review');
let submitButton = document.querySelector('.submit-button');
  
radioButtons.forEach(radioButton => {
  radioButton.addEventListener('change', () => 
    submitButton.onclick = function(){
    let evaluation = radioButton.getAttribute('data-evaluation');
    if (evaluation === 'bad') {
      submitButton.disabled = true;
      let errorElement = document.querySelector('.error');
      errorElement.classList.add('shown');
    }
    else if (evaluation === 'good') {
      submitButton.disabled = false;
      let errorElement = document.querySelector('.error');
      errorElement.classList.remove('shown');
    }
    if (evaluation === 'bad') {
      submitButton.disabled = true;
      let errorElement = document.querySelector('.error1');
      errorElement.classList.remove('shown');
    }
    else if (evaluation === 'good') {
      submitButton.disabled = false;
      let errorElement = document.querySelector('.error1');
      errorElement.classList.add('shown');
    }
  });
});

document.getElementById("witr").onclick = setGreen;
		document.getElementById("yellow").onclick = setYellow;
		let body = document.querySelector('body')



		function setYellow() {
      
			body.classList.toggle('bacround')
      


		}
		function setGreen() {
			body.classList.toggle('bacround')
		}


