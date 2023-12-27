var column =parseInt(document.getElementById("columns").value)
var row = parseInt(document.getElementById("rows").value)

function makeATable(val){
    var sign = selection.value
    var tab = "<table>"
    tab += "<tr>"
    for (var i = 1; i<=column; i++){
        tab += "<td>"
        for (var j=1; j<=row;j++){
            var calcValue = (eval(i + sign + j))
    
            if (calcValue % 1 !==0){
                var calcValue = parseFloat(eval(i + sign + j)).toFixed(2)
            }
            tab+= i + sign + j + "=" + calcValue +"<br>" + "<br>" ;
        }
    }
    tab+= "</table>"
    dispDiv.innerHTML = tab
}



