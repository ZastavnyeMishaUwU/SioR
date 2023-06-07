let buton = document.querySelector(".menu");
let buton2 = document.querySelector(".menu-open");
let main = document.querySelector(".main-menu");

buton2.onclick = function() {
    buton.classList.toggle("menu-close"); 
    buton.classList.toggle("menu-open"); 
};


let buton_cookie = document.querySelector(".button");
let box_cookie = document.querySelector(".cookies-agreement");

buton_cookie.onclick = function() {
    box_cookie.classList.add("cookies-agreement-closed");
};


let selection = document.querySelector('.news-list');
let buttonCardViewTile = document.querySelector('.tile-view');
let buttonCardViewStandard = document.querySelector('.row-view');

let buttonCardViewTileHandler = () => {
    selection.classList.remove('new-block');
    selection.classList.add('list-tiles-view');
    buttonCardViewTile.classList.add('view-checked');
    buttonCardViewStandard.classList.remove('view-checked');
};

let buttonCardViewStandardHandler = () => {
    selection.classList.remove('list-tiles-view');
    buttonCardViewTile.classList.remove('view-checked');
    buttonCardViewStandard.classList.add('view-checked');
};

let init = () =>{
    buttonCardViewTile.addEventListener('click', buttonCardViewTileHandler);
    buttonCardViewStandard.addEventListener('click', buttonCardViewStandardHandler);
};
init();

let upButton = document.querySelector('.up-button');

      window.onscroll = function () {
        if (window.pageYOffset > 50) {
          upButton.classList.add('shown');
        }else {
        upButton.classList.remove('shown');
      }
    };
      upButton.onclick = function(){
        window.scrollTo(0, 0);
      };