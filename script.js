document.addEventListener('DOMContentLoaded', function() {
  // Gera as contas e imprime em seus lugares
  const generate = () => {
    const valor1 = document.querySelector('#valor1')
    const valor2 = document.querySelector('#valor2')
    const signal = document.querySelector('#signal')
    let v1 = parseInt(Math.random() * 100) + 1
    let v2 = parseInt(Math.random() * 100) + 1
    let sig = (parseInt(Math.random() * 2) ? '+' : '-')
    
    signal.innerHTML = sig

    valor1.value = v1
    valor2.value = v2
  }
  
  // Realiza o cálcula e mostra o resultado
  document.querySelector('#calculate').addEventListener('click', function() {
    const valor1 = parseInt(document.querySelector('#valor1').value)
    const valor2 = parseInt(document.querySelector('#valor2').value)
    const signal = document.querySelector('#signal').innerHTML
    
    if (valor1 && valor2) {
      if (signal == '+')
        document.querySelector('#result').value = valor1 + valor2
        else if (signal == '-')
        document.querySelector('#result').value = valor1 - valor2
      }
  })
  
  document.querySelector('#generate').addEventListener('click', function() {
    generate()
  })
  
  generate()
})