"use strict";

import { parse } from "path";

// service worker registration - remove if you're not going to use it

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('serviceworker.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

// place your code below


console.log(`Hello world!`);

const counter = document.querySelector('.hydro__image--counter--js');
const add = document.querySelector('.hydro__button--add--js');
const remove = document.querySelector('.hydro__button--remove--js');
const key = new Date().toISOString().slice(0, 10)


if (!localStorage.getItem(key)) {
  localStorage.setItem(key, 0)
  counter.innerHTML = '0';
} else {
  counter.innerHTML = localStorage.getItem(key);
}




add.addEventListener('click', (e) => {
  localStorage.setItem(key, parseInt(localStorage.getItem(key)) + 1);
  counter.innerHTML = localStorage.getItem(key) ;

})

remove.addEventListener('click', (e) => {
  const currentConter = parseInt(localStorage.getItem(key));
  if (currentConter > 0) {
    localStorage.setItem(key, localStorage.getItem(key) - 1);
    counter.innerHTML = currentConter -1;
  }

})
