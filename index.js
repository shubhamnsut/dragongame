// var score = 0;
// var cross= true;
// audio = new Audio('music.mp3');
// audiogo = new Audio('gameover.mp3');
// setTimeout(() => {
//     audio.play()
// }, 1000);
// document.onkeydown= function(e){
//     if(e.keyCode==38||e.keyCode==32){
//     var dino = document.querySelector('.dino');
//     // creating a class animateDino using javascript for jump
//     dino.classList.add('animateDino')  //class animateDino is added for animation(to be done in css) 
    
//     setTimeout(function(){
//         dino.classList.remove('animateDino'); // the class we created is removed after we have jump

//     },700);

// }
// // for moving right the dyano
//    if(e.keyCode==39){
//        var dino= document.querySelector('.dino');
//        var dinoX =parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
//        dino.style.left= dinoX+110+'px';

//    }
//    // for moving left dyno
//    if(e.keyCode==37){
//     var dino= document.querySelector('.dino');
//     var dinoXB =parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));  // dinoXB for moving left
//     dino.style.left= dinoXB-110+'px';

// }



// }
// // checking for collision 
// setInterval(() => {
//     dino = document.querySelector('.dino');
//     gameOver = document.querySelector('.gameOver');
//     obstacle = document.querySelector('.obstacle');

//     dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));// getting the dino left value
//     dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue('top'));//getting the dino top value

//     ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));// getting the obstacle left value
//     oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));// getting the  obstacle left value

//     offsetX = Math.abs(dx - ox);
//     offsetY = Math.abs(dy - oy);
   
//     // console.log(offsetX, offsetY)
//     // case of collision
//     if (offsetX <73 && offsetY < 52) { 
//         gameOver.innerHTML = "Game Over - Reload to Play Again"
//         obstacle.classList.remove('obstacleAni')// we remove the class obstacleAni to stop the dragone when collision happen  obstacle is the obstracle selected
//         audiogo.play();
//         setTimeout(() => {
//             audiogo.pause();
//             audio.pause();
//         }, 1000);
//     }
//     else if(offsetX<145&& cross){
//         score+=1;
//         update(score);
//         cross= false;
//         setTimeout(()=>{  // after 1 second make it true because dinosore has cross him till then 
//             cross= true;

//         },1000);
        
//     //    setTimeout(()=>{
//     //         // for slowly after every pass increasing the speed
//     //     aniDur=parseFloat(window.getComputedStyle(dino, null).getPropertyValue('animation-duration'));// floating value is allowed here
//     //     newDur = aniDur-0.1;
//     //     obstacle.style.animationDuration= newDur+ 's';
//     //    },500);
//     }
// },10);

// // updating the score 
// function update(score){
//     var scoreCont= document.getElementById('scoreCont');
//     scoreCont.innerHTML="Your Score: "+score;
// }





score = 0;
cross = true;

// audio = new Audio('music.mp3');
// audiogo = new Audio('gameover.mp3');
// setTimeout(() => {
//     audio.play()
// }, 1000);
document.onkeydown = function (e) {
    console.log("Key code is: ", e.keyCode)
    if (e.keyCode == 38) {
        dino = document.querySelector('.dino');
        dino.classList.add('animateDino');
        setTimeout(() => {
            dino.classList.remove('animateDino')
        }, 700);
    }
    if (e.keyCode == 39) {
        dino = document.querySelector('.dino');
        dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = dinoX + 112 + "px";
    }
    if (e.keyCode == 37) {
        dino = document.querySelector('.dino');
        dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = (dinoX - 112) + "px";
    }
}

setInterval(() => {
    dino = document.querySelector('.dino');
    gameOver = document.querySelector('.gameOver');
    obstacle = document.querySelector('.obstacle');

    dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue('top'));

    ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));

    offsetX = Math.abs(dx - ox);
    offsetY = Math.abs(dy - oy);
    // console.log(offsetX, offsetY)
    if (offsetX < 73 && offsetY < 52) {
        gameOver.innerHTML = "Game Over - Reload to Play Again"
        obstacle.classList.remove('obstacleAni')
        // audiogo.play();
        // setTimeout(() => {
        //     audiogo.pause();
        //     audio.pause();
        // }, 1000);
    }
    else if (offsetX < 145 && cross) {
        score += 1;
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
        setTimeout(() => {
            aniDur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
            newDur = aniDur - 0.1;
            obstacle.style.animationDuration = newDur + 's';
            console.log('New animation duration: ', newDur)
        }, 500);

    }

}, 10);

function updateScore(score) {
    scoreCont.innerHTML = "Your Score: " + score
}