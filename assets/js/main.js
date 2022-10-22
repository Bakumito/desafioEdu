const formulario = document.querySelector('#formulario')
formulario.addEventListener('click', preventForm)
function preventForm(event) {
  event.preventDefault()
}
