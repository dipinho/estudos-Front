function calcula_imc(){
    var imcForm = document.getElementById("imcForm");

    var peso = +imcForm.peso.value; 
    var metros = +imcForm.metros.value; 
    var cent = +imcForm.cent.value; 
    
    var altura = (metros*100 + cent)/100;
    var imc = peso / (altura*altura);

    imcForm.imc.value = imc.toFixed(2); // determina 2 casas decimais após a virgula

    if (imc <= 20){
        imcForm.resultado.value = toString=("Abaixo do Peso");
    }
    
    else if (imc > 20 && imc <= 25){
        imcForm.resultado.value = toString=("Peso ideal");
    }
    
    else if (imc > 25 && imc <= 30){
        imcForm.resultado.value = toString=("Sobrepeso");
    }
       
    else if (imc > 30 && imc <= 35){
        imcForm.resultado.value = toString=("Obesidade Moderada");
    }
    
    else if (imc > 35 && imc <= 40){
        imcForm.resultado.value = toString=("Obesidade Severa");
    }
    
    else if (imc > 40 && imc <= 50){
        imcForm.resultado.value = toString=("Obesidade Mórbida");
    }

    else{
        imcForm.resultado.value = toString=("Super Obesidade");
    }
};