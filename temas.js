// declara clase temas y propiedades
class Temas{
    constructor(nombreTema,duracionTema){
        this.nombreTema = nombreTema;
        this.duracionTema = duracionTema;
            
    }  
 //Continuacion funcion mostrar cadena en HTML  
    mostrar(){
        //creo div dentro section
    const div = document.createElement("div");
    
    const pNombreTema = document.createElement("p");
    pNombreTema.innerText = `Nombre: ${this.nombreTema}`;
    const pDuracionTema = document.createElement("p");
    pDuracionTema.innerText =`Duración: `;
   
    //crear condicion Span para marcar 
    const span = document.createElement("span");
    span.innerText = this.duracionTema;
    //condicion duracion > 180 remarcar rojo
    if(this.duracionTema > 180){
        span.setAttribute("class","rojo")
    }
    pDuracionTema.append(span);
    
    div.append(pNombreTema,pDuracionTema);
      

    return div;

}}