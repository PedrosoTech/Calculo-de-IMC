document.getElementById("imcForm").addEventListener("submit", function (event) {
    event.preventDefault();
  
    const peso = parseFloat(document.getElementById("inputPeso").value);
    const altura = parseFloat(document.getElementById("inputAltura").value) / 100;
    const idade = parseInt(document.getElementById("inputIdade").value);
    
    if (isNaN(peso) || isNaN(altura) || isNaN(idade)) {
      alert("Por favor, preencha todos os campos corretamente.");
      return;
    }
  
    // Calcula o IMC
    const imc = (peso / (altura * altura)).toFixed(2);
  
    // Calcula o peso ideal mínimo e máximo
    const pesoIdealMinimo = (18.5 * altura * altura).toFixed(2);
    const pesoIdealMaximo = (24.9 * altura * altura).toFixed(2);
  
    // Mensagem de alerta sobre o peso
    let alerta = "";
    if (imc < 18.5) {
      alerta = "Você está abaixo do peso ideal.";
    } else if (imc >= 18.5 && imc < 24.9) {
      alerta = "Seu peso está ideal!";
    } else if (imc >= 25 && imc < 29.9) {
      alerta = "Você está com sobrepeso.";
    } else {
      alerta = "Você está com obesidade.";
    }
  
    // Exibe os resultados no HTML
    document.getElementById("resultado").innerText = `Seu IMC é: ${imc}`;
    document.getElementById("alerta").innerText = `${alerta} Seu peso ideal está entre ${pesoIdealMinimo} kg e ${pesoIdealMaximo} kg.`;
  });
  