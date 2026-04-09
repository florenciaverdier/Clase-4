// Contadores para cada clase de pasajero
var primera = 0;
var segunda = 0;
var tercera = 0;

//para contar muertos
var primerosmuertos = 0;
var segundosmuertos = 0;
var tercerosmuertos = 0;


// Elementos del HTML donde escribiremos los resultados
var spanTotal = document.querySelector("#total");
var grafico   = document.querySelector("#grafico");

var segundografico   = document.querySelector("#segundografico");
var tercergrafico   = document.querySelector("#tercergrafico");
var cuartografico   = document.querySelector("#cuartografico");


// Leemos el archivo CSV desde internet
Papa.parse("https://raw.githubusercontent.com/datasciencedojo/datasets/refs/heads/master/titanic.csv", {
    download: true,       // descarga el archivo
    header: true,         // la primera fila son los nombres de columnas
    dynamicTyping: true,  // convierte números automáticamente

    complete: function (results) {

        // Mostramos el total de pasajeros en el HTML
        spanTotal.innerHTML = results.data.length;

        // Revisamos cada fila y contamos por clase
        results.data.forEach(function(pasajero) {
            if (pasajero.Pclass == 1) {
                primera = primera + 1;
                if(pasajero.Survived == 0){ 
                    primerosmuertos = primerosmuertos + 1;
                }
            } else if (pasajero.Pclass == 2) {
                segunda = segunda + 1;
                if(pasajero.Survived == 0){ segundosmuertos = segundosmuertos + 1;}
            } else {
                tercera = tercera + 1;
                if(pasajero.Survived == 0){ tercerosmuertos = tercerosmuertos + 1;}
            }
        });

        // Dibujamos una barra por cada clase dentro del SVG
        graficototal.innerHTML =
            // Primera clase
            `<rect x="0" y="0" width="${primera}" height="100" fill="#5F86A6"></rect>
            <text x="${primera / 2}" y="60" font-size="48" dominant-baseline="middle" text-anchor="middle" fill="#fff">${primera}</text>
            <text x="${primera / 2}" y="125" font-size="18" dominant-baseline="middle" text-anchor="middle" fill="#333">PRIMERA CLASE</text>` +

            // Segunda clase
            `<rect x="${primera}" y="0" width="${segunda}" height="100" fill="#8FB6D8"></rect>
            <text x="${primera + segunda / 2}" y="60" font-size="48" dominant-baseline="middle" text-anchor="middle" fill="#fff">${segunda}</text>
            <text x="${primera + segunda / 2}" y="125" font-size="18" dominant-baseline="middle" text-anchor="middle" fill="#333">SEGUNDA CLASE</text>` +

            // Tercera clase
            `<rect x="${primera + segunda}" y="0" width="${tercera}" height="100" fill="#C8D9E6"></rect>
            <text x="${primera + segunda + tercera / 2}" y="60" font-size="48" dominant-baseline="middle" text-anchor="middle" fill="#fff">${tercera}</text>
            <text x="${primera + segunda + tercera / 2}" y="125" font-size="18" dominant-baseline="middle" text-anchor="middle" fill="#333">TERCERA CLASE</text>`;


        // Dibujamos una barra por cada clase dentro del SVG
      primeraclase.innerHTML =
    // Sobrevivientes
    `<rect x="0" y="0" width="${((primera - primerosmuertos)/primera)*892}" height="100" fill="#5F86A6"></rect>
    <text x="${(((primera - primerosmuertos)/primera)*892) / 2}" y="60" font-size="48" dominant-baseline="middle" text-anchor="middle" fill="#fff">${primera - primerosmuertos}</text>
    <text x="${(((primera - primerosmuertos)/primera)*892) / 2}" y="125" font-size="18" dominant-baseline="middle" text-anchor="middle" fill="#333">SOBREVIVIENTES</text>` +

    // Muertos
    `<rect x="${((primera - primerosmuertos)/primera)*892}" y="0" width="${(primerosmuertos/primera)*892}" height="100" fill="#243A5E"></rect>
    <text x="${((primera - primerosmuertos)/primera)*892 + ((primerosmuertos/primera)*892)/2}" y="60" font-size="48" dominant-baseline="middle" text-anchor="middle" fill="#fff">${primerosmuertos}</text>
    <text x="${((primera - primerosmuertos)/primera)*892 + ((primerosmuertos/primera)*892)/2}" y="125" font-size="18" dominant-baseline="middle" text-anchor="middle" fill="#333">MUERTOS</text>`;


        // Dibujamos una barra por cada clase dentro del SVG
       unicornio.innerHTML =
    // Sobrevivientes
    `<rect x="0" y="0" width="${((segunda - segundosmuertos)/segunda)*892}" height="100" fill="#8FB6D8"></rect>
    <text x="${(((segunda - segundosmuertos)/segunda)*892) / 2}" y="60" font-size="48" dominant-baseline="middle" text-anchor="middle" fill="#fff">${segunda - segundosmuertos}</text>
    <text x="${(((segunda - segundosmuertos)/segunda)*892) / 2}" y="125" font-size="18" dominant-baseline="middle" text-anchor="middle" fill="#333">SOBREVIVIENTES</text>` +

    // Muertos
    `<rect x="${((segunda - segundosmuertos)/segunda)*892}" y="0" width="${(segundosmuertos/segunda)*892}" height="100" fill="#243A5E"></rect>
    <text x="${((segunda - segundosmuertos)/segunda)*892 + ((segundosmuertos/segunda)*892)/2}" y="60" font-size="48" dominant-baseline="middle" text-anchor="middle" fill="#fff">${segundosmuertos}</text>
    <text x="${((segunda - segundosmuertos)/segunda)*892 + ((segundosmuertos/segunda)*892)/2}" y="125" font-size="18" dominant-baseline="middle" text-anchor="middle" fill="#333">MUERTOS</text>`;


        // Dibujamos una barra por cada clase dentro del SVG
       salvavidas.innerHTML =
    // Sobrevivientes
    `<rect x="0" y="0" width="${((tercera - tercerosmuertos)/tercera)*892}" height="100" fill="#C8D9E6"></rect>
    <text x="${(((tercera - tercerosmuertos)/tercera)*892) / 2}" y="60" font-size="48" dominant-baseline="middle" text-anchor="middle" fill="#fff">${tercera - tercerosmuertos}</text>
    <text x="${(((tercera - tercerosmuertos)/tercera)*892) / 2}" y="125" font-size="18" dominant-baseline="middle" text-anchor="middle" fill="#333">SOBREVIVIENTES</text>` +

    // Muertos
    `<rect x="${((tercera - tercerosmuertos)/tercera)*892}" y="0" width="${(tercerosmuertos/tercera)*892}" height="100" fill="#243A5E"></rect>
    <text x="${((tercera - tercerosmuertos)/tercera)*892 + ((tercerosmuertos/tercera)*892)/2}" y="60" font-size="48" dominant-baseline="middle" text-anchor="middle" fill="#fff">${tercerosmuertos}</text>
    <text x="${((tercera - tercerosmuertos)/tercera)*892 + ((tercerosmuertos/tercera)*892)/2}" y="125" font-size="18" dominant-baseline="middle" text-anchor="middle" fill="#333">MUERTOS</text>`;

    } // fin de complete

}); // fin de Papa.parse
