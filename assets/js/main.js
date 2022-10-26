let tr = ``
let ID = 0

const form = document.querySelector('#formulario')
const tbody = document.querySelector('tbody')

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
    Peso: ${peso.value}Kg
    Altura: ${altura.value}m
    Largura: ${largura.value}m
    Comprimento: ${comprimento.value}m
    Estoque: ${estoque.value} un
    Data do Cadastro: ${dataCadastro.value}
    `)
  ) {
    ID++
    createMsg(ID)
    createTableRow(tbody, tr)
  }
}
const fnAtualizarItem = cod => {
  const alterar = document.getElementById(cod.id)
  createMsg(cod.id.replace('cod', ''))
  alterar.innerHTML = tr
}

const fnExcluirItem = cod => {
  const inputCodigo = document.getElementById(cod.id)
  console.log(inputCodigo)
  inputCodigo.innerHTML = ''
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
