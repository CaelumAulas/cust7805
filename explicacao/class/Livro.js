class Livro {
  constructor(id=0,nome='') {
    this._id = id
    this._nome = nome
  }

  get id() {
    return this._id
  }
  
  set id(id) {
    this._id = id
  }
}

const l1 = new Livro(10, 'Node')

l1.id = 20


console.log(l1.id)
