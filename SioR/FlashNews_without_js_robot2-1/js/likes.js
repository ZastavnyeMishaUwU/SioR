let heart = document.querySelector('.heart');
let page = document.querySelector('body'); 
let themeButton = document.querySelector('.theme-button'); 
let likesNumber = document.querySelector('.likes-number');
let counter = 0;
themeButton.onclick = function() { 
    page.classList.toggle('dark-theme'); 
    
   };

   heart.onclick = function(){
       if(heart.classList.contains('added')){
           likesNumber.textContent--;
       }
   
       else{
          likesNumber.textContent++;
       }
       heart.classList.toggle('added');
   }

let commentForm = document.querySelector('.comment-form'); 
let commentList = document.querySelector('.comment-list'); 
let commentField = document.querySelector('.comment-field'); 

commentForm.onsubmit = function(evt) { 
    evt.preventDefault(); 
    let newComment = document.createElement('li'); 
    newComment.classList.add('user-comment'); 
    newComment.textContent =commentField.value; 
    commentField.value=' '; 
    commentList.appendChild(newComment); 
};


let block = document.querySelector('.tooltip');
let tooltips = document.querySelectorAll('.tooltip-button');
let close = document.querySelector('.close');
let txt = document.querySelector('.text');

for(let tooltip of tooltips) {
    tooltip.onclick = function() {
    block.classList.add('vis');
    txt.textContent = tooltip.dataset.tooltipText
    }
}

close.onclick = function() {
    block.classList.remove('vis');
}
let submitButton = document.querySelector('.submit-button'); 
let charCounter = document.querySelector('.char-counter'); 
let commentForm = document.querySelector('.comment-form'); 
 
commentForm.onsubmit = function(evt) { 
    evt.preventDefault(); 
    let newComment = document.createElement('li'); 
    newComment.classList.add('user-comment'); 
    newComment.textContent =commentField.value; 
    commentField.value=' '; 
    commentList.appendChild(newComment); 
    charCounter.textContent = 0; 
}; 
 
commentField.oninput = function(){ 
    charCounter.textContent = commentField.value.length; 
 
    if(commentField.value.length > 142){ 
        commentForm.classList.add('warning') 
        submitButton.disabled = true; 
        submitButton.classList.add('opasyti') 
    } 
    else{ 
        commentForm.classList.remove('warning') 
        submitButton.disabled = false; 
    } 
}
