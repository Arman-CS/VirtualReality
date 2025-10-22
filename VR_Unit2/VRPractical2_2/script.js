let scene , a=0 , x=10 , y=10;
window.onload = function(){
    pokeball = document.querySelector("#pokemonball");
    car = document.querySelector("#car");
    rocket = document.querySelector("#rocket");
    sun = document.querySelector("#sun");
    sun.o=2;
    sun.do=-0.005;
    dude = document.querySelector("#dude");
    dude.s=0
    dude.ds=0.01
    loop();
}

function loop(){
    a += 1;
    x += -0.01;
    y += 0.01;
    pokeball.setAttribute("rotation" , {x:a , y:0 , z:0});
    car.setAttribute("position" , {x:x , y:0 , z:0});
    rocket.setAttribute("position" , {x:0 , y:y , z:0});
    sun.o+=sun.do;
    sun.setAttribute("opacity" , sun.o);
    dude.s+=dude.ds;
    dude.setAttribute("scale" , {x:1 , y:dude.s , z:1});
    setTimeout(loop,10);
}