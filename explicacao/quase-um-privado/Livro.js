const Livro = (function() {
  const module = {}

  module._id = 0

  module.getId = function() {
    return module._id
  }

  return {
    getId: module.getId
  }
})

const l1 = new Livro()

console.log(l1._id)