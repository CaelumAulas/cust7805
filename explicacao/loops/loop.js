['João', 'Bruno'].forEach(element => console.log('Nome', element))[{ 
  nome: 'Luna', sexo: 'f'
}, {
  nome: 'Marco', sexo: 'm'
}, { 
  nome: 'Jovis', sexo: 'f'
}
, {
  nome: 'Henri', sexo: 'm'
}].filter((pessoa) => {
  if (pessoa.sexo === 'f') {
    return pessoa
  }
}).forEach(element => console.log('Nome', element))