var DownloadImg
87

function preload(){
DownloadImg=loadImage("Download.png")

}

function setup() 
{
  createCanvas(5000,700);
  Download=createSprite(100,350,10,10)
  Download.addImage(DownloadImg)
  Download.scale=0.2
  
}

function draw() 
{
  background(51);

  if(keyDown("left")){
    Download.velocityX=-5
   Download.velocityY=0
    
    
    }
    if(keyDown("right")){
    Download.velocityX=5
   Download.velocityY=0

    }

    if(keyDown("Up_Arrow")){
      Download.velocityX=0
     Download.velocityY=-5
  
      }
      if(keyDown("DOWN_Arrow")){
       Download.velocityX=0
        Download.velocityY=5
    
        }
    
  

    
   
    
 
  drawSprites()

 
   
}