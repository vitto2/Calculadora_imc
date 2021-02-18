

var calc = () => {  

var peso = document.getElementById("in1").value; 
peso = parseFloat(peso.replace(",","."));


var altura = document.getElementById("in2").value; 
altura = parseFloat(altura.replace(",","."));

var imc = peso / (altura * altura); 
imc = parseFloat(imc);

var classificacao; 

if (imc <= 18.5) { 

    classificacao = "Desnutrição"; 
    
} else if  (imc > 18.5 && imc <=24.9) { 
    
    classificacao = "Peso ideal";

} else if (imc>=25.00 && imc <= 29.9) { 

    classificacao = "Sobrepeso"; 

} else if (imc>=30.00 && imc <= 34.9) { 

    classificacao = "Obesidade Grau I";

} else if (imc>=35.00 && imc<=39.9) {

    classificacao = "Obesidade Grau II"

} else if(imc>=40.00) { 
    classificacao = "Obesidade Grau III"
}

document.getElementById("numcalc").innerHTML = imc.toFixed(2) + " -\n"+ classificacao

}
