let img1,img2,img3,img4,img5,img6,img7,img8,img9,imgnext,imgback;
let slidervalue,slidercounter,idle;
let pos1x,pos1y,pos2x,pos2y,pos3x,pos3y,pos4x,pos4y,pos5x,pos5y,pos6x,pos6y,pos7x,pos7y,pos8x,pos8y,pos9x,pos9y;
function preload(){
  img1=loadImage('one.jpg');
  img2=loadImage('two.jpg');
  img3=loadImage('three.jpg');
  img4=loadImage('four.jpg');
  img5=loadImage('five.jpg');
  img6=loadImage('six.jpg');
  img7=loadImage('seven.jpg');
  img8=loadImage('eight.jpg');
  img9=loadImage('nine.jpg');
  imgnext=loadImage('next.png');
  imgback=loadImage('back.png');
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  slidervalue=0;
  slidercounter=0;
  pos1x=0;
  pos1y=0;
  pos2x=0;
  pos2y=900;
  pos3x=0;
  pos3y=1800;
  pos4x=0;
  pos4y=2700;
  pos5x=0;
  pos5y=3600;
  pos6x=0;
  pos6y=4500;
  pos7x=0;
  pos7y=5400;
  pos8x=0;
  pos8y=6300;
  pos9x=0;
  pos9y=7200;
  idle=0;
}

function draw() {
  background(220);
  //scale(0.8);
  image(img1,pos1x,pos1y);
  image(img2,pos2x,pos2y);
  image(img3,pos3x,pos3y);
  image(img4,pos4x,pos4y);
  image(img5,pos5x,pos5y);
  image(img6,pos6x,pos6y);
  image(img7,pos7x,pos7y);
  image(img8,pos8x,pos8y);
  image(img9,pos9x,pos9y);
  slider();
  buttons();
  sleepchech();
}
function mousePressed() {
  if (slidervalue==0) {
    if ((mouseY< 200)&&(pos1y<=-900)) {
      slidervalue=1;
    }
    if ((mouseY>500)&&(pos1y>=-6300)) {
      slidervalue=2;
    }
  }
}
function buttons() {
  image(imgback, 20, 20);
  image(imgnext, 20, 970);
}
function slider() {
  if (slidervalue==1) {
    pos1y=pos1y+20;
    pos2y=pos2y+20;
    pos3y=pos3y+20;
    pos4y=pos4y+20;
    pos5y=pos5y+20;
    pos6y=pos6y+20;
    pos7y=pos7y+20;
    pos8y=pos8y+20;
    pos9y=pos9y+20;
    slidercounter=slidercounter+1;
  }
  if (slidercounter==45) {
    slidercounter=0;
    slidervalue=0;
  }
  if (slidervalue==2) {
    pos1y=pos1y-20;
    pos2y=pos2y-20;
    pos3y=pos3y-20;
    pos4y=pos4y-20;
    pos5y=pos5y-20;
    pos6y=pos6y-20;
    pos7y=pos7y-20;
    pos8y=pos8y-20;
    pos9y=pos9y-20;
    slidercounter=slidercounter+1;
  }
}
function sleepchech() {
  idle=idle+1;
  if (mousePressed==true) {
    idle=0;
  }
  if (idle>1000) {
    pos1x=0;
    pos1y=0;
    pos2x=0;
    pos2y=900;
    pos3x=0;
    pos3y=1800;
    pos4x=0;
    pos4y=2700;
    pos5x=0;
    pos5y=3600;
    pos6x=0;
    pos6y=4500;
    pos7x=0;
    pos7y=5400;
    pos8x=0;
    pos8y=6300;
    pos9x=0;
    pos9y=7200;
    slidercounter=0;
    slidervalue=0;
    idle=0;
  }
}
