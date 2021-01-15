"use strict";

var btn = document.getElementsByClassName('btn');
var gallery = document.getElementById('gallery');
var images = new Array("images/pic1.jpg", "images/pic2.jpg", "images/pic3.jpg", "images/pic4.jpg");

var _loop = function _loop(i) {
  btn[i].onclick = function () {
    gallery.src = images[i];
    var current = document.getElementsByClassName('active');
    current[0].className = current[0].className.replace('active', '');
    this.className += ' active';
  };
};

for (var i = 0; i < btn.length; i++) {
  _loop(i);
}