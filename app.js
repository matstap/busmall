'use strict';

var images_arr = [];
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

Img.prototype.percentage = function() {
  return (this.clickCounter / this.shownCounter) * 100.0;
};

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
  for (var i = 0; i < 3; i++) {
    var num = randNum();
    while (justShown.includes(num)) {
      num = randNum();
    }
    justShown.push(num);
  }

  if (globalClicks >= 1 ) {
    for (var j = 0; j < 3; j++) {
      justShown.shift();
    }
  }

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

function addClick(e) {
  var selected = e.target.getAttribute('src');

  for (var i = 0; i < images_arr.length; i++) {
    if (selected === images_arr[i].filePath) {
      images_arr[i].clickCounter ++;
      globalClicks ++;
    }
  }

  stopSurvey();
  render();
}

function stopSurvey() {
  var pics = document.getElementById('pics');
  if (globalClicks >= 25) {
    pics.style.display = 'none';
    results();
  }
}

function getPropVals(key) {
  var vals = [];
  for (var i = 0; i < images_arr.length; i++) {
    vals.push(images_arr[i][key]);
  }
  return vals;
}

function results() {
  var canvas = document.getElementById('chart');
  var ctx = canvas.getContext('2d');

  var chart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: getPropVals('name'),
      datasets: [{
        label: 'Product Clicks',
        data: getPropVals('clickCounter'),
        backgroundColor: randColors()
      }]
    },
    options: {}
  });
}

function randColors() {
  var colors = [];
  // Attribution: https://www.paulirish.com/2009/random-hex-color-code-snippets/
  var temp = '#'+Math.floor(Math.random()*16777215).toString(16);
  for (var i = 0; i < images_arr.length; i++) {
    while (colors.includes(temp)) {
      temp = '#'+Math.floor(Math.random()*16777215).toString(16);
    }
    colors.push(temp);
  }
  return colors;
}

render(); // initializes page with images
img1.addEventListener('click', addClick);
img2.addEventListener('click', addClick);
img3.addEventListener('click', addClick);
