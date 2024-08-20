/* 

Escreva um programa em javascript para calcular a área de diferentes formas geométricas. 
O programa deve iniciar com um menu contendo as diferentes opções de cálculas. As opções devem ser:
área do triângulo: base * altura / 2
área do retângulo: base * altura
área do quadrado: lado²
área do trapézio: (base maior + base menor) * altura / 2
área do círculo: pi * raio² (considere pi = 3.14)
Você deve escrever o programa usando funções sempre que possível para separar os procedimentos. 
O programa também deve ter uma opção de “Sair” e enquanto ela não for escolhida deverá voltar ao menu.

*/

let option = ""
let base = 0
let baseMaior = 0
let baseMenor = 0
let altura = 0
let lado = 0
let raio = 0

function areaTriangulo(base, altura) {
    return (base*altura)/2
}

function areaRetangulo(base, altura) {
    return base*altura
}

function areaQuadrado(lado) {
    return lado*lado
}

function areaTrapezio(baseM, basem, altura) {
    return ((baseM+basem)*altura)/2
}

function areaCirculo(raio){
    return 3.14*(raio*raio)
}

do{
    option = prompt(
        "Calculadora geométrica: O que você deseja calcular?" +
        "\n1. Área do triângulo" +
        "\n2. Área do retângulo" + 
        "\n3. Área do quadrado" +
        "\n4. Área do trapézio" +
        "\n5. Área do círculo" +
        "\n6. Sair"
    )

    switch(option){

        case "1":
            base = parseFloat(prompt("Qual a base da sua figura? "))
            altura = parseFloat(prompt("Qual a altura da sua figura? "))
            resultado = areaTriangulo(base,altura)
            alert("A área do sua figura é " + resultado)
            break
        case "2":
            base = parseFloat(prompt("Qual a base da sua figura? "))
            altura = parseFloat(prompt("Qual a altura da sua figura? "))
            resultado = areaRetangulo(base,altura)
            alert("A área do sua figura é " + resultado)
            break
        case "3":
            lado = parseFloat(prompt("Qual o lado do seu quadrado?"))
            resultado = areaQuadrado(lado)
            alert("A área do sua figura é " + resultado)
            break
        case "4":
            baseMaior = parseFloat(prompt("Qual a base maior da sua figura? "))
            baseMenor = parseFloat(prompt("Qual a base menor da sua figura? "))
            altura = parseFloat(prompt("Qual a altura da sua figura? "))
            resultado = areaTrapezio(baseMaior, baseMenor, altura)
            alert("A área do sua figura é " + resultado)
            break
        case "5":
            raio = parseFloat(prompt("Qual o raio do seu círculo? "))
            resultado = areaCirculo(raio)
            alert("A área do sua figura é " + resultado)
            break
        case "6":
            alert("Encerrando...")
            break
        default:
            alert("Escolha uma opção válida!")
            break

    }

} while (option!=="6")