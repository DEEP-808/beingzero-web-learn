console.log("wazaaaa");
var i=0;
var arr=[];
var input = document.getElementById("task");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   addtolist();
   //document.getElementById("dem").innerHTML="hey";
  }
});

function addtolist(){
    i++;
    var taskname=document.getElementById('task').value;
    var list=document.getElementById('items');
    var item=document.createElement('li');
    item.setAttribute('class','incomplete');
    item.setAttribute('id',i);
    arr.push(i);
    item.appendChild(document.createTextNode(taskname));
    list.appendChild(item);
    document.getElementById('task').value="";
    console.log(arr);
}


function clearall(){
    console.log(arr);
    for(let i=0;i<arr.length;i++)
    {
        document.getElementById(arr[i]).remove();
    }
}