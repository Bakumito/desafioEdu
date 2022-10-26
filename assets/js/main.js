let tr = ``
let ID = 0
const tbody = document.querySelector('tbody')

const produto = () => {
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
        class="botaoEditar"
        type="button"
        onclick="fnAtualizarItem(cod${cod})" />
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

const createTableRow = (tbody, tr) => {
  tbody.innerHTML += tr
}

const confirmar = (c, e, a) => {
  if (c == true && e == false && a == false) {
    return confirm(`Deseja mesmo cadastrar o produto?
    ${descricaoProduto()}
    `)
  }
  if (c == false && e == true && a == false) {
    return confirm(`Deseja mesmo excluir o produto?
    `)
  }
  if (c == false && e == false && a == true) {
    return confirm(`Deseja mesmo alterar o produto?
    ${descricaoProduto()}
    `)
  }
}

const fnCadastrar = () => {
  if (confirmar(true, false, false)) {
    ID++
    createMsg(ID)
    createTableRow(tbody, tr)
  }
}

const fnAtualizarItem = cod => {
  if (confirmar(false, false, true)) {
    const alterar = document.getElementById(cod.id)
    createMsg(cod.id.replace('cod', ''))
    alterar.innerHTML = tr
  }
}

const fnExcluirItem = cod => {
  if (confirmar(false, true, false)) {
    const inputCodigo = document.getElementById(cod.id)
    console.log(inputCodigo)
    inputCodigo.innerHTML = ''
  }
}

const fnAtualizar = () => {
  const inputCodigo = prompt('Digite o codigo do produto: ')
  const codigoID = `cod${inputCodigo}`
  let alterar = document.getElementById(codigoID)
  createMsg(inputCodigo)
  tr.replace('id="cod${cod}', 'id="cod${inputCodigo}')
  tr.replace('AtualizarItem(cod${cod})', 'AtualizarItem(cod${inputCodigo})')
  tr.replace('ExcluirItem(cod${cod})', 'ExcluirItem(cod${inputCodigo})')

  alterar.innerHTML = tr
}
