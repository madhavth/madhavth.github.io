class Bank {

    constructor(accounts=[]) {
        this._accounts = accounts;
    }

    addAccount(account) {
        this._accounts = [...this._accounts, account];
        return account.getNumber();
    }

    addSavingsAccount(number, interest) {
        const account = new SavingsAccount(number, interest);
        this._accounts = [...this._accounts, account];
        return account.getNumber();
    }

    addCheckingAccount(number, interest, overdraft) {
        const account = new CheckingAccount(number, interest, overdraft);
        this._accounts = [...this._accounts, account];
        return account.getNumber();
    }

    closeAccount(number) {
        this._accounts = this._accounts.filter(e => e.getNumber() !== number);
    }

    accountReport() {
        let output = "";
        for (let account of this._accounts) {
            output += account + '\n';
        }
        return output;
    }

    static nextNumber(accounts, accountNumber) {
        const accountIndex = accounts.findIndex(acc => {
            return acc.getNumber() === accountNumber;
        });

        if (accountIndex !== -1) {

            if (accountIndex + 1 < accounts.length) {
                return accounts[accountIndex + 1].getNumber();
            }
        }
    }

    endOfMonth() {
        let output = "";
        for (let account of this._accounts) {
            output += account.endOfMonth() + "\n";
        }
        return output;
    }

    getAccounts() {
        return this._accounts;
    }

    findAccount(accountNumber) {
        return this._accounts.find(account => account.getNumber() === accountNumber);
    }

    findAccountIndex(accountNumber) {
        return this._accounts.findIndex(account => account.getNumber() === accountNumber);
    }
}