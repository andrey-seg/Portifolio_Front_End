import { Budget, Savings } from './types/index.js';

const budget = new Budget(1000, 500, 200);
const savings = new Savings();

function transferirParaPoupanca(valor: number): void {
    try {
        budget.transferToSavings(valor);
        savings.deposit(valor);
        console.log(`Transferência de R$${valor} concluída`);
    } catch (error) {
        if (error instanceof Error) {
            console.error(`Erro: ${error.message}`);
        }
    }
}

transferirParaPoupanca(200);
transferirParaPoupanca(2000);
