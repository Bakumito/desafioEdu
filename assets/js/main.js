var tr, verificaBotao, targetedId, td, i
let ID = 0
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
const tbody = document.querySelector('tbody')
const janelaPesquisa = document.getElementById('janelaPesquisa')
const botaoPesquisa = document.getElementById('botaoPesquisa')
const inputPesquisa = document.getElementById('inputPesquisa')
const fecharJanela = document.getElementsByClassName('close')[0]
const janelaForm = document.getElementById('janelaForm')
const tabela = document.getElementById('sectionTable')
const linha = tabela.getElementsByTagName('tr')

const fnResetVerificaBotao = () => {
  verificaBotao = ''
}

const fnOnClick = e => {
  if (
    e.target.nodeName === 'INPUT' &&
    e.target.id.substr(0, 14) === 'codBotaoEditar'
  ) {
    targetedId = e.target.id
    verificaBotao = 'Temp'
  }
}

botaoPesquisa.onclick = function () {
  janelaPesquisa.style.display = 'block'
}

fecharJanela.onclick = function () {
  fnResetVerificaBotao()
  janelaPesquisa.style.display = 'none'
}

const fnAbrirJanela = () => {
  janelaForm.style.display = 'block'
}

const fnFecharJanela = () => {
  janelaForm.style.display = 'none'
}

const fnArrayProduto = verificaBotao => {
  for (let i = 0; i < arrProduto.length; i++) {
    arrProduto[i].replace(arrProduto[i], arrProduto[i] + verificaBotao)
  }
}

const fnProduto = verificaBotao => {
  fnArrayProduto(verificaBotao)

  let descricao = document.getElementById(`${arrProduto[0]}${verificaBotao}`)
  let categoria = document.getElementById(`${arrProduto[1]}${verificaBotao}`)
  let peso = document.getElementById(`${arrProduto[2]}${verificaBotao}`)
  let altura = document.getElementById(`${arrProduto[3]}${verificaBotao}`)
  let largura = document.getElementById(`${arrProduto[4]}${verificaBotao}`)
  let comprimento = document.getElementById(`${arrProduto[5]}${verificaBotao}`)
  let estoque = document.getElementById(`${arrProduto[6]}${verificaBotao}`)
  let dataCadastro = document.getElementById(`${arrProduto[7]}${verificaBotao}`)

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

const fnDescricaoProduto = verificaBotao => {
  fnProduto(verificaBotao)
  return `
    Descricao: ${fnProduto(verificaBotao).descricao}
    Categoria: ${fnProduto(verificaBotao).categoria}
    Peso: ${fnProduto(verificaBotao).peso}Kg
    Altura: ${fnProduto(verificaBotao).altura}m
    Largura: ${fnProduto(verificaBotao).largura}m
    Comprimento: ${fnProduto(verificaBotao).comprimento}m
    Estoque: ${fnProduto(verificaBotao).estoque} un
    Data do Cadastro: ${fnProduto(verificaBotao).dataCadastro}
  `
}

const fnCreateMsg = (cod, verificaBotao) => {
  tr = `<tr class="linha" id="cod${cod}">
  <td>
    <div class="icons">
      <input
        id="codBotaoEditar${cod}"
        class="botaoEditar"
        type="button"
        onclick="fnAbrirJanela(), document.addEventListener('click', fnOnClick)"  />
      <input
        class="botaoExcluir"
        type="button"
        onclick="fnExcluirItem(cod${cod})" />
    </div>
  </td>
  <td>${cod}</td>
  <td>${fnProduto(verificaBotao).descricao}</td>
  <td>${fnProduto(verificaBotao).categoria}</td>
  <td>${fnProduto(verificaBotao).peso}</td>
  <td>${fnProduto(verificaBotao).altura}</td>
  <td>${fnProduto(verificaBotao).largura}</td>
  <td>${fnProduto(verificaBotao).comprimento}</td>
  <td>${fnProduto(verificaBotao).estoque}</td>
  <td>${fnProduto(verificaBotao).dataCadastro}</td>
</tr>`
}

const fnCreateTableRow = (tbody, tr) => {
  tbody.innerHTML += tr
}

const fnConfirmar = confirmando => {
  if (confirmando == 'c') {
    return confirm(`Deseja mesmo cadastrar o produto?
    ${fnDescricaoProduto(verificaBotao)}
    `)
  }
  if (confirmando == 'e') {
    return confirm(`Deseja mesmo excluir o produto?
    `)
  }
  if (confirmando == 'a') {
    return confirm(`Deseja mesmo alterar o produto?
    ${fnDescricaoProduto(verificaBotao)}
    `)
  }
  if (confirmando == 'r') {
    return confirm(`Caso pressione sim, TODA A TABELA será excluida. Deseja mesmo prosseguir?
    `)
  }
}

const fnCadastrar = verificaBotao => {
  const confirmando = 'c'
  if (fnConfirmar(confirmando)) {
    ID++
    fnCreateMsg(ID, verificaBotao)
    fnCreateTableRow(tbody, tr)
  }
}

const fnAtualizarItem = cod => {
  const confirmando = 'a'
  if (fnConfirmar(confirmando)) {
    let alterar
    if (cod.substr(0, 3) === 'cod') {
      alterar = document.getElementById(cod.id)
      fnCreateMsg(cod.id.replace('cod', ''), verificaBotao)
      alterar.innerHTML = tr
    } else {
      alterar = document.getElementById(`cod${cod}`)
      fnCreateMsg(cod, verificaBotao)
      alterar.innerHTML = tr
    }
  }
}

const fnExcluirItem = cod => {
  const confirmando = 'e'
  if (fnConfirmar(confirmando)) {
    const inputCodigo = document.getElementById(cod.id)
    inputCodigo.innerHTML = ''
  }
}

const fnReiniciar = () => {
  const confirmando = 'r'
  if (fnConfirmar(confirmando)) tbody.innerHTML = ''
  ID = 0
}

const fnAtualizar = verificaBotao => {
  const inputCodigo = prompt('Digite o codigo do produto: ')
  const alterarPorId = document.getElementById(`cod${inputCodigo}`)
  fnCreateMsg(inputCodigo, verificaBotao)
  tr.replace('id="cod${cod}', 'id="cod${inputCodigo}')
  tr.replace('AtualizarItem(cod${cod})', 'AtualizarItem(cod${inputCodigo})')
  tr.replace('ExcluirItem(cod${cod})', 'ExcluirItem(cod${inputCodigo})')

  alterarPorId.innerHTML = tr
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

const fnChamaAtualiza = targetedId => {
  fnAtualizarItem(targetedId.replace('codBotaoEditar', ''))
}
