function convertirARomano() {
  const romano = document.getElementById('romano').value.toUpperCase();
  const valores = {I:1, V:5, X:10, L:50, C:100, D:500, M:1000};
  let total = 0;

  for (let i = 0; i < romano.length; i++) {
    const actual = valores[romano[i]];
    const siguiente = valores[romano[i + 1]];

    if (!actual) {
      document.getElementById('resultadoRomano').textContent = '❌ Número romano inválido.';
      return;
    }
    total += (siguiente > actual) ? -actual : actual;
  }

  document.getElementById('resultadoRomano').textContent = `✅ Resultado: ${total}`;
}

function convertirAComunes() {
  const numero = parseInt(document.getElementById('numero').value);
  if (isNaN(numero) || numero < 1 || numero > 3999) {
    document.getElementById('resultadoNumero').textContent = '❌ Ingresá un número entre 1 y 3999.';
    return;
  }

  const valores = [
    {valor: 1000, simbolo: 'M'},
    {valor: 900, simbolo: 'CM'},
    {valor: 500, simbolo: 'D'},
    {valor: 400, simbolo: 'CD'},
    {valor: 100, simbolo: 'C'},
    {valor: 90, simbolo: 'XC'},
    {valor: 50, simbolo: 'L'},
    {valor: 40, simbolo: 'XL'},
    {valor: 10, simbolo: 'X'},
    {valor: 9, simbolo: 'IX'},
    {valor: 5, simbolo: 'V'},
    {valor: 4, simbolo: 'IV'},
    {valor: 1, simbolo: 'I'}
  ];

  let resultado = '';
  let n = numero;
  for (let i = 0; i < valores.length; i++) {
    while (n >= valores[i].valor) {
      resultado += valores[i].simbolo;
      n -= valores[i].valor;
    }
  }
  document.getElementById('resultadoNumero').textContent = `✅ Resultado: ${resultado}`;
}