var arrayNombresVar;
var array1 = [0, 1, 0];
var array2 = [];
var numFC;
var contenidoString = "";
//Obtener valor de filas y columnas
function obtenerNumFC() {
    numFC = document.getElementById("nFilCol").value;

    var arrayNombresDiv = [];
    var numVar = 0;
    if (numFC > -1) {
        //Agregar a matriz 2
        for (var t = 0; t <= numFC; t++) {
            array2.push(0);
            for (var j = 0; j < array1.length; j++) {
                if (typeof array1[j + 1] == 'undefined') {
                    array2.push(0)
                } else {
                    array2.push(array1[j] + array1[j + 1]);
                }
            }
            for (var v = t; v < numFC; v++) {
                contenidoString = contenidoString + '\xa0';
            }
            for (var v = 0; v < array1.length; v++) {
                console.log(array1[v]);
                if (array1[v] != 0) {
                    contenidoString = contenidoString + "|" + array1[v];
                }
            }

            var parrafo = document.createElement("p");
            var contenido = document.createTextNode(contenidoString);
            parrafo.appendChild(contenido);
            document.body.appendChild(parrafo);
            contenidoString = "";
            console.log(array2);
            array1 = [];
            for (var q = 0; q < array2.length; q++) {
                array1.push(array2[q]);

            }
            array2 = []
        }

        /*for (var n = 0; n < numFC; n++) {
            for (var i = 0; i < numFC; i++) {
                if (i == n) {
                    contenidoString = contenidoString + "1";
                } else {
                    contenidoString = contenidoString + "0";
                }
            }

        }*/

    } else {
        alert("No ingreso datos o son incorrectos");
    }

}