const decreasebtn=document.getElementById("decreasebtn");
const resetbtn=document.getElementById("resetbtn");
const increasebtn=document.getElementById("increasebtn");
const counterLabel=document.getElementById("counterLabel");
let count=0;

decreasebtn.onclick=function(){
    count--;
    counterLabel.textContent=count;
}
increasebtn.onclick=function(){
    count++;
    counterLabel.textContent=count;
}
resetbtn.onclick=function(){
    count=0;
    counterLabel.textContent=count;
}

