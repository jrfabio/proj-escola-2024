function calcularIMC() {
    var altura = parseFloat(document.getElementById('altura').value);
    var peso = parseFloat(document.getElementById('peso').value);
    
    if (altura && peso) {
        var imc = peso / (altura * altura);
        var resultado = document.getElementById('resultado');
        resultado.innerHTML = 'Seu IMC é: ' + imc.toFixed(2);
    } else {
        alert('Por favor, insira sua altura e peso.');
    }
}

function limparCampos() {
    document.getElementById('altura').value = '';
    document.getElementById('peso').value = '';
    document.getElementById('resultado').innerHTML = '';
}
