/*
Escreva um programa em javascript para simular uma fila de espera em um consultório médico. 
O programa deve iniciar mostrando na tela um menu interativo contendo a lista de todos os pacientes 
esperando em ordem mostrando sua posição ao lado do nome (ex.: 1º Matheus, 2º Marcos, etc). O menu também deve 
permitir escolher entre as opções de “Novo paciente”, para adicionar um novo paciente ao fim da fila 
(pedindo o nome do paciente), “Consultar paciente”, que retira o primeiro paciente da fila e mostra na tela o nome 
do paciente consultado, e “Sair”. O programa só deve ser encerrado ao escolher a opção de “Sair”, caso 
contrário deve voltar ao menu.
*/

let option = ""
let queue = []

do{

    let patients = ""
    for(i=0; i<queue.length; i++){
        patients += (i+1) + "º - " + queue[i] + "\n"
    }

    option = prompt(
        "Pacientes: \n" + patients + 
        "Opções: \n1) Novo paciente \n2) Consultar paciente \n3) Sair"
    )

    switch(option){
        case "1":
            const newPatient = prompt("Qual é seu nome?")
            queue.push(newPatient)
            break
        case "2": 
            const patientConsulted = queue.shift()
            if (!patientConsulted) {
                alert ("Não há pacientes na fila!")
            } else {
                alert(patientConsulted + " foi removido da fila.")
            }
            break
        case "3":
            alert("Encerrando...")
            break
        default:
            alert("Opção inválida!")
            break
    }
} while (option !== "3")
