var Engine = (function(global){
    var doc = global.document,
    win = global.window,
    canvas = doc.createElement('canvas'),
    ctx = canvas.getContext('2d'),
    lastTime,
    imgs = ['images/template.jpg'];
    
    doc.body.appendChild(canvas);

    function main(){

        var now = Date.now(),
            dt = (now - lastTime) / 1000.0;

            update(dt);
            render();
            lastTime = now;
            win.requestAnimationFrame(main);
            
    }

    function update(dt){
        updateEntities(dt);
    }

    function updateEntities(dt){
        onScreenObjects.forEach(function(item){
            item.update(dt);
        });
    }

    function render(){
        ctx.clearRect(0,0,canvas.width,canvas.height);
        ctx.drawImage(Resources.get('images/template.jpg'),0,0);
        renderEntities();
    }

    function renderEntities(){
        onScreenObjects.forEach(function(item){
            item.render();
        });
    }

    Resources.load(imgs);
    Resources.onReady(init);

    global.ctx = ctx;
    global.canvas = canvas;
    canvas.onclick = function(event){
        console.log(event.offsetX, event.offsetY);
    }

})(this);