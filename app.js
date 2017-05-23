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
  for (var i = 0; i < 3; i++) {
    var num = randNum();
    while (justShown.includes(num)) {
      num = randNum();
    }
    justShown[i] = num;
  }

  //console.log(justShown);
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

function results() {
  var table = document.getElementById('tab');

  for (var i = 0; i < images_arr.length; i++) {
    var data = [];
    data.push('<td>' + images_arr[i].name + '</td>');
    data.push('<td>Shown ' + images_arr[i].shownCounter + ' times</td>');
    data.push('<td>Clicked ' + images_arr[i].clickCounter + ' times</td>');

    var new_row = document.createElement('tr');
    new_row.innerHTML = data.join('');
    table.appendChild(new_row);
  }
}


img1.addEventListener('click', addClick);
img2.addEventListener('click', addClick);
img3.addEventListener('click', addClick);
