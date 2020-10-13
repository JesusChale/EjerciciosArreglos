var arrayNombresVar = [];
var numFC = 0;
//Obtener valor de filas y columnas
function obtenerNumFC() {
    numFC = document.getElementById("nFilCol").value;

    var arrayNombresDiv = [];
    var numVar = 0;
    var buttonId = document.getElementById("matriz");
    if (numFC > 2) {
        for (var j = 0; j < numFC * numFC; j++) {

            arrayNombresVar.push("var" + j);
            if ((j % numFC) == 0) {
                arrayNombresDiv.push("divs" + (j / numFC));

                arrayNombresDiv[j / numFC] = document.createElement("div");
                arrayNombresDiv[j / numFC].setAttribute("class", "inputs")
                document.body.insertBefore(arrayNombresDiv[j / numFC], buttonId);
            }
        }
        console.log(arrayNombresVar);
        for (var n = 0; n < numFC; n++) {
            for (var i = 0; i < numFC; i++) {
                arrayNombresVar[numVar] = document.createElement("input");
                arrayNombresVar[numVar].setAttribute("type", "number");
                arrayNombresVar[numVar].setAttribute("value", 0);

                var varArrayNombre = arrayNombresDiv[n];
                varArrayNombre.appendChild(arrayNombresVar[numVar]);
                numVar++;

            }

        }
        buttonId.disabled = false;
    } else {
        alert("Matriz demasiado pequeña\nMinimo 3");
    }

}

function obtenerMatriz() {
    var arrayInverted = [];
    var inputsLlenos = true;
    var q = 0;
    var lineaMatriz = numFC - 1;
    var ignorarVar = 0;
    var triSup = true;
    for (var k = 0; k < arrayNombresVar.length; k++) {
        var value = arrayNombresVar[k].value;
        if (!value) {
            inputsLlenos = false;
        }
    }

    if (inputsLlenos == true) {
        for (var f = arrayNombresVar.length - 1; f >= 0; f--) {
            arrayInverted.push(arrayNombresVar[f].value);
        }
        for (var t = 0; t < arrayNombresVar.length; t++) {
            console.log("array:" + arrayNombresVar[t].value);
        }
        for (var t = 0; t < arrayNombresVar.length; t++) {
            console.log("arrayInvertido:" + arrayInverted[t]);
        }

        for (var l = 0; l < numFC; l++) {

            if (l > 0) {
                ignorarVar = (l * numFC);
                for (var m = 0; m < numFC; m++) {
                    //m<l
                    if (m < l) {
                        ignorarVar = (l * numFC);
                        ignorarVar = ignorarVar + m;
                    }
                    if (q != ignorarVar) {
                        if (arrayInverted[q] == 0) {
                            triSup = false;
                        }
                    }
                    q++;
                }
            } else {
                for (var t = 0; t < numFC; t++) {
                    if (arrayInverted[q] == 0) {
                        triSup = false;
                    }
                    q++;
                }
            }
        }
        console.log(triSup);
        if (triSup == true) {
            alert("Matriz es Triangular Inferior");
        } else {
            alert("Matriz No es Triangular Inferior");
        }


    } else {
        alert("Matriz incompleta\nSe debe llenar por completo")
    }
}