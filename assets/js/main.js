let tr = ``
let ID = 0
const tbody = document.querySelector('tbody')
const janelaPesquisa = document.getElementById('janelaPesquisa')
const inputPesquisa = document.getElementById('inputPesquisa')
const botaoPesquisa = document.getElementById('botaoPesquisa')
const span = document.getElementsByClassName('close')[0]
const botaoReiniciar = document.getElementById('botaoReiniciar')
const botaoTestes = document.getElementById('botaoTestes')

const produto = () => {
  return {
    descricao: document.getElementById('descricao').value.toUpperCase().trim(),
    categoria: document.getElementById('categoria').value.toUpperCase().trim(),
    peso: Number(document.getElementById('peso').value),
    altura: Number(document.getElementById('altura').value),
    largura: Number(document.getElementById('largura').value),
    comprimento: Number(document.getElementById('comprimento').value),
    estoque: Number(document.getElementById('estoque').value),
    dataCadastro: document.getElementById('dataCadastro').value
  }
}

const descricaoProduto = () => {
  return `
    Descricao: ${descricao.value}
    Categoria: ${categoria.value}
    Peso: ${peso.value}Kg
    Altura: ${altura.value}m
    Largura: ${largura.value}m
    Comprimento: ${comprimento.value}m
    Estoque: ${estoque.value} un
    Data do Cadastro: ${dataCadastro.value}
  `
}

const createMsg = cod => {
  tr = `<tr class="linha" id="cod${cod}">
  <td>
    <div class="icons">
      <input
        id="codBotaoEditar${cod}"
        class="botaoEditar"
        type="button"
        onclick="fnAbrirJanela(), document.addEventListener('click', onClick)"  />
      <input
        class="botaoExcluir"
        type="button"
        onclick="fnExcluirItem(cod${cod})" />
    </div>
  </td>
  <td>${cod}</td>
  <td>${produto().descricao}</td>
  <td>${produto().categoria}</td>
  <td>${produto().peso}</td>
  <td>${produto().altura}</td>
  <td>${produto().largura}</td>
  <td>${produto().comprimento}</td>
  <td>${produto().estoque}</td>
  <td>${produto().dataCadastro}</td>
</tr>`
}

// const createMsg = cod => {
//   tr = `<tr class="linha" id="cod${cod}">
//   <td>
//     <div class="icons">
//       <input
//         class="botaoEditar"
//         type="button"
//         onclick="fnAtualizarItem(cod${cod})" />
//       <input
//         class="botaoExcluir"
//         type="button"
//         onclick="fnExcluirItem(cod${cod})" />
//     </div>
//   </td>
//   <td>${cod}</td>
//   <td>${produto().descricao}</td>
//   <td>${produto().categoria}</td>
//   <td>${produto().peso}</td>
//   <td>${produto().altura}</td>
//   <td>${produto().largura}</td>
//   <td>${produto().comprimento}</td>
//   <td>${produto().estoque}</td>
//   <td>${produto().dataCadastro}</td>
// </tr>`
// }

const createTableRow = (tbody, tr) => {
  tbody.innerHTML += tr
}

const confirmar = confirmando => {
  if (confirmando == 'c') {
    return confirm(`Deseja mesmo cadastrar o produto?
    ${descricaoProduto()}
    `)
  }
  if (confirmando == 'e') {
    return confirm(`Deseja mesmo excluir o produto?
    `)
  }
  if (confirmando == 'a') {
    return confirm(`Deseja mesmo alterar o produto?
    ${descricaoProduto()}
    `)
  }
  if (confirmando == 'r') {
    return confirm(`Caso pressione sim, TODA A TABELA será excluida. Deseja mesmo prosseguir?
    `)
  }
}

const fnCadastrar = () => {
  let confirmando = 'c'
  if (confirmar(confirmando)) {
    ID++
    createMsg(ID)
    createTableRow(tbody, tr)
  }
}

const fnAtualizarItem = cod => {
  let confirmando = 'a'
  if (confirmar(confirmando)) {
    const alterar = document.getElementById(cod.id)
    createMsg(cod.id.replace('cod', ''))
    alterar.innerHTML = tr
  }
}

const fnExcluirItem = cod => {
  let confirmando = 'e'
  if (confirmar(confirmando)) {
    const inputCodigo = document.getElementById(cod.id)
    inputCodigo.innerHTML = ''
  }
}

const fnReiniciar = () => {
  const confirmando = 'r'
  if (confirmar(confirmando)) tbody.innerHTML = ''
  ID = 0
}

const fnAtualizar = () => {
  const inputCodigo = prompt('Digite o codigo do produto: ')
  let alterar = document.getElementById(`cod${inputCodigo}`)
  createMsg(inputCodigo)
  tr.replace('id="cod${cod}', 'id="cod${inputCodigo}')
  tr.replace('AtualizarItem(cod${cod})', 'AtualizarItem(cod${inputCodigo})')
  tr.replace('ExcluirItem(cod${cod})', 'ExcluirItem(cod${inputCodigo})')

  alterar.innerHTML = tr
}

botaoPesquisa.onclick = function () {
  janelaPesquisa.style.display = 'block'
}

span.onclick = function () {
  janelaPesquisa.style.display = 'none'
}

const colunas = [
  'Filtros',
  'ID',
  'Descrição',
  'Categoria',
  'Peso',
  'Altura',
  'Largura',
  'Comprimento',
  'Estoque',
  'DataCadastro'
]

const tabela = document.getElementById('sectionTable')
const linha = tabela.getElementsByTagName('tr')

const fnPesquisar = () => {
  const filtro = inputPesquisa.value.toUpperCase().trim()
  var td, i

  for (i = 1; i < linha.length; i++) {
    td = linha[i].getElementsByTagName('td')[2]
    if (td) {
      if (td.innerHTML.toUpperCase().trim() == filtro) {
        linha[i].style.display = ''
      } else {
        linha[i].style.display = 'none'
      }
    }
  }
}

const fnLimparFiltro = () => {
  var td, i

  for (i = 1; i < linha.length; i++) {
    td = linha[i].getElementsByTagName('td')[2]
    if (td) {
      linha[i].style.display = ''
    }
  }
}
