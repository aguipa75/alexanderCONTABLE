console.log("CUANTO ES 80 MAS 84");
let nomberOne = 80;
let nomberTwo = 84;


const edad = 30;
let nombre = "Alexander ";
let segundonombre = "Rafael ";
let primerapellido = "Aguirre ";
let segundoapellido = "Payares ";

/* ESTO RESUELVE EL RESULTADO DE OPERTACIO*/

let resul = nomberOne + nomberTwo
console.log(resul);

console.log("SI LO SUMO EL RESULTADO 30 DARIA");


let resulta2 = resul + edad
console.log(resulta2);

let resultadoname = nombre + segundonombre + primerapellido + segundoapellido
console.log(resultadoname);

/* PRACTICA DE VARIABLE SUMADAS O DE STRIN CON ESPACIO*/

let nombre2= "Ana";
let segundonombre2 = "Milena";
let primerapellido2 = "Aguilar";
let segundoapellido2 = "Gamarra";


let nameEpacio = nombre2 + " " + segundonombre2 + " " + primerapellido2 + " " + segundoapellido2
console.log(nameEpacio);

/* DIFERENCIAS ENTRE VARIABLE .................*/
console.log("Ema es mayor que yiyi");

let ema = 22
let yiyi = 18

let compara = ema > yiyi
console.log(compara);

console.log("YIYI es mayor que EMANUEL en edades..........");

         let compara2 = ema < yiyi
         console.log(compara2);

console.log("MIS HIJOS YILEIDYS Y EMANUEL SON DEL MISMO SEXO..........");

let compara3 = ema == yiyi
console.log(compara3);

console.log("MIS HIJOS YILEIDYS Y EMANUEL SON DE DIFERENTES PENSAMIENTOS..........");

let compara4 = ema != yiyi
console.log(compara4);

/* CONDICIONES DE PROGRAMACION IF ELSE QUE EL SI SINO EN PROGRAMACION.............*/

console.log("LA RESPUESTA QUE SI EMA ES MAYOR QUE YYIYI SERA CIERTA O FALASA ");

if (compara === false) { console.log("(V) LA CONDICION ES VERDADERA por que EMA no es MAYOR que YIYI condicion de if");
} else { console.log("(F) LA CONDICION ES falsa por que EMA no es MAYOR que YIYI.... yiyi es MAYOR que EMANUEL condicion de if");
}

/*CONDICION DE IF Y IF SI ES SI

if (compara === false) { console.log("(V) LA CONDICION ES VERDADERA por que EMA no es MAYOR que YIYI condicion de if");

}

if (compara === true) { console.log("(F) LA CONDICION ES falsa por que EMA no es MAYOR que YIYI.... yiyi es MAYOR que EMANUEL condicion de if");

}
*/

let puntaje = 32;
if (puntaje > 30){console.log("tienes que mejorar");} 
else if (puntaje > 15) {console.log("ESTAS MEJORANDO----- CONTINUA PRACTICANDO");}
     else {console.log("ERES MUY NOVATO............")}

    console.log(puntaje);

    /* UTILIZACION DE SUICHES SWITCH Y CASE Y DEFAULT*/
    

console.log("DIME QUE CLASE DE TARJETA TIENES SI ES Debito o Credito para responderte");

let tarjeta = "credito111";
   
     switch(tarjeta){
         case "credito":
         console.log("Es tarjeta credito//////!!!!!!!!!!////////!!!!///");
     
         break;
         case "debito":
            console.log("Es tarjeta DEBITO/////////////////////");
            break;
        default:
            console.log("NO TIENES NINGUN TIPO DE TARJETA!!!!!!!!!!!!!!!!!!!!");    
}

    /* UTILIZACION DE LA BARIABLE while REALIZANDO UN CONTEO HASTA 10*/

    let contar = 0;
    while (contar < 10) {
        console.log(contar);
        contar ++                             
    } /* se podria tambien colocar de esta manera
            contar = contar + 1; */

       /* ITEM DE PARA FOR -------------*/

       console.log("que posicion tiene el nombre en la cadena de 5 nobres");    
       
       let nombrePersonas = ["jose", "alex", "maria", "ana", "yiyi"];
       console.log(nombrePersonas[3])


       /* ITEM DE PARA FOR ----- utilizando el comando LENGTH que mide la longitud de un item o cadena de for o para*/

       console.log("cuantos item tiene la cadena de for --CUANTOS NOMBRES HAY");    
       
       let nombrePersonas2 = ["jose", "alex", "maria", "ana", "yiyi"];
       console.log(nombrePersonas2.length)

       /* UTILIZACION DEL PARA (FOR) CON UNA VARIABLE --------333333##############-----*/

       console.log("CUALES SON LOS NOMBRES QUE ESTAN EN EL ITEM O CADENA DEACUERDO A SU LONGITUD length");    


       let nombrePersonas4 = ["jose", "alex", "maria", "ana", "yiyi"];

for(let i = 0; i < nombrePersonas4.length; i++){
    console.log(nombrePersonas4[i]);

}



