var arrayNombresVar = [];
var numFC = 0;
var contenidoString = "";
//Obtener valor de filas y columnas
function obtenerNumFC() {
    numFC = document.getElementById("nFilCol").value;

    var arrayNombresDiv = [];
    var numVar = 0;
    if (numFC > 2) {

        console.log(arrayNombresVar);
        for (var n = 0; n < numFC; n++) {
            for (var i = 0; i < numFC; i++) {
                if (i == n) {
                    contenidoString = contenidoString + "1";
                } else {
                    contenidoString = contenidoString + "0";
                }
            }
            var parrafo = document.createElement("p");
            var contenido = document.createTextNode(contenidoString);
            parrafo.appendChild(contenido);
            document.body.appendChild(parrafo);
            contenidoString = "";
        }

    } else {
        alert("Matriz demasiado pequeña\nMinimo 3");
    }

}