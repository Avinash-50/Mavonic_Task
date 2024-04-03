function createRectangle(len,bre){
    return rectangle={
        length:len,
        breadth:bre,
        draw (){
            console.log('drawing rectangle');
        }
    };
}

let rectangleObj1 = createRectangle(5,4);