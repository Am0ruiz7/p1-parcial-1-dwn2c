/*Estructura disco
Nombre- autor- codigo- pistas[]*/
let disco = new Disco();
//variables a utilizar
let nombreDisco;
let autorDisco;
let nombreTema;
let codigoDisco;
let temas = [];
//Contadores y acumuladores
let duracionTema ;
let contadorTema = 0;
let contadorDuracion =0;
let acumuladorDuracion = 0;

//validacion String y number
function validarString(msg){
    let str;
    //pido string que no sea numero, sin espacios
    do { str =prompt(msg).trim();
     //valido el string no sea vacio
    } while (!isNaN(str) || str === "");
    return str;
    }
function validarCodigo(msg){
let num;
//pido numero no sea texto y validacion limites entre 1 y 999
do { num = parseInt(prompt(msg));
    if(num < 1 || num > 999)
        {alert("Ingrese numero entre 1 y 999")};}   
 while (isNaN(num));

return num;
}
//Valido sea un string y sumo contador
function validarTema(msg){
    let str;
    //pido string que no sea numero, sin espacios
    do { str =prompt(msg).trim();
        contadorTema++;       
        //valido el string no sea vacio
    } while (!isNaN(str) || str === "");
    return str;
    }
//Valido sea numero y validacion limites entre 0 y 7200
function validarDuracion(msg){
    let num;
    //pido numero no sea texto 
    do { num = parseInt(prompt(msg));
        contadorDuracion++;
        acumuladorDuracion += num;
        if (num < 0 && num > 7200){
            alert("La duracion debe estar entre 0 y 7200 segundos")
        }  else if(num > 180){alert("Duracion mayor a 180 seg.")}
         } while (isNaN(num));
    //retorno numero
    return num;
    }

/*
function validarRepetir(codigo, codigoDisco){

    //codigo = codigoDisco[i];
    for(let i =0; i< codigoDisco.length; i++){
        if(i == 0){ codigo === codigoDisco[i]; }
        else if( codigo === codigoDisco[i])
        {alert("Es dato debe ser unico e irrepetible");}
    }
    }
*/




//Pido datos al boton onclick
function cargarDisco() {
 //Pido nombre del disco
    nombreDisco = validarString("Ingrese nombre del disco");
    //carga el dato clase objetos Disco
    disco.nombreDisco = nombreDisco;
    
    //pido nombre autor /banda
    autorDisco = validarString("Ingrese el nombre del Autor o Banda");
    //ingreso dato en objeto disco
    disco.autorDisco = autorDisco;

      //Pido Codigo  sea unico
    codigoDisco = validarCodigo("Ingrese codigo numerico Unico");
    //let nuevoCodigo;
    disco.codigoDisco= codigoDisco;
    // Pedimos datos del Array Temas   
    do{
    nombreTema = validarTema("Ingrese Temas del disco");
    //Pedimos la duracion tema
    duracionTema = validarDuracion("Ingrese duracion del tema en segundos");
    datosTema = new Temas(nombreTema, duracionTema);
    disco.agregarTema(datosTema);
    }while (confirm("desea ingresar mas Pistas") ) 

    
  }
//habilito funcion mostrar en Discos
function mostrar(){
  //Armar cadena HTML
document.querySelector("div").append(disco.mostrar());


}