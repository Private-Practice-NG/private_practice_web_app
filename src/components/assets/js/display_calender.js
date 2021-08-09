function loadCircleDots(){
    var dot_locations = document.getElementsByClassName('current_day');
    var dot = document.createElement('img');
    dot.setAttribute('class', 'dot');
    dot.setAttribute('src', 'assets/img/icons/circle_dot.svg');
    dot_locations[0].parentElement.appendChild(dot);
}

function createDays(){
    var days = document.getElementById('days');
    var length = days.getAttribute("amount-of-days");
    var d = new Date();

    for(var x = 0; x < length; x++){
        // console.log(d);
        if(d.getDate() == (x+1)){  
            var day = document.createElement('li');
            var dotted = document.createElement('a');
            dotted.setAttribute('class', 'active current_day');
            dotted.textContent = (x+1);          
            day.appendChild(dotted);
        }else{
            var day = document.createElement('li');
            day.textContent = (x+1);
        }
        days.appendChild(day);
    }
    
}

function loadCalender(){
    createDays();
    loadCircleDots();
}

