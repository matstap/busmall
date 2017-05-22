'use strict';

var images_arr = [];
// this has the three just chosen, replaced each time
var justShown = [];
var globalClicks = 0;
var img1 = document.getElementById('img-one');
var img2 = document.getElementById('img-two');
var img3 = document.getElementById('img-three');

function Img(name, filePath) {
  this.name = name;
  this.filePath = filePath;
  this.clickCounter = 0;
  this.shownCounter = 0;
  images_arr.push(this);
}



var bag = new Img('bag', 'img/bag.jpg');
var banana = new Img('banana', 'img/banana.jpg');
var bathroom = new Img('bathroom', 'img/bathroom.jpg');
var boots = new Img('boots', 'img/boots.jpg');
var breakfast = new Img('breakfast', 'img/breakfast.jpg');
var bibblegum = new Img('bubblegum', 'img/bubblegum.jpg');
var chair = new Img('chair', 'img/chair.jpg');
var cthulhu = new Img('cthulhu', 'img/cthulhu.jpg');
var dogDuck = new Img('dogDuck', 'img/dog-duck.jpg');
var dragon = new Img('dragon', 'img/dragon.jpg');
var pen = new Img('pen', 'img/pen.jpg');
var petSweep = new Img('petSweep', 'img/pet-sweep.jpg');
var scissors = new Img('scissors', 'img/scissors.jpg');
var shark = new Img('shark', 'img/shark.jpg');
var sweep = new Img('sweep', 'img/sweep.png');
var tauntaun = new Img('tauntaun', 'img/tauntaun.jpg');
var unicorn = new Img('unicorn', 'img/unicorn.jpg');
var usb = new Img('usb', 'img/usb.gif');
var waterCan = new Img('waterCan', 'img/water-can.jpg');
var wine = new Img('wineGlass', 'img/wine-glass.jpg');

//console.log(images_arr)

function randNum() {
  return Math.floor(Math.random()*images_arr.length);
}

function selectImgs() {
  var num1 = randNum();
  var num2 = randNum();
  var num3 = randNum();

  while (justShown.includes(num1)) {
    num1 = randNum();
  }

  while (num2 === num1 || justShown.includes(num2)) {
    num2 = randNum();
  }

  while (num3 === num1 || num3 === num2 || justShown.includes(num3)) {
    num3 = randNum();
  }

  justShown = [];
  justShown.push(num1, num2, num3);

  return justShown;
}

function render() {
  var indexArr = selectImgs();
  img1.src =  images_arr[indexArr[0]].filePath;
  img2.src = images_arr[indexArr[1]].filePath;
  img3.src = images_arr[indexArr[2]].filePath;

  images_arr[indexArr[0]].shownCounter ++;
  images_arr[indexArr[1]].shownCounter ++;
  images_arr[indexArr[2]].shownCounter ++;
}

img1.addEventListener('click', render);
img2.addEventListener('click', render);
img3.addEventListener('click', render);
