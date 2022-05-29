var cadena;
var tener = RegExp("(TIENE|TIENES|TENES|TENGO|TENÉS)");
var que = RegExp("(QUE|COMO|PORQUE|POR QUE|PARA QUE|DONDE|DE DONDE)");
var es_hacer = RegExp("(ES|HACER|ESO|HAGO|HICIERON|HARE)");
//var edad = /AÑOS/;
function evaluarPregunta(){
    cadena = document.getElementsByName("txtPregunta")[0].value;
    cadena = cadena.toUpperCase();
    document.getElementById("resultado1").innerHTML= tener.test(cadena);
    //document.getElementById("resultado2").innerHTML= edad.test(cadena);
    if(tener.test(cadena)==true/*&&edad.test(cadena)==true*/){
        cod = 4
        alert (cod);
    }else{
        cod =0;
    }
    responder();
}
function responder(){
    switch (cod){
        case 4:
            mensaje = "Tengo 24 años"
            break;
        default:
        mensaje = "Sin resultados"
    }
    document.getElementById("respuesta").innerHTML=mensaje;
}
