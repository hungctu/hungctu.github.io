let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#FF0000"

let item="";

let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");

btn1.addEventListener("click", function(){
    if(tg.MainButton.isVisible){
        tg.MainButton.hide();
    }
    else{
        tg.MainButton.setText("You add Charizard");
        item = "1";
        tg.MainButton.show();
    }
})
btn2.addEventListener("click", function(){
    if(tg.MainButton.isVisible){
        tg.MainButton.hide();
    }
    else{
        tg.MainButton.setText("You add Garchomp");
        item = "2";
        tg.MainButton.show();
    }
})
btn3.addEventListener("click", function(){
    if(tg.MainButton.isVisible){
        tg.MainButton.hide();
    }
    else{
        tg.MainButton.setText("You add Gengar");
        item = "3";
        tg.MainButton.show();
    }
})
btn4.addEventListener("click", function(){
    if(tg.MainButton.isVisible){
        tg.MainButton.hide();
    }
    else{
        tg.MainButton.setText("You add Gradevoir");
        item = "4";
        tg.MainButton.show();
    }
})
btn5.addEventListener("click", function(){
    if(tg.MainButton.isVisible){
        tg.MainButton.hide();
    }
    else{
        tg.MainButton.setText("You add Lucario");
        item = "5";
        tg.MainButton.show();
    }
})
btn6.addEventListener("click", function(){
    if(tg.MainButton.isVisible){
        tg.MainButton.hide();
    }
    else{
        tg.MainButton.setText("You add Mewtwo");
        item = "6";
        tg.MainButton.show();
    }
})

tg.WebApp.onEvent("mainButtonClicked",function(){
    tg.sendData(item);
})

let usercard = document.getElementById("usercard");
let p = document.createElement("p");
p.innerText =  `${window.Telegram.WebApp.initDataUnsafe.user.first_name}
${window.Telegram.WebApp.initDataUnsafe.user.last_name}`;
usercard.appendChild(p)
