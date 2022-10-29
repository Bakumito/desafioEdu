var tr, checker, targetedId, td, i
let ID = 0
const tbody = document.querySelector('tbody')
const janelaPesquisa = document.getElementById('janelaPesquisa')
const botaoPesquisa = document.getElementById('botaoPesquisa')
const inputPesquisa = document.getElementById('inputPesquisa')
const fecharJanela = document.getElementsByClassName('close')[0]
const botaoReiniciar = document.getElementById('botaoReiniciar')
const janelaForm = document.getElementById('janelaForm')
const tabela = document.getElementById('sectionTable')
const linha = tabela.getElementsByTagName('tr')
const celula = tabela.getElementsByTagName('td')

const fnAbrirJanela = () => {
  janelaForm.style.display = 'block'
}

const fnFecharJanela = () => {
  janelaForm.style.display = 'none'
}

botaoPesquisa.onclick = function () {
  janelaPesquisa.style.display = 'block'
}

fecharJanela.onclick = function () {
  checker = ''
  janelaPesquisa.style.display = 'none'
}

const fnResetChecker = () => {
  checker = ''
}

let arrProduto = [
  'descricao',
  'categoria',
  'peso',
  'altura',
  'largura',
  'comprimento',
  'estoque',
  'dataCadastro'
]

let arrProdutoTemp = arrProduto

const fnArrayProduto = checker => {
  for (let i = 0; i < arrProduto.length; i++) {
    arrProdutoTemp[i].replace(arrProdutoTemp[i], arrProdutoTemp[i] + checker)
  }
}

const produto = checker => {
  fnArrayProduto(checker)

  let descricao = document.getElementById(`${arrProdutoTemp[0]}${checker}`)
  let categoria = document.getElementById(`${arrProdutoTemp[1]}${checker}`)
  let peso = document.getElementById(`${arrProdutoTemp[2]}${checker}`)
  let altura = document.getElementById(`${arrProdutoTemp[3]}${checker}`)
  let largura = document.getElementById(`${arrProdutoTemp[4]}${checker}`)
  let comprimento = document.getElementById(`${arrProdutoTemp[5]}${checker}`)
  let estoque = document.getElementById(`${arrProdutoTemp[6]}${checker}`)
  let dataCadastro = document.getElementById(`${arrProdutoTemp[7]}${checker}`)

  return {
    descricao: descricao.value.toUpperCase().trim(),
    categoria: categoria.value.toUpperCase().trim(),
    peso: Number(peso.value),
    altura: Number(altura.value),
    largura: Number(largura.value),
    comprimento: Number(comprimento.value),
    estoque: Number(estoque.value),
    dataCadastro: dataCadastro.value
  }
}

const descricaoProduto = checker => {
  produto(checker)
  return `
    Descricao: ${produto(checker).descricao}
    Categoria: ${produto(checker).categoria}
    Peso: ${produto(checker).peso}Kg
    Altura: ${produto(checker).altura}m
    Largura: ${produto(checker).largura}m
    Comprimento: ${produto(checker).comprimento}m
    Estoque: ${produto(checker).estoque} un
    Data do Cadastro: ${produto(checker).dataCadastro}
  `
}

const createMsg = (cod, checker) => {
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
  <td>${produto(checker).descricao}</td>
  <td>${produto(checker).categoria}</td>
  <td>${produto(checker).peso}</td>
  <td>${produto(checker).altura}</td>
  <td>${produto(checker).largura}</td>
  <td>${produto(checker).comprimento}</td>
  <td>${produto(checker).estoque}</td>
  <td>${produto(checker).dataCadastro}</td>
</tr>`
}

const createTableRow = (tbody, tr) => {
  tbody.innerHTML += tr
}

const confirmar = confirmando => {
  if (confirmando == 'c') {
    return confirm(`Deseja mesmo cadastrar o produto?
    ${descricaoProduto(checker)}
    `)
  }
  if (confirmando == 'e') {
    return confirm(`Deseja mesmo excluir o produto?
    `)
  }
  if (confirmando == 'a') {
    return confirm(`Deseja mesmo alterar o produto?
    ${descricaoProduto(checker)}
    `)
  }
  if (confirmando == 'r') {
    return confirm(`Caso pressione sim, TODA A TABELA será excluida. Deseja mesmo prosseguir?
    `)
  }
}

const fnCadastrar = checker => {
  let confirmando = 'c'
  if (confirmar(confirmando)) {
    ID++
    createMsg(ID, checker)
    createTableRow(tbody, tr)
  }
}

const fnAtualizarItem = cod => {
  let confirmando = 'a'
  if (confirmar(confirmando)) {
    let coder = cod
    let alterar
    if (coder.substr(0, 3) === 'cod') {
      alterar = document.getElementById(cod.id)
      createMsg(cod.id.replace('cod', ''), checker)
      alterar.innerHTML = tr
    } else {
      alterar = document.getElementById(`cod${cod}`)
      createMsg(cod, checker)
      alterar.innerHTML = tr
    }
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

const fnAtualizar = checker => {
  const inputCodigo = prompt('Digite o codigo do produto: ')
  let alterar = document.getElementById(`cod${inputCodigo}`)
  createMsg(inputCodigo, checker)
  tr.replace('id="cod${cod}', 'id="cod${inputCodigo}')
  tr.replace('AtualizarItem(cod${cod})', 'AtualizarItem(cod${inputCodigo})')
  tr.replace('ExcluirItem(cod${cod})', 'ExcluirItem(cod${inputCodigo})')

  alterar.innerHTML = tr
}

const fnPesquisar = () => {
  const filtro = inputPesquisa.value.toUpperCase().trim()
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
  for (i = 1; i < linha.length; i++) {
    td = linha[i].getElementsByTagName('td')[2]
    if (td) {
      linha[i].style.display = ''
    }
  }
}

const onClick = e => {
  if (
    e.target.nodeName === 'INPUT' &&
    e.target.id.substr(0, 14) === 'codBotaoEditar'
  ) {
    targetedId = e.target.id
    checker = 'Temp'
  }
}

function chamaAtualiza(targetedId) {
  fnAtualizarItem(targetedId.replace('codBotaoEditar', ''))
}
