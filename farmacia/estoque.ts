import * as leitor from 'readline-sync';

class Medicamento {
    nome: string;
    qtd: number;
    preco: number;

    constructor(nome: string, qtd: number, preco: number) {
        this.nome = nome;
        this.qtd = qtd;
        this.preco = preco;
    }
}

export class Farmacia {
    medicamentos: Medicamento[];

    constructor() {
        this.medicamentos = [];
    }

    addMedicamento(): void {
        let nome = leitor.question("Informe o nome do novo medicamento: ");
        let qtd = parseFloat(leitor.question("Informe a quantidade do novo medicamento: "));
        let preco = parseFloat(leitor.question("Informe o preço do novo medicamento: "));
        let medicamento = new Medicamento(nome, qtd, preco);
        this.medicamentos.push(medicamento);
        console.log(`Foi adicionado ao estoque: ${qtd} de ${nome}`);
    }

    venderMedicamento(nome: string, qtdVendida: number): void {
        for (const medicamento of this.medicamentos) {
            if (medicamento.nome === nome) {
                if (medicamento.qtd >= qtdVendida) {
                    medicamento.qtd -= qtdVendida;
                    console.log(`Foram vendidos ${qtdVendida} de ${nome}.`);
                } else {
                    console.log(`Estoque insuficiente para a venda de ${qtdVendida} de ${nome}.`);
                }
                return;
            }
        }
        console.log(`Medicamento ${nome} não encontrado no estoque.`);
    }

    comprarMedicamento(nome: string, qtdComprada: number): void {
        for (const medicamento of this.medicamentos) {
            if (medicamento.nome === nome) {
                medicamento.qtd += qtdComprada;
                console.log(`Foram comprados ${qtdComprada} de ${nome}.`);
                return;
            }
        }
        console.log(`Medicamento ${nome} não encontrado no estoque.`);
    }

    substituirMedicamento(nomeAntigo: string, nomeNovo: string): void {
        for (let i = 0; i < this.medicamentos.length; i++) {
            if (this.medicamentos[i].nome === nomeAntigo) {
                this.medicamentos[i].nome = nomeNovo;
                console.log(`Medicamento ${nomeAntigo} foi substituído por ${nomeNovo}.`);
                return;
            }
        }
        console.log(`Medicamento ${nomeAntigo} não encontrado no estoque.`);
    }

    removerMedicamento(nome: string): void {
        for (let i = 0; i < this.medicamentos.length; i++) {
            if (this.medicamentos[i].nome === nome) {
                this.medicamentos.splice(i, 1);
                console.log(`Medicamento ${nome} foi removido do estoque.`);
                return;
            }
        }
        console.log(`Medicamento ${nome} não encontrado no estoque.`);
    }

    visualizarEstoque(): void {
        if (this.medicamentos.length === 0) {
            console.log("O estoque está vazio.");
        } else {
            console.log("Medicamentos disponíveis no estoque:");
            for (const medicamento of this.medicamentos) {
                console.log(`${medicamento.nome} - Quantidade: ${medicamento.qtd} - Preço: R$ ${medicamento.preco}`);
            }
        }
    }
}
