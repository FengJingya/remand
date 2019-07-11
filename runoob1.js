require("./style.css");
//document.write(require("./runoob2.js"));
/*var canvas = document.createElement('canvas');
canvas.width = 500;
canvas.height = 500;
document.body.appendChild(canvas);*/
let canvas,ctx
canvas=document.getElementById('canvas');
ctx=canvas.getContext('2d');//画笔
canvas.width=632;
canvas.height=472;

export {canvas,ctx}
