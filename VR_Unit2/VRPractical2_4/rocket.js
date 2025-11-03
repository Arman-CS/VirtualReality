class Rocket{
    constructor(x,y,z){
        this.obj = document.createElement("a-entity");

        let base = document.createElement("a-cylinder");
        base.setAttribute("radius" , "0.5");
        base.setAttribute("color" , "grey");
        base.setAttribute("height" , "5");
        this.obj.append(base);

        let roof = document.createElement("a-cone");
        roof.setAttribute("radius" , "0.1");
        roof.setAttribute("color" , "Black");
        roof.setAttribute("height" , "1");
        roof.setAttribute("position" , "0 3 0")
        this.obj.append(roof);

        let glass = document.createElement("a-cylinder");
        glass.setAttribute("radius" , "0.3")
        glass.setAttribute("color" , "black");
        glass.setAttribute("opacity" , "0.5");
        glass.setAttribute("rotation" , "90 0 0")
        glass.setAttribute("position" , "0 1 0")
        this.obj.append(glass);

        scene.append(this.obj);
        this.obj.setAttribute("position" , {x:x , y:y , z:z});
    }


    
}