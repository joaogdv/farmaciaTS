"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Farmacia = void 0;
var leitor = require("readline-sync");
var Medicamento = /** @class */ (function () {
    function Medicamento(nome, qtd, preco) {
        this.nome = nome;
        this.qtd = qtd;
        this.preco = preco;
    }
    return Medicamento;
}());
var Farmacia = /** @class */ (function () {
    function Farmacia() {
        this.medicamentos = [];
    }
    Farmacia.prototype.addMedicamento = function () {
        var nome = leitor.question("Informe o nome do novo medicamento: ");
        var qtd = parseFloat(leitor.question("Informe a quantidade do novo medicamento: "));
        var preco = parseFloat(leitor.question("Informe o preço do novo medicamento: "));
        var medicamento = new Medicamento(nome, qtd, preco);
        this.medicamentos.push(medicamento);
        console.log("Foi adicionado ao estoque: ".concat(qtd, " de ").concat(nome));
    };
    Farmacia.prototype.venderMedicamento = function (nome, qtdVendida) {
        for (var _i = 0, _a = this.medicamentos; _i < _a.length; _i++) {
            var medicamento = _a[_i];
            if (medicamento.nome === nome) {
                if (medicamento.qtd >= qtdVendida) {
                    medicamento.qtd -= qtdVendida;
                    console.log("Foram vendidos ".concat(qtdVendida, " de ").concat(nome, "."));
                }
                else {
                    console.log("Estoque insuficiente para a venda de ".concat(qtdVendida, " de ").concat(nome, "."));
                }
                return;
            }
        }
        console.log("Medicamento ".concat(nome, " n\u00E3o encontrado no estoque."));
    };
    Farmacia.prototype.comprarMedicamento = function (nome, qtdComprada) {
        for (var _i = 0, _a = this.medicamentos; _i < _a.length; _i++) {
            var medicamento = _a[_i];
            if (medicamento.nome === nome) {
                medicamento.qtd += qtdComprada;
                console.log("Foram comprados ".concat(qtdComprada, " de ").concat(nome, "."));
                return;
            }
        }
        console.log("Medicamento ".concat(nome, " n\u00E3o encontrado no estoque."));
    };
    Farmacia.prototype.substituirMedicamento = function (nomeAntigo, nomeNovo) {
        for (var i = 0; i < this.medicamentos.length; i++) {
            if (this.medicamentos[i].nome === nomeAntigo) {
                this.medicamentos[i].nome = nomeNovo;
                console.log("Medicamento ".concat(nomeAntigo, " foi substitu\u00EDdo por ").concat(nomeNovo, "."));
                return;
            }
        }
        console.log("Medicamento ".concat(nomeAntigo, " n\u00E3o encontrado no estoque."));
    };
    Farmacia.prototype.removerMedicamento = function (nome) {
        for (var i = 0; i < this.medicamentos.length; i++) {
            if (this.medicamentos[i].nome === nome) {
                this.medicamentos.splice(i, 1);
                console.log("Medicamento ".concat(nome, " foi removido do estoque."));
                return;
            }
        }
        console.log("Medicamento ".concat(nome, " n\u00E3o encontrado no estoque."));
    };
    Farmacia.prototype.visualizarEstoque = function () {
        if (this.medicamentos.length === 0) {
            console.log("O estoque está vazio.");
        }
        else {
            console.log("Medicamentos disponíveis no estoque:");
            for (var _i = 0, _a = this.medicamentos; _i < _a.length; _i++) {
                var medicamento = _a[_i];
                console.log("".concat(medicamento.nome, " - Quantidade: ").concat(medicamento.qtd, " - Pre\u00E7o: R$ ").concat(medicamento.preco));
            }
        }
    };
    return Farmacia;
}());
exports.Farmacia = Farmacia;
