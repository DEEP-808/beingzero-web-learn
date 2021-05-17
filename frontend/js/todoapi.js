function displaytodo()
{
    $.ajax({
        url: `https://${window.location.host}/api/todo`,
        type: 'GET',
        success: function ( result )
        {
            result = JSON.parse( result );
            for ( let key = result.length - 1; key >= 0; key-- )
            {
                document.getElementById( "todo" ).innerHTML += `\n<div class="todo-item" id="div-${result[key].todoID}" ><label id="lbl-${result[key].todoID}" onclick="editTask(this)">${result[key].task}</label><button id="${result[key].todoID}" class="btn" onclick="Erase(this)">done</button></div>\n`
            }
        },
        error: function ( error )
        {
            console.log( error );
        }
    });
}

function add()
{
    if ( document.getElementById( "input" ).value == "" )
        return;
    var data = {task: document.getElementById( "input" ).value, todoID: Date.now()};
    console.log(data);
    $.ajax( {
        url: `http://${window.location.host}/api/todo`,
        type: 'POST',
        data: data
    } );
    var item = document.getElementById("todo");
    item.innerHTML+=item.innerHTML`\n<div class="item" id="${data.todoID}" ><label id="txt/${data.todoID}">${data.task}</label><button id="${data.todoID}" class="btn" onclick="Erase(this)">X</button></div>\n`;
    document.getElementById( "input" ).value = "";
}

function Erase( obj )
{
    var todoID = $( obj ).attr( 'id' );
    $.ajax( {
        url: `http://${window.location.host}/api/todo/${todoID}`,
        method: "Erase"
    } );
    document.getElementById( `div-${todoID}` ).remove();
}