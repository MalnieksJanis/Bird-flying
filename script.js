var mousePosition;
var offset = [0,0];
var isDown = false;

const bird = window.document.querySelector('#bird');
const birdHeight = 50;
const birdWidth = 50;

const eagle = window.document.querySelector('#eagle');
const eagleAtack = () => eagle.style.left = parseInt(eagle.style.left) - 1 + '%';
const eagleParrentElement = document.body;

let score = 8;

// const detectifEagleCatchBird = () => {

//  let birdX=parseInt(bird.style.left);
//  let birdY=parseInt(bird.style.top);
 
 let eagleX= parseInt(eagle.style.left);
 let eagleY = parseInt(eagle.style.top);

// var birD = {x: birdX, y: birdY, width: 50, height: 50}
// var eaglE = {x: eagleX, y: eagleY, width: 10, height: 10}



// if (birD.x < eaglE.x + eaglE.width &&
//    birD.x + birD.width > eaglE.x &&
//    birD.y < eaglE.y + eaglE.height &&
//    birD.y + birD.height > eaglE.y) {
//      window.document.body.appendChild(eagle)
// }
// console.log(birD.x < eaglE.x + eaglE.width &&
//    birD.x + birD.width > eaglE.x &&
//    birD.y < eaglE.y + eaglE.height &&
//    birD.y + birD.height > eaglE.y);
// // filling in the values =>

// if (5 < 30 &&
//     55 > 20 &&
//     5 < 20 &&
//     55 > 10) {
//     // collision detected!
// }

//   }


const detectifEagleCatchBird = () => {
  let birdX=parseInt(bird.style.left);
 let birdY=parseInt(bird.style.top);
  document.querySelectorAll('#eagle').forEach(eagleo => {
    const gleX = parseInt(eagleo.style.left);
    const gleY = parseInt(eagleo.style.top);
  
    if (birdY<=eagleY && birdY+65 >=eagleY && birdX<=eagleX && birdX + 50 >=eagleX) {
      eagleParrentElement.removeChild(eagleo);
//         score = score -1;
//         scoreElement.innerText = score;
     
//                   if(score === 0) {
//                     sound.play();
//                        alert("YOU WIN, CONGRATULATIONS!");
//                        document.location.reload();
 
 
// }
}       console.log(birdY<=eagleY && birdY+80 >=eagleY && birdX<=eagleX && birdX + 97 >=eagleX);         })
}









 

const detectIfEagleOutOfWindow = () => {
   if (parseInt(eagle.style.left)<-100){
     eagle.style.top = Math.floor(Math.random() * window.innerHeight) + 'px';
     eagle.style.left = '110%';
   }
}

setInterval(() => {
  eagleAtack();
   detectifEagleCatchBird();
  detectIfEagleOutOfWindow();
}, 100)



document.body.appendChild(bird);

bird.addEventListener('mousedown', function(e) {
    isDown = true;
    offset = [
       bird.offsetLeft - e.clientX,
        bird.offsetTop - e.clientY
    ];
}, true);

document.addEventListener('mouseup', function() {
    isDown = false;
}, true);

document.addEventListener('mousemove', function(event) {
    event.preventDefault();
    if (isDown) {
        mousePosition = {
    
            x : event.clientX,
            y : event.clientY
    
        };
        bird.style.left = (mousePosition.x + offset[0]) + 'px';
        bird.style.top  = (mousePosition.y + offset[1]) + 'px';
    }
}, true);



 
//  const collisionDetection = () => {
//   let birdx = parseInt(bird.style.left);
//   let birdy = parseInt(mario.style.top);
//   document.querySelectorAll('#eagle').forEach(eagleElement => {
//     const eagleX = parseInt(eagleeagleeagleeagleElement.style.left);
//     const eagleeagleY = parseInt(eagleeagleeagleElement.style.top);
   
//     if (bird.x > eagle.x + eagle.width ||
//       bird.x + bird.width < eagle.x &&
//       bird.y > eagle.y + eagle.height &&
//       bird.y + bird.height < eagle.y);
              
//  }) }

// function createEagle() {

//   const left_position =( window.innerWidth - 50);
//   const top_position = Math.max(Math.floor(Math.random() * window.innerHeight - 50), 0);

//   //creating the image on the leftside
//   var eagle = document.createElement('img');
//   eagle.className = 'btc';
//   eagle.src = "eagle2.png";
//   eagle.style.position = 'absolute';

//   eagle.style.top = top_position + "px";
//   eagle.style.left = left_position + "px";
//   eagleParrentElement.appendChild(eagle);
  
// }