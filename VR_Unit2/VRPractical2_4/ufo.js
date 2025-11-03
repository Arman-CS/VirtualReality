class Ufo{
    constructor(x,y,z){
        this.obj = document.createElement("a-entity");
        
        let ship = document.createElement("a-cylinder");
            ship.setAttribute("position" , "0 10 -20");
            ship.setAttribute("color" , "purple");
            ship.setAttribute("radius" , "5");
        let ship2 = document.createElement("a-cylinder");
            ship2.setAttribute("position" , "0 10 -20");
            ship2.setAttribute("color" , "green");
            ship2.setAttribute("radius" , "2.5")
        let ship3 = document.createElement("a-cone");
            ship3.setAttribute("position" , "0 3 -20");
            ship3.setAttribute("color" , "green");
            ship3.setAttribute("opacity" , "0.5");
            ship3.setAttribute("height" , "15");
            

            
        this.obj.append(ship);
        this.obj.append(ship2);
        this.obj.append(ship3);
        this.obj.setAttribute("position" , {x:x , y:y , z:z});
        this.obj.setAttribute("color" , "blue");
        console.log(this.obj);
        scene.append(this.obj)

    }

}
