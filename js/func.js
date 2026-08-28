export function calcularIMC(peso, altura) {
  return peso / (altura * altura);
}

export function classificarIMC(imc) {
  if (imc < 18.5) {
    return "Abaixo do peso";
  } else if (imc < 25) {
    return "Peso normal";
  } else if (imc < 30) {
    return "Sobrepeso";
  } else {
    return "Obesidade";
  }
}

