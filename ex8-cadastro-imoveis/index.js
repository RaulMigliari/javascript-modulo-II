/**
Escreva um programa em javascript que funcione como um cadastro de imóveis e atenda aos seguintes requisitos:
Deve ter um menu interativo que sempre é exibido até que o usuário escolha sair.
O menu interativo deve mostrar no topo a quantidade de imóveis cadastrados.
O menu deve ter a opção de salvar um imóvel.
Para salvar um novo imóvel o programa deve pedir as seguintes informações: 
Nome do proprietário.
Quantidade de quartos.
Quantidade de banheiros.
Se possui garagem.
O menu também deve ter a opção de mostrar todos os imóveis salvos. 
*/

const imoveis = []
let opcao = ""

do{
    opcao = prompt(
        "Bem vindo (a) ao Cadastro de Imóveis!\n" +
        "Total de imóveis: " + imoveis.length +
        "\n\nEscolha uma opção: \n1. Novo imóvel\n2. Listar imóveis\n3. Sair"
    )

    switch (opcao) {
        case "1":
            const imovel = {}

            imovel.proprietario = prompt("Informe o nome do proprietário do imóvel: ")
            imovel.quartos = prompt("Quantos quartos possui o imóvel:")
            imovel.banheiros = prompt("Quantos banheiros possui o imóvel:")
            imovel.garagem = prompt("O imóvel tem garagem: (Sim ou Não)")

            const confirmacao = confirm(
                "Salvar esse imóvel?\n"+
                "\nProprietário: " + imovel.proprietario +
                "\nQuartos: " + imovel.quartos +
                "\nBanheiros: " + imovel.banheiros +
                "\nPossui garagem: " + imovel.garagem
            )

            if (confirmacao){
                imoveis.push(imovel)
                alert("Salvando o imóvel...")
            } else {
                alert("Voltando ao menu...")
            }

            break
        case "2":
            for(let i=0; i <imoveis.length; i++){
                alert(
                    "Imóvel " + (i+1) + 
                    "\nProprietário: " + imoveis[i].proprietario +
                    "\nQuartos: " + imoveis[i].quartos +
                    "\nBanheiros: " + imoveis[i].banheiros +
                    "\nTem garagem: " + imoveis[i].garagem
                )
            }

            break
        case "3":
            alert("Encerrando...")
            break
        default:    
            alert("Escolha uma opção válida!")
            break
    }
} while (opcao !== "3");