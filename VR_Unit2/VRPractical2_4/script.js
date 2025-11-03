let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let scene;
window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene"); 

  for(let i=0 ; i<100 ; i++){
    x=rnd(-20,20)
    z=rnd(-20,20)
    y=rnd(8,300)
    let ufo = new Ufo(x,y,z)
  }
  for(let i=0 ; i<100 ; i++){
    x=rnd(-20,20)
    z=rnd(-20,20)
    let rocket = new Rocket(x , 0 , z )
  }

  loop();
})

function loop(){

}

  
  window.requestAnimationFrame( loop );

