class myBank {
 // properties of the Bank class will go here
}

class Bank1 {
 accounts: Account[] = [];
}

class Account1 {
 id: number;
 name: string;
 balance: number;
 bank: Bank;

 constructor(id: number, name: string, balance: number, bank: Bank) {
    this.id = id;
    this.name = name;
    this.balance = balance;
    this.bank = bank;
 }
}

class Bank {
 accounts: Account[] = [];

 addAccount(account: Account): void {
    this.accounts.push(account);
 }
}

class Account {
 balance: number;
 // ...

 deposit(amount: number): void {
    this.balance += amount;
 }
}
