var asmi=document.getElementById("asmi_canvas");
var context=asmi.getContext("2d");

context.beginPath();
context.strokestyle="grey";
context.lineWidth=5;
context.rect(100,120,400,200);
context.stroke();

context.beginPath();
context.lineWidth=5;
context.strokeStyle="red";
context.arc(200,200,40,0,360);
context.stroke();


context.beginPath();
context.lineWidth=5;
context.strokeStyle="green";
context.arc(290,200,40,0,360);
context.stroke();

context.beginPath();
context.lineWidth=5;
context.strokeStyle="black";
context.arc(340,240,40,0,360);
context.stroke();

context.beginPath();
context.lineWidth=5;
context.strokeStyle="blue";
context.arc(250,240,40,0,360);
context.stroke();

context.beginPath();
context.lineWidth=5;
context.strokeStyle="Yellow";
context.arc(380,200,40,0,360);
context.stroke();

function asmimousedown(e){
var x=e.clientX-asmi.offsetLeft;
var y=e.clientY-asmi.offsetTop;

circle(x,y);
}
function circle (x,y){
    context.beginPath();
    context.lineWidth=3;
    context.strokeStyle="red,blue,green,black,yellow";
    context.arc(x,y,70,0,360);
    context.stroke();
}
function clearx(){
    context.clearRect(0,0,asmi.width,asmi.height);
}