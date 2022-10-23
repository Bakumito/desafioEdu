let tr = ``
let idCounter = 0
//Cadastrar Produto ao pressionar botao Cadastrar
const botaoCadastro = document.querySelector('#botaoCadastro')
const tbody = document.querySelector('tbody')

const createTableRow = (tbody, tr) => {
  tbody.innerHTML += tr
}

const createMsg = () => {
  const rows = document.querySelectorAll('.linha')[idCounter]
  const cells = document.getElementsByTagName('td')

  const ID = Number(rows.cells[0].innerHTML) + 1

  tr = `<tr class="linha"><td>${ID}</td><td>${2}</td><td>${3}</td><td>${4}</td><td>${5}</td><td>${6}</td><td>${7}</td><td>${8}</td><td>${9}</td></tr>`
}

botaoCadastro.addEventListener('click', e => {
  e.preventDefault()
  createMsg()
  createTableRow(tbody, tr)
  idCounter++
})
