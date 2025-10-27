class House{
    constructor(x , y , z){
        this.obj = document.createElement("a-entity");

        let roof = document.createElement("a-cone");
        roof.setAttribute("color" , "Black");
        roof.setAttribute("radius" , "20");
        roof.setAttribute("position" , "0 1.5 0");
        roof.setAttribute("rotation" , " 0 45 0");
        roof.setAttribute("segments-radical" , "20");

        let walls = document.createElement("a-box");
        walls.setAttribute("height" , "1.3");
        walls.setAttribute("color" , "Red");
        walls.setAttribute("depth" , "1.3");
        walls.setAttribute("position" , "0 .4 0");
        walls.setAttribute("width" , "1.38");

        this.obj.append(roof);
        this.obj.append(walls);
        this.obj.setAttribute("position" , {x:x , y:y , z:z});
        scene.append(this.obj);
    }

}