
var calc = () => {  

var peso = document.getElementById("in1").value; 

var altura = document.getElementById("in2").value; 

var imc = peso / (altura * altura); 

var classificacao; 

if (imc <= 18.5) { 

    classificacao = "Desnutrição"; 
    
} else if  (imc > 18.5 && imc <=24.9) { 
    
    classificacao = "Valor ideal";

} else if (imc>=25 && imc <= 29.9) { 

    classificacao = "Sobrepeso"; 

} else if (imc>=30 && imc <= 34.9) { 

    classificacao = "Obesidade Grau I";
} else if (imc>=35 && imc<=39.9) { 
    classificacao = "Obesidade Grau II"
} else { 
    classificacao = "Obesidade Grau III"
}

document.getElementById("numcalc").innerHTML = classificacao + " - " + imc.toFixed(2)

}