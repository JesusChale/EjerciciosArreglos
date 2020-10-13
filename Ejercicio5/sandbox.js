var arrayNombresVar1 = [];
var arrayNombresVar2 = [];
var numFC = 0;
//Obtener valor de filas y columnas
function obtenerNumFC() {
    //numFC
    numFil1 = document.getElementById("nFil1").value;
    numCol1 = document.getElementById("nCol1").value;
    numFil2 = document.getElementById("nFil2").value;
    numCol2 = document.getElementById("nCol2").value;

    var arrayNombresDiv1 = [];
    var numVar1 = 0;
    var arrayNombresDiv2 = [];
    var numVar2 = 0;
    var buttonId = document.getElementById("matriz");
    if (numFil1 > 1 && numCol1 > 1 && numFil2 > 1 && numCol2 > 1 && numCol1 == numFil2) {
        //Matriz1
        //Obtener inputs en Array
        for (var j = 0; j < numFil1 * numCol1; j++) {
            arrayNombresVar1.push("var" + j);
        }
        //Obtener divs
        for (var j = 0; j < numFil1; j++) {
            arrayNombresDiv1.push("divs" + j);
            arrayNombresDiv1[j] = document.createElement("div");
            arrayNombresDiv1[j].setAttribute("class", "inputs")
            document.body.insertBefore(arrayNombresDiv1[j], document.getElementById("matriz2H4"));
        }
        console.log(arrayNombresVar1);
        //Agregarlos los inputs al div
        for (var n = 0; n < numFil1; n++) {
            for (var i = 0; i < numCol1; i++) {
                arrayNombresVar1[numVar1] = document.createElement("input");
                arrayNombresVar1[numVar1].setAttribute("type", "number");
                arrayNombresVar1[numVar1].setAttribute("value", 0);

                var varArrayNombre = arrayNombresDiv1[n];
                varArrayNombre.appendChild(arrayNombresVar1[numVar1]);
                numVar1++;
            }
        }
        //Matriz2
        //Obtener inputs en Array
        for (var j = 0; j < numFil2 * numCol2; j++) {
            arrayNombresVar2.push("var" + j);
        }
        //Obtener divs
        for (var j = 0; j < numFil2; j++) {
            arrayNombresDiv2.push("divs" + j);
            arrayNombresDiv2[j] = document.createElement("div");
            arrayNombresDiv2[j].setAttribute("class", "inputs")
            document.body.insertBefore(arrayNombresDiv2[j], buttonId);
        }
        console.log(arrayNombresVar2);
        //Agregarlos los inputs al div
        for (var n = 0; n < numFil2; n++) {
            for (var i = 0; i < numCol2; i++) {
                arrayNombresVar2[numVar2] = document.createElement("input");
                arrayNombresVar2[numVar2].setAttribute("type", "number");
                arrayNombresVar2[numVar2].setAttribute("value", 0);

                var varArrayNombre = arrayNombresDiv2[n];
                varArrayNombre.appendChild(arrayNombresVar2[numVar2]);
                numVar2++;
            }
        }

        buttonId.disabled = false;
    } else {
        alert("Valores incorrectos Filas de una matriz deben concordar con Columnas de la segunda\nMinimo 2");
    }

}

function mulMatriz() {
    var arrayMult = [];
    var contenidoNum = [];
    var contenidoString = "";
    var numFilCorrecta = 0;
    var contVar1 = 0;
    /*for (var j = 0; j < arrayNombresVar1.length; j++) {
        console.log(arrayNombresVar1[j].value);
    }*/
    for (var g = 0; g < numCol2; g++) {
        numFilCorrecta = g;
        for (var f = 0; f < arrayNombresVar2.length; f++) {
            if (f == numFilCorrecta) {
                arrayMult.push(arrayNombresVar2[f].value);
                console.log(arrayNombresVar2[f].value);
                numFilCorrecta = numFilCorrecta + parseInt(numCol2);
                console.log("numFilCorrectas: " + numFilCorrecta);

            }
        }
        console.log("Mult:" + arrayMult);
        for (var l = 0; l < numCol2; l++) {
            for (var h = 0; h < numFil2; h++) {
                var numString = arrayMult[h] * arrayNombresVar1[contVar1].value;
                contenidoNum = contenidoNum + numString;
                contVar1++;
            }
            contenidoString = contenidoString + (contenidoNum.toString()) + "|";
            var parrafo = document.createElement("p");
            var contenido = document.createTextNode(contenidoString);
            parrafo.appendChild(contenido);
            document.body.appendChild(parrafo);
            contenidoString = "";
            arrayMult = [];
        }


    }

}

/*function obtenerMatriz() {
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
                        if (arrayNombresVar[q].value == 0) {
                            triSup = false;
                        }
                    }
                    q++;
                }
            } else {
                for (var t = 0; t < numFC; t++) {
                    if (arrayNombresVar[q].value == 0) {
                        triSup = false;
                    }
                    q++;
                }
            }
        }
        console.log(triSup);
        if (triSup == true) {
            alert("Matriz es Triangular Superior");
        } else {
            alert("Matriz No es Triangular Superior");
        }


    } else {
        alert("Matriz incompleta\nSe debe llenar por completo")
    }
}*/