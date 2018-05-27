
// Prompt de prgunta edad
const age = prompt("¿Cúal es tu edad?");

//Condiciones para operar
if (age % 1 !== 0 || age ===  "0" || age === NaN || age === null) {
    alert("ERROR : Ingresa tu edad en números enteros,sin letras, ni decimales");

    // Entre 1 y 3 sera TODDLER
   
    
} else if (age >= 1 && age <= 3) {
    alert("Clasificación: Toddler/Niñita(o)");

    //ENTRE 3 Y 5 sera PRESCHOOLER
} else if (age >= 3 && age <= 5) {
    alert("Clasificación: Preschooler/Preescolar");
    
    
    //ENTRE 3 Y 5 sera GRADESCHOOLER
} else if (age >= 5 && age <= 12) {
        alert("Clasificación: Gradeschooler/Infante");
        
    //ENTRE 3 Y 5 sera TEENAGER
} else if (age >= 12 && age <= 18) {
        alert("Clasificación: Teenager/Adolescente");
        
    //ENTRE 3 Y 5 sera YOUNG ADULT
} else if (age >= 18 && age <= 21) {
        alert("Clasificación: Young adult/Adulto Joven");
        
    //ENTRE 3 Y 5 sera ADULT
} else if (age > 21) {
        alert("Clasificación: Adult/Adulto");
}


    
   
   //document.write("Tu edad es "+ age );






//convirtiendo edad en etapas



//function Function (){
 ////   var user = document.getElementById("age").value;
  //  var p = document.getElementById("age&estage");
   // p.innerHTML =   user + "  escribe codifica y decodifica... ahora nadie sabra tus secretos,El cifrado César mueve cada letra un determinado número de espacios en el alfabeto. En este ejemplo se usa un desplazamiento de tres espacios, así que una B en el texto original se convierte en una E en el texto codificado. ";
//}

