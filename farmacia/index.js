"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// menu.ts
var leitor = require("readline-sync");
var estoque_1 = require("./estoque");
var farmacia = new estoque_1.Farmacia();
var menu = true;
while (true) {
    console.log("\nEscolha uma opção:");
    console.log("1 - Adicionar Medicamento");
    console.log("2 - Vender Medicamento");
    console.log("3 - Comprar Medicamento");
    console.log("4 - Substituir Medicamento");
    console.log("5 - Remover Medicamento");
    console.log("6 - Visualizar Estoque");
    console.log("7 - Sair");
    var opcao = leitor.questionInt("Digite o número da opção desejada: ");
    switch (opcao) {
        case 1:
            farmacia.addMedicamento();
            break;
        case 2:
            var nomeVenda = leitor.question("Nome do medicamento a vender: ");
            var qtdVenda = parseFloat(leitor.question("Quantidade a vender: "));
            farmacia.venderMedicamento(nomeVenda, qtdVenda);
            break;
        case 3:
            var nomeCompra = leitor.question("Nome do medicamento a comprar: ");
            var qtdCompra = parseFloat(leitor.question("Quantidade a comprar: "));
            farmacia.comprarMedicamento(nomeCompra, qtdCompra);
            break;
        case 4:
            var nomeAntigo = leitor.question("Nome do medicamento antigo: ");
            var nomeNovo = leitor.question("Nome do medicamento novo: ");
            farmacia.substituirMedicamento(nomeAntigo, nomeNovo);
            break;
        case 5:
            var nomeRemover = leitor.question("Nome do medicamento a remover: ");
            farmacia.removerMedicamento(nomeRemover);
            break;
        case 6:
            farmacia.visualizarEstoque();
            break;
        case 7:
            console.log("Saindo do sistema.");
            menu = false;
            break;
        default:
            console.log("Opção inválida. Por favor, escolha uma opção válida.");
    }
}
