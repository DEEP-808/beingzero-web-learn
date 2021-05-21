var k=1;

var grid = document.getElementById("grid");
var nums=[];
var tbl=document.createElement("table");
var tBody=document.createElement("tbody");
document.getElementById("number").innerHTML=0;
for(var i=1;i<=10;i++)
{
    var row = document.createElement("tr");
    for(var j=1;j<10;j++)
    {
        var cell = document.createElement("td");
        cell.classList.add("box");
        cell.setAttribute("id",(j-1)*10+i);
        row.appendChild(cell);
    }
    tBody.appendChild(row);
}
tbl.appendChild(tBody);
grid.appendChild(tbl);

function generatenum(){
    var res = Math.floor(Math.random()*90)+1;
    return res;
}

function getnums(){
    while(nums.length<90){
        //setTimeout(function(){
            var cnum = generatenum();
            console.log(cnum);
            while(nums.includes(cnum)==true)
            {
                console.log(cnum);
                cnum = generatenum();
            }
            nums.push(cnum);
            //document.getElementById(String(cnum)).innerHTML=cnum;
            //console.log(nums);
        //},250)
    }
    for(let i=0;i<nums.length;i++)
	{
		setTimeout(function(){
			console.log(i);
            var cnum=nums[i];
            document.getElementById("number").innerHTML=cnum;
            document.getElementById(String(cnum)).innerHTML=cnum;
		},4000*i)
	}

}