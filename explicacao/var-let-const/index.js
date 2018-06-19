function imprimeNome() {
  const i = {
    valor: 0,
    coiso: 'ahuhs'
  }

  while(i.valor < 2) {
    let nome = 'Luna'
    console.log('Dentro', nome)

    console.log('antes do delete objeto', i)
    delete(i.valor)
    i.coiso = undefined
    typeof i.valor
    typeof(i.valor)
    console.log('objeto', i)
    i.valor = i.valor + 1
  }
  
  
}

imprimeNome()

// console.log('Fora', nome)