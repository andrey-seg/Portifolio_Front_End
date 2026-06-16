interface IshowValue{
    showAmount(): number;
}

class Budget implements IshowValue{
    private __totalAmount: number;
    private __expenses: number;
    private __deposit: number;
    private __savedMoney: number = 0;

    constructor(totalAmount: number, expenses: number, deposit: number){
        this.__totalAmount = totalAmount;
        this.__expenses = expenses;
        this.__deposit = deposit;
    }

    get availableMoney(): number{
        return this.__totalAmount;
    }

    get totalExpenses(): number{
        return this.__expenses;
    }

    get budgetDeposit(): number{
        return this.__deposit;
    }

    set totalAmountDeposit(value: number){
        this.__totalAmount += value; 
    }

    transferToSavings(value: number): void {
        this.__totalAmount -= value;
        this.__savedMoney += value;
    }

    transferFromSavings(value: number): void {
        this.__totalAmount += value;
        this.__savedMoney -= value;
    }

    get savedMoney(): number {
        return this.__savedMoney;
    }

    showAmount(): number {
        return this.__totalAmount;
    }
}

class MonthBudget extends Budget{
    constructor(totalAmount: number, expenses: number, deposit: number){
        super(totalAmount, expenses, deposit);
    }

    showAmount(): number {
        return this.availableMoney;
    }

    get expenses(): number {
        return this.totalExpenses;
    }

    get totalTransaction(): number{
        return this.savedMoney;
    }
}

class Savings implements IshowValue{
    private __balance: number;

    constructor(balance: number = 0){
        this.__balance = balance;
    }

    deposit(value: number): void {
        this.__balance += value;
    }

    withdraw(value: number): void {
        this.__balance -= value;
    }

    showAmount(): number {
        return this.__balance;
    }
}