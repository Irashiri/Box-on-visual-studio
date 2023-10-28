
function setup() {
  createCanvas(400,400);
  var box = createSprite (200,200,30,30);

}

function draw() 
{
  background(100);
  if(keyIsDown(RIGHT_ARROW)){
 box.position.x = box.position.x + 3;
  }
 drawSprites();
}


// function setup(){
// createCanvas(400,400);
// var box = createSprite(200,200,30,30);

// }

// function draw()
// {

//   background(30);
//     // if(keyIsDown(RIGHT_ARROW)){
//     // box.position.x = box.position.x + 5 ;
//     //   }

//     // if(keyIsDown(LEFT_ARROW)){
//     // box.position.x = box.position.x - 1 ;
//     //   }

//     // if(keyIsDown(UP_ARROW)){
//     // box.position.y = box.position.y + 1 ;
//     //   }
//     // if(keyIsDown(DOWN_ARROW)){
//     // box.position.y = box.position.y - 1 ;
//     //   }
// drawSprites();


// }







    