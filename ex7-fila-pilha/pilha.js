/*
Escreva um programa em javascript para simular um baralho de cartas. 
O programa deve iniciar mostrando na tela um menu interativo contendo a quantidade de cartas que estão 
atualmente no baralho e as opções de “Adicionar uma carta”, “Puxar uma carta” e “Sair”. Ao escolher “Adicionar uma carta”
, o programa deve perguntar o nome da carta e adicioná-la no topo do baralho. Ao escolher “Puxar uma carta”, 
o programa deve retirar a carta do topo do baralho e mostrar na tela o nome da carta puxada. 
O programa só deve ser encerrado ao escolher a opção de “Sair”, caso contrário deve voltar ao menu.
*/

let cheap = []
let option = ""

do {

    option = prompt(
        "Número de cartas no baralho: " + cheap.length + 
        "\nOpções: \n1)Adicionar uma carta \n2)Puxar uma carta \n3)Sair"
    )
    switch(option){
        case "1":
            const name = prompt("Qual o nome da carta?")
            cheap.unshift(name)
            break
        case "2":
            const withdrawal = cheap.shift()
            if (!withdrawal){
                alert("Não há cartas no baralho!")
            } else{
                alert(withdrawal + " foi removida do baralho.")
            }
            break
        case "3":
            alert("Encerrando...")
            break
        default:
            alert("Digite uma opção válida!")
            break
    }
} while(option !== "3")