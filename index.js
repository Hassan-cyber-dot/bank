"use strict";
class myBank {
}
class Bank1 {
    constructor() {
        this.accounts = [];
    }
}
class Account1 {
    constructor(id, name, balance, bank) {
        this.id = id;
        this.name = name;
        this.balance = balance;
        this.bank = bank;
    }
}
class Bank {
    constructor() {
        this.accounts = [];
    }
    addAccount(account) {
        this.accounts.push(account);
    }
}
class Account {
    // ...
    deposit(amount) {
        this.balance += amount;
    }
}
