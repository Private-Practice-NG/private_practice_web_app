var rightMenuShowing = true;

function loadCircleProgress(){
    var progress = document.getElementsByClassName("percentile");
    for(var i = 0; i < progress.length; i++){
        progress[i].style.strokeDashoffset = (440 - (440 * progress[i].getAttribute('percent-count')) / 100);
    }
}

function duplicateElement(){
    var element = document.getElementsByClassName('duplicate');
    for(var i = 0; i < element.length; i++){
        var amount = element[i].getAttribute("amount"),
        parent = element[i].parentElement;
        element[i].removeAttribute("amount");
            
        var duplicate = parent.innerHTML;
        // console.log(amount, parent, duplicate);

        for(var x = 0; x < amount; x++){
            var recipe = " " + duplicate;
            parent.innerHTML += " " + recipe;
        }

    } 
}

function recalcBG(){
    var bg = $(".dashboard-bg").get(0);
    bg.style.height =   window.innerHeight +"px";
    bg.style.width =   window.innerWidth +"px";
}

function toggleSideMenu(){
    var container = $("#main-container").get(0);
    var menu = $(".right-menu").get(0),
    Btn = $(".toggle-right-menu").get(0);
    if(rightMenuShowing){
        menu.style.display = 'none';
        container.setAttribute('class', 'container');
        Btn.children[0].setAttribute('class', 'fa fa-caret-left');
        rightMenuShowing = false;
        
        
    }else{        
        menu.style.display = 'flex';
        container.setAttribute('class', 'container float-left');
        Btn.children[0].setAttribute('class', 'fa fa-caret-right');
        rightMenuShowing = true;
    }
    positionRightMenu(true);
}

function positionRightMenuBtn(menuTop, menuLeft, clicked){
    var rMenu = $(".right-menu").get(0);
    var rBtn = $(".toggle-right-menu").get(0);

    if(rightMenuShowing){
        rBtn.style.top = ((menuTop + (rMenu.offsetHeight/2)) - (rBtn.clientHeight/2)) +"px";
        rBtn.style.left = (menuLeft - rBtn.offsetWidth) + "px";
        // console.log("reposition Menu Botton", rBtn.offsetWidth, rBtn.style.left);

    }else{
        if(clicked){
            // rBtn.style.top = ((menuTop + (rMenu.clientHeight/2)) - (rBtn.clientHeight/2)) +"px";
        }else{
            rBtn.style.top = ((menuTop + (rMenu.clientHeight/2)) - (rBtn.clientHeight/2)) +"px";
        }
        rBtn.style.left = (window.innerWidth - rBtn.offsetWidth) + "px";
    }
}

function positionRightMenu(clicked=false){
    var rMenu = $(".right-menu").get(0);
    var rMenuTitle = $(".right-menu-title").get(0);
    
    var padding = -20;

    var menuTop = 220,
    menuLeft = ((window.innerWidth - rMenu.clientWidth) - padding);

    rMenu.style.top =   menuTop +"px";
    rMenu.style.left = menuLeft + "px";

    rMenuTitle.style.top =   210 +"px";
    rMenuTitle.style.left = ((window.innerWidth - rMenuTitle.clientWidth) - padding - 30) +"px";

    
    positionRightMenuBtn(menuTop, menuLeft, clicked);
    console.log("reposition Menu");
}

function reCalculateOutOfBounds(axis, sizeValue, bounds){

    if(axis == "x"){
        var positionValue = (window.innerWidth - (window.innerWidth / 3));
        sizeValue = sizeValue.clientWidth;
    }
    else if(axis == "y"){
        var positionValue = (window.innerHeight - (window.innerHeight / 3));
        sizeValue = sizeValue.clientHeight;
    }
    
    var newPosition = bounds - sizeValue;
        
    return newPosition;
    

}

$(document).ready(function(){
    $(".toggle-right-menu").on('click', function(){
        toggleSideMenu();
    });
    loadCircleProgress();
    duplicateElement();
    loadCalender();
    recalcBG();
    positionRightMenu();
});

window.onresize = function(){
    recalcBG();
    positionRightMenu();
};