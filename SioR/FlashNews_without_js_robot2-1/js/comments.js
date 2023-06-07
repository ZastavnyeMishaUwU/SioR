let submitButton = document.querySelector('.submit-button'); 
let charCounter = document.querySelector('.char-counter');
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
    charCounter.textContent = 0; 
}; 
 
commentField.oninput = function(){ 
    charCounter.textContent = commentField.value.length; 
 
    if(commentField.value.length > 142){ 
        commentForm.classList.add('warning') 
        submitButton.disabled = true; 
        submitButton.style.opacity = '0.2';
    } 
    else{ 
        commentForm.classList.remove('warning') 
        submitButton.disabled = false; 
        submitButton.style.opacity = '1';
    } 
}
