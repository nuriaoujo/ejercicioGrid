function calcularGrid() {
    var fila = document.getElementById("fila").value;
    var columna = document.getElementById("columna").value;

    let result = fila * columna;
    console.log(result);

    dimensionFila();
    dimensionColumna();
    crearGrid(fila, columna);
}

function dimensionFila() {
    var fila = document.getElementById("fila").value;

    let alto = 400/fila;
    console.log("El tamaño de la fila es " + alto);

    var elementoAlto = document.getElementById("alto");
    elementoAlto.textContent = "Hay un total de " + fila + " filas, con un alto de " + alto + "px";
}

function dimensionColumna() {
    var columna = document.getElementById("columna").value;

    let ancho = 400/columna;
    console.log("El tamaño de la columna es " + ancho);

    var elementoAncho = document.getElementById("ancho");
    elementoAncho.textContent = "Hay un total de " + columna + " columnas, con un ancho de " + ancho + "px";
}

function crearGrid(fila, columna) {
    var container = document.getElementById("marco");
    container.innerHTML = "";

    container.style.gridTemplateRows = `repeat(${fila}, 1fr)`;
    container.style.gridTemplateColumns = `repeat(${columna}, 1fr)`;

    for (let i = 0; i < fila * columna; i++) {
        var nuevoDiv = document.createElement("div");
        nuevoDiv.style.border = "1px solid black";
        container.appendChild(nuevoDiv);
    }
}