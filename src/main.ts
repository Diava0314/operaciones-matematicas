let operaciones: string | null;
let a: number;
let b: number;


operaciones = prompt("Seleciones con que operando desea trabajar: suma, resta, multiplicacion, division, expo");
a = Number(prompt("asigne el primer valor"));
b = Number(prompt("asigene el segundo valor"));
switch (operaciones) {
  case "suma":

  
    alert("su resultados es:"+ (a+b));
    break;
    case "resta":
   
    alert("su resultados es:"+ (a*b));
    break;
    case "multiplicacion":

    alert("su resultados es:"+ (a/b) );
    break;
    case "division":

    console.log("su resultados es:"+ Math.pow(a, b));
    break;
    case "expo":

    
    break;

  
  default:
    alert("estas equivocado");
    break;
}
