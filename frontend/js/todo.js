console.log("hello wrld");
var i=0;
var list = document.getElementById("todo");
var input = document.getElementById("task");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   addtolist();
  }
});
var complete;
function addtolist(){
    i++;
    var data=input.value;
    //console.log(data);
    var item = document.createElement("li");
    item.setAttribute("class",'pend');
    item.setAttribute("id",i);
    item.appendChild(document.createTextNode(data));
    //item.addEventListener("click",change);
    if(!complete)
        complete=(data+":pend/");
    else
        complete+=(data+":pend/");
        
    window.localStorage.allitems=complete;
    console.log("local storage");
    console.log(window.localStorage.allitems);
    list.appendChild(item);
    input.value="";
}

list.addEventListener('click',function(e){
    if(e.target.tagName=='LI')
    {
        console.log("clicked");
        if(e.target.classList == "pend")
        {
            e.target.setAttribute('class','done');
        }
        else
        {
            e.target.setAttribute('class','pend');
        }
    }
},false);

/*
function change()
{
    console.log("changed");
    let item=this.innerHTML;
    console.log(item);
    var arr=complete.split('/');
    console.log(arr);
    for(var i=0;i<arr.length-1;i++)
    {
        var temp=arr[i].split(":");
        if(temp[0]==item)
        {
            temp[1]=":done";
            arr[i]=temp[0]+temp[1];
        }
    }
    complete=arr.join("/");
    //console.log(complete);
    window.localStorage.allitems=complete;

    this.setAttribute("class","done");
}
*/
function onstart(){
    var localvalues = window.localStorage.allitems;
    if(!localvalues)
    {
        list.innerHTML="";
    }
    else
    {
        console.log("local before load");
        console.log(localvalues);
        list.innerHTML="";
        complete="";
        var items = localvalues.split('/');
        for(let i=0;i<items.length-1;i++)
        {
            var temp = items[i].split(':');
            //console.log(temp);
            var newi = '<li class=' +temp[1]+'>'+temp[0] +'</li>';
            complete+=(temp[0]+':'+temp[1]+'/');
            list.innerHTML+=newi;
        }
        
    }
}

function clearall()
{
    list.innerHTML="";
    window.localStorage.allitems=""; 
}


onstart()