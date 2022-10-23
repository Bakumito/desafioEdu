let tr = ``
let idCounter = 0
//Cadastrar Produto ao pressionar botao Cadastrar
const form = document.querySelector('#formulario')
const tbody = document.querySelector('tbody')

const createTableRow = (tbody, tr) => {
  tbody.innerHTML += tr
}

const createMsg = () => {
  const rows = document.querySelectorAll('.linha')[idCounter]
  const cells = document.getElementsByTagName('td')

  const ID = Number(rows.cells[0].innerHTML) + 1
  const descricao = document.getElementById('descricaoProduto').value
  const categoria = document.getElementById('categoriaProduto').value
  const peso = Number(document.getElementById('pesoProduto').value)
  const altura = Number(document.getElementById('alturaProduto').value)
  const largura = Number(document.getElementById('larguraProduto').value)
  const comprimento = Number(
    document.getElementById('comprimentoProduto').value
  )
  const estoque = Number(document.getElementById('estoqueProduto').value)
  const dataCadastro = document.getElementById('dataCadastroProduto').value

  tr = `<tr class="linha"><td>${ID}</td><td>${descricao}</td><td>${categoria}</td><td>${peso}</td><td>${altura}</td><td>${largura}</td><td>${comprimento}</td><td>${estoque}</td><td>${dataCadastro}</td></tr>`
}

form.addEventListener('submit', e => {
  e.preventDefault()
  createMsg()
  createTableRow(tbody, tr)
  idCounter++
})
