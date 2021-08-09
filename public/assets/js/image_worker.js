canvas = $("#editor").get(0);
ctx = canvas.getContext("2d");
drawnOnCanvas = [];

function loadTemplate(){
    var img = $("#template").get(0);

        canvas.style.height = img.height;
        canvas.style.width = img.width;
        
        var template = {
            object:img,
            x:0,
            y:0
        }

        ctx.drawImage(template.object, template.x, template.y);
        addNextArrayItem(drawnOnCanvas, template);
}

function addNextArrayItem(array, item){
    if(array.length == 0){
        array[0] = item;
    }else if(array.length == 1){
        array[1] = item;
    }else{
        array[array.length] = item;
    }
    return array;
}

function refreshView(){

}