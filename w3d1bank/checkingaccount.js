"use strict";

class CheckingAccount extends Account {

    static WARNING_LOW_BALANCE = "warning, low balance";

    constructor(number, overdraftLimit) {
        super(number);
        this._overdraftLimit = overdraftLimit;
    }


    getOverDraftLimit() {
        return this._overdraftLimit;
    }

    setOverDraftLimit(overDraftLimit) {
        this._overdraftLimit = overDraftLimit;
    }

    withdraw(amount) {
        if (amount <= 0) {
            throw new RangeError("Withdraw amount has to be greater than zero");
        }

        if (amount > this._balance) {
            const overDraftAmount = this._balance + this._overdraftLimit - amount;
            if (overDraftAmount < 0) {
                throw new Error("Overdraft amount exceeded, withdraw rejected");
            }
        }

        this._balance -= amount;
    }

    toString() {
        return `CheckingAccount:\nNumber: ${this.number}\nInterest:${this._interest}
        \nBalance:${this._balance}\nOverdraft Limit: ${this._overdraftLimit}\n`;
    }

    endOfMonth() {
        if(this._balance < 0) {
            return CheckingAccount.WARNING_LOW_BALANCE;
        }

        return "";
    }
}