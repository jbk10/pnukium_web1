let x,y,turn,kturn,r1,g1,b1,r2,g2,b2,ts,tm,th,td,tmt,ty,chan

turn=0
kturn=0
chan=0

function setup() {
  createCanvas(400, 400);
}

function drawar(){
  x=mouseX+50
  y=mouseY+20
  
  if (mouseIsPressed==true){
    if (turn==0){
      turn=turn+1
    }
    else{
      turn=0

    }
  }
  
  if (turn==1){
    fill(r1,g1,b1)
    rect(x,y,50)
    fill(r2,g2,b2)
  ellipse(x+100,y+100,50)
  }
  else{
    fill(r2,g2,b2)
    ellipse(x,y,50)
    fill(r1,g1,b1)
    rect(x+50,y+50,50)
  }
}

function keydr(){
  if (keyIsPressed==true){
    if (kturn==0){
      r1=random(0,225)
      g1=random(0,225)
      b1=random(0,225)
      kturn=kturn+1
    }
    else{
      r2=random(0,225)
      g2=random(0,225)
      b2=random(0,225)
      kturn=0
    }
  }
}

function txtdr(){
  fill(0)
  
  text('마우스를 눌러 도형 바꾸기',5,30)
  text('키를 눌러 색 바꾸기',5,50)
  
  tmt=month()
  td=day()
  ty=year()
  tm=minute()
  ts=second()
  th=hour()
  if (th>12){
    th=str(th-12)
    th='오후'+th
  }
  
    text(ty+'년'+tmt+'월'+td+'일',300,30)
    text(th+'시'+tm+'분'+ts+'초',300,50)
  
}

function draw() {
  background(220);
  fill(255)
  drawar()
  keydr()
  txtdr()
}