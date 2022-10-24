let tr = ``
let idCounter = -1
let ID = 0

const form = document.querySelector('#formulario')
const tbody = document.querySelector('tbody')
const botaoExcluir = document.querySelector('#botaoExcluir')
const botaoAtualizar = document.querySelector('#botaoAtualizar')

const objetos = () => {
  return {
    descricao: document.getElementById('descricao').value.toUpperCase(),
    categoria: document.getElementById('categoria').value.toUpperCase(),
    peso: Number(document.getElementById('peso').value),
    altura: Number(document.getElementById('altura').value),
    largura: Number(document.getElementById('largura').value),
    comprimento: Number(document.getElementById('comprimento').value),
    estoque: Number(document.getElementById('estoque').value),
    dataCadastro: document.getElementById('dataCadastro').value
  }
}

const createMsg = () => {
  ID++
  tr = `<tr class="linha" id="cod${ID}">
  <td>${ID}</td>
  <td>${objetos().descricao}</td>
  <td>${objetos().categoria}</td>
  <td>${objetos().peso}</td>
  <td>${objetos().altura}</td>
  <td>${objetos().largura}</td>
  <td>${objetos().comprimento}</td>
  <td>${objetos().estoque}</td>
  <td>${objetos().dataCadastro}</td>
</tr>`
}

const createTableRow = (tbody, tr) => {
  tbody.innerHTML += tr
}

const fnCadastrar = () => {
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
}

const fnExcluir = () => {
  const inputCodigo = prompt('Digite o codigo do produto: ')
  const codigoID = `cod${inputCodigo}`
  let excluir = document.getElementById(codigoID)
  excluir.innerHTML = ''
}

const fnAtualizar = () => {
  const inputCodigo = prompt('Digite o codigo do produto: ')
  const codigoID = `cod${inputCodigo}`
  let alterar = document.getElementById(codigoID)
  alterar.innerHTML = `<tr class="linha" id="cod${inputCodigo}">
<td>${inputCodigo}</td>
<td>${objetos().descricao}</td>
<td>${objetos().categoria}</td>
<td>${objetos().peso}</td>
<td>${objetos().altura}</td>
<td>${objetos().largura}</td>
<td>${objetos().comprimento}</td>
<td>${objetos().estoque}</td>
<td>${objetos().dataCadastro}</td>
</tr>`
}
