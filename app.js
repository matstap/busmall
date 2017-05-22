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

var bag = new Img('bag', './img/bag.jpg');
var banana = new Img('banana', './img/banana.jpg');
var bathroom = new Img('bathroom', './img/bathroom.jpg');
var boots = new Img('boots', './img/boots.jpg');
var breakfast = new Img('breakfast', './img/breakfast.jpg');
var bibblegum = new Img('bubblegum', './img/bubblegum.jpg');
var chair = new Img('chair', './img/chair.jpg');
var cthulu = new Img('cthulu', './img/cthulu.jpg');
var dogDuck = new Img('dogDuck', './img/dog-duck.jpg');
var dragon = new Img('dragon', './img/dragon.jpg');
var pen = new Img('pen', './img/pen.jpg');
var petSweep = new Img('petSweep', './img/pet-sweep.jpg');
var scissors = new Img('scissors', './img/scissors.jpg');
var shark = new Img('shark', './img/shark.jpg');
var sweep = new Img('sweep', './img/sweep.png');
var tauntaun = new Img('tauntaun', './img/tauntaun.jpg');
var unicorn = new Img('unicorn', './img/unicorn.jpg');
var usb = new Img('usb', './img/usb.gif');
var waterCan = new Img('waterCan', './img/water-can.jpg');
var wine = new Img('wineGlass', './img/wine-glass.jpg');

//console.log(images_arr)

function randNum() {
  return Math.floor(Math.random()*images_arr.length);
}

// only worrying about just before duplicates atm
function selectImgs() {
  var num1 = randNum();
  var num2 = randNum();
  var num3 = randNum();
  img1.src = images_arr[num1].filePath;
  img2.src = images_arr[num2].filePath;
  img2.src = images_arr[num3].filePath;
}
