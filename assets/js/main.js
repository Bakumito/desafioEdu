let tr = ``
let idCounter = -1
let ID = 0
//Cadastrar Produto ao pressionar botao Cadastrar
const form = document.querySelector('#formulario')
const botaoExcluir = document.querySelector('#botaoExcluir')
const tbody = document.querySelector('tbody')

const createMsg = () => {
  ID++
  const descricao = document.getElementById('descricao').value.toUpperCase()
  const categoria = document.getElementById('categoria').value.toUpperCase()
  const peso = Number(document.getElementById('peso').value)
  const altura = Number(document.getElementById('altura').value)
  const largura = Number(document.getElementById('largura').value)
  const comprimento = Number(document.getElementById('comprimento').value)
  const estoque = Number(document.getElementById('estoque').value)
  const dataCadastro = document.getElementById('dataCadastro').value

  tr = `<tr class="linha" id="cod${ID}"><td>${ID}</td><td>${descricao}</td><td>${categoria}</td><td>${peso}</td><td>${altura}</td><td>${largura}</td><td>${comprimento}</td><td>${estoque}</td><td>${dataCadastro}</td></tr>`
}

const createTableRow = (tbody, tr) => {
  tbody.innerHTML += tr
}

form.addEventListener('submit', e => {
  e.preventDefault()
  if (
    confirm(`Deseja mesmo cadastrar o produto?
    Descricao: ${descricao.value}
    Categoria: ${categoria.value}
    Peso: ${peso.value}
    Altura: ${altura.value}
    Largura: ${largura.value}
    Comprimento: ${comprimento.value}
    Estoque: ${estoque.value}
    Data do Cadastro: ${dataCadastro.value}
    `)
  ) {
    createMsg()
    createTableRow(tbody, tr)
    idCounter++
  }
})

botaoExcluir.addEventListener('click', e => {
  e.preventDefault()
  const inputCodigo = prompt('Digite o codigo do produto: ')
  const codigoID = `cod${inputCodigo}`
  let produto = document.getElementById(codigoID)
  produto.innerHTML = ''
})
