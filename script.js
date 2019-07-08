document.addEventListener('DOMContentLoaded', function() {
  // Teclas de atalho
  document.addEventListener('keypress', e => {
    if (e.keyCode === 49) // Tecla '1'
      generate()
    else if (e.keyCode === 50) // Tecla '2'
      calculate()
  })

  // Gera as contas e imprime em seus lugares
  const generate = () => {
    const valor1 = document.querySelector('#valor1')
    const valor2 = document.querySelector('#valor2')
    const signal = document.querySelector('#signal')
    const v1 = parseInt(Math.random() * 100) + 1
    const v2 = parseInt(Math.random() * 100) + 1
    const sig = (parseInt(Math.random() * 2) ? '+' : '-') // Se for 1, retorna '+', senão '-'
    
    signal.innerHTML = sig
    document.querySelector('#result').value = ''
    valor1.value = v1
    valor2.value = v2
  }
  
  // Realiza o cálcula e mostra o resultado
  const calculate = () => {
    const valor1 = parseInt(document.querySelector('#valor1').value)
    const valor2 = parseInt(document.querySelector('#valor2').value)
    const signal = document.querySelector('#signal').innerHTML
    
    if (valor1 && valor2) {
      if (signal == '+')
        document.querySelector('#result').value = valor1 + valor2
      else if (signal == '-') {
        let v = valor1 - valor2
        v = (v < 0) ? v * -1 : v // Caso 'v' seja negativo, o sinal do valor é invertido

        document.querySelector('#result').value = v
      }
    }
  }
  
  document.querySelector('#calculate').addEventListener('click', function() {
    calculate()
  })
  
  document.querySelector('#generate').addEventListener('click', function() {
    generate()
  })
  
  generate()
})