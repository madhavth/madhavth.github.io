"use strict";

class SavingsAccount extends Account {
    constructor(number, interest) {
        super(number);
        this._interest = interest;
    }

    getInterest() {
        return this._interest;
    }

    setInterest(interest) {
        this._interest = interest;
    }

    addInterest() {
        const interestAmount= this.getBalance() * this._interest / 100;
        this.deposit(interestAmount);
        return interestAmount;
    }

    toString() {
        return `SavingsAccount:\nNumber: ${this.number}\nInterest:${this._interest}
        \nBalance:${this._balance}\n`;
    }

    endOfMonth() {
        return this.addInterest().toString();
    }
}