'use strict';



const nameBtn = document.querySelector('.name__button');
const nameInput = document.querySelector('.name__input');
const messageHeading = document.querySelector('.message__heading');


nameBtn.addEventListener('click',()=>{

    messageHeading.innerHTML = `Hello ${nameInput.value}`;

})