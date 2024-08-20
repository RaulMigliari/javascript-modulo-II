function calcularMedia(a, b) {
    const media = (a + b)/2
    return media
}

const resultado = calcularMedia(7,2)

console.log(resultado)

function criarProduto(nome, preco) {
    const produto = {
        nome: nome,
        preco: preco,
        estoque: 1
    }
    return produto
}

const notebook = criarProduto("Notebook Intel Core i3 8GB", 2500)

console.log(notebook)
// console.log(criarProduto("Notebook Intel Core i3 8GB", 2500))

function areaRetangular (base, altura){
    return base*altura
}

function areaQuadrado(lado) {
    return areaRetangular(lado,lado)
}

console.log(areaRetangular(3,5))

console.log(areaQuadrado(9))

function ola() {
    let texto = "..."
    return texto
    texto = "Olá, mundo!"
    console.log(texto)
}

console.log(ola()) // Saída: "..." => a função acaba no return 

function maiorIdade(idade) {
    if(idade>=18) {
        return "Maior de idade"
    } else {
        return "Menor de idade"
    }
}

console.log(maiorIdade(29))
console.log(maiorIdade(17))