const btn = document.querySelector('.btn')

btn.addEventListener('click', event => console.log(btn.textContent))
btn.addEventListener('click', (event) => console.log(btn.textContent))
btn.addEventListener('click', (event) => {
  console.log(btn.textContent)
})

const imprime = () => 'Oi'

console.log(`valor ${imprime()}`)