"use strict";

function toggleMenu() {
  var menuToggle = document.querySelector('.toggle');
  var navigation = document.querySelector('.navigation');
  menuToggle.classList.toggle('active');
  navigation.classList.toggle('active');
}

function videoToggle() {
  var trailer = document.querySelector('.trailer');
  var video = document.querySelector('video');
  trailer.classList.toggle('active');
  video.currentTime = 0;
  video.pause();
}