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


window.onload = function(){
    loadCircleProgress();
    duplicateElement();
    loadCalender();
};

window.onresize = function(){
    //changeClasses();
};