// Criando as variáveis
const nome = document.getElementById("nome")
const cidade = document.getElementById("cidade")

const resultado = document.getElementById("resultado")
const resultadoCid = document.getElementById("resultadoCid")

// Criando função
function limparCampos() {
   nome.value = ""
   cidade.value = ""
}

function mudar(event) {
    event.preventDefault()


     // imprimir nome na tela
   resultado.innerHTML = nome.value
   resultadoCid.innerHTML = cidade.value


   // limpando o campo
    limparCampos()
}
