const janelaTeste = document.getElementById('janelaTeste')

const fnAbrirJanela = () => {
  janelaTeste.style.display = 'block'
}

//  let targetedId;
//  const onClick = (e) => {
//    if (e.target.nodeName === 'INPUT') {
//      targetedId = e.target.id;
//     console.log(e.target.id.substr(0, 14))

//  }
//   console.log(targetedId)
// }

let targetedId
const onClick = e => {
  if (e.target.id.substr(0, 14) === 'codBotaoEditar') {
    targetedId = e.target.id
    //   console.log(e.target.id.substr(0, 14))
    //    console.log(targetedId)
  }
  console.log(targetedId)
  return targetedId.replace('codBotaoEditar', '')
}

const fecharJanela = () => {
  janelaTeste.style.display = 'none'
}

const produtoTemp = () => {
  return {
    descricaoTemp: document
      .getElementById('descricaoTemp')
      .value.toUpperCase()
      .trim(),
    categoriaTemp: document
      .getElementById('categoriaTemp')
      .value.toUpperCase()
      .trim(),
    pesoTemp: Number(document.getElementById('pesoTemp').value),
    alturaTemp: Number(document.getElementById('alturaTemp').value),
    larguraTemp: Number(document.getElementById('larguraTemp').value),
    comprimentoTemp: Number(document.getElementById('comprimentoTemp').value),
    estoqueTemp: Number(document.getElementById('estoqueTemp').value),
    dataCadastroTemp: document.getElementById('dataCadastroTemp').value
  }
}

const descricaoProdutoTemp = () => {
  return `
    Descricao: ${descricaoTemp.value}
    Categoria: ${categoriaTemp.value}
    Peso: ${pesoTemp.value}Kg
    Altura: ${alturaTemp.value}m
    Largura: ${larguraTemp.value}m
    Comprimento: ${comprimentoTemp.value}m
    Estoque: ${estoqueTemp.value} un
    Data do Cadastro: ${dataCadastroTemp.value}
  `
}

const createMsgTemp = cod => {
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
  <td>${produtoTemp().descricaoTemp}</td>
  <td>${produtoTemp().categoriaTemp}</td>
  <td>${produtoTemp().pesoTemp}</td>
  <td>${produtoTemp().alturaTemp}</td>
  <td>${produtoTemp().larguraTemp}</td>
  <td>${produtoTemp().comprimentoTemp}</td>
  <td>${produtoTemp().estoqueTemp}</td>
  <td>${produtoTemp().dataCadastroTemp}</td>
</tr>`
}

const confirmarTemp = confirmando => {
  if (confirmando == 'c') {
    return confirm(`Deseja mesmo cadastrar o produto?
    ${descricaoProdutoTemp()}
    `)
  }
  if (confirmando == 'e') {
    return confirm(`Deseja mesmo excluir o produto?
    `)
  }
  if (confirmando == 'a') {
    return confirm(`Deseja mesmo alterar o produto?
    ${descricaoProdutoTemp()}
    `)
  }
  if (confirmando == 'r') {
    return confirm(`Caso pressione sim, TODA A TABELA será excluida. Deseja mesmo prosseguir?
    `)
  }
}

const fnCadastrarTemp = () => {
  let confirmando = 'c'
  if (confirmarTemp(confirmando)) {
    ID++
    createMsgTemp(ID)
    createTableRow(tbody, tr)
  }
}

const fnAtualizarItemTemp = cod => {
  let confirmando = 'a'
  if (confirmarTemp(confirmando)) {
    const alterar = document.getElementById(cod)

    createMsgTemp(cod.replace('cod', ''))
    alterar.innerHTML = tr
  }
}

function chamaAtualiza(targetedId) {
  console.log(targetedId)
  const idCode = `cod${targetedId}`
  fnAtualizarItemTemp(idCode)
}
