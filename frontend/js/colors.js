document.getElementById("demo").style.backgroundColor="rgb(127,127,127)";
function change(){
    let red=document.getElementById("red range").value;
    console.log(red);
    let green = document.getElementById("green range").value;
    console.log(green);
    let blue = document.getElementById("blue range").value;
    console.log(blue)
    let soMany = 10;
    let color= (`rgb(${red},${green},${blue})`);
    console.log(color);
    document.getElementById("val").innerHTML=color;
    document.getElementById("demo").style.backgroundColor=color;
}
