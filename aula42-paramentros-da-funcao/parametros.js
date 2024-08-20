function dobro(x) {
    alert("O dobro de " + x + " é " + (x*2))
}

// dobro(5)
// dobro(7)

dobro() // Entrada: undefined -> Saída: NaN (Not a Number)

function dizerOla(name = "Raul"){
    alert("Olá " + name + "!")
}

dizerOla()
dizerOla("Isaac")

function soma(x, y) {
    alert("A soma de " + a + " + " + b + " é " + (a+b))
}

soma(5,10)

function criarUsuario(nome, email, senha, tipo = "admin") {
    const usuario = {
        nome, //mesmo que nome: nome
        email, //mesmo que email: email
        senha, //mesmo que senha: senha
        tipo //mesmo que tipo: tipo
    }

    console.log(usuario)
}

criarUsuario("Raul", "raulmigliari614@gmail.com", "1234")

// Ao criarmos uma função com muitos parâmetros,
// uma boa prática é substituí-los por um objeto
function parametrosDoJeitoErrado(nome, telefone, endereco, aniversario, email, senha) {
  // ...
}
function parametrosDoJeitoCerto(usuario) {
  // ...
}
// Além de facilitar na chamada da função, a ordem dos parâmetros se torna irrelevante
parametrosDoJeitoErrado("nome", "telefone", "endereco", "aniversario", "email", "senha")
const dadosDoUsuario = {
  nome: "",
  telefone: "",
  email: "",
  senha: "",
  aniversario: "",
  endereco: ""
}
parametrosDoJeitoCerto(dadosDoUsuario)