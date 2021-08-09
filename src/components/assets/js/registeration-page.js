function changeSelection(e){
    var user_type_input = document.getElementById("register-user-type");
    user_type_input.value = e.parentElement.getAttribute("user-type");
    setSelection();
}

function setSelection(){
    var options_image = document.getElementsByClassName("register-option");    
    var user_type = document.getElementById("register-user-type").value;
    var src_path = "assets/img/icons/";

    switch(user_type) {
        case "hospital":
          for(var x = 0; x < options_image.length; x++){
              if(options_image[x].getAttribute("user-type") == user_type){
                options_image[x].children[0].src = src_path + options_image[x].getAttribute("user-type") + "-fill.png";
                options_image[x].setAttribute("class", options_image[x].getAttribute("class") + " active");
              }else{
                options_image[x].children[0].src = src_path + options_image[x].getAttribute("user-type") + "-outline.png";
                options_image[x].setAttribute("class", "register-option");
              }
          }
          break;
        case "patient":
            for(var x = 0; x < options_image.length; x++){
                if(options_image[x].getAttribute("user-type") == user_type){
                  options_image[x].children[0].src = src_path + options_image[x].getAttribute("user-type") + "-fill.png";
                  options_image[x].setAttribute("class", options_image[x].getAttribute("class") + " active");
                }else{
                  options_image[x].children[0].src = src_path + options_image[x].getAttribute("user-type") + "-outline.png";
                  options_image[x].setAttribute("class", "register-option");
                }
            }
          break;
        case "doctor":
            for(var x = 0; x < options_image.length; x++){
                if(options_image[x].getAttribute("user-type") == user_type){
                  options_image[x].children[0].src = src_path + options_image[x].getAttribute("user-type") + "-fill.png";
                  options_image[x].setAttribute("class", options_image[x].getAttribute("class") + " active");
                }else{
                  options_image[x].children[0].src = src_path + options_image[x].getAttribute("user-type") + "-outline.png";
                  options_image[x].setAttribute("class", "register-option");
                }
            }
          break;
        default:
          // code block
      }  
      // console.log(document.getElementById("register-user-type").value);
}