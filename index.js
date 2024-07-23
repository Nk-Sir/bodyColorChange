let body = document.querySelector("body");
let button = document.querySelector(".mode");

let mode ="light";

button.addEventListener("click" , ()=>{
    switch(mode){
        case "light":
            body.style.background ="red";
            mode ="red";
            break;
            case "red":
                body.style.background ="blue";
                mode ="blue";
                break;
                case "blue":
                    body.style.background ="white";
                    mode ="light";
                    break;
    }
})