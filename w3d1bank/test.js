describe("Savings Account test", function () {


    it("get interest equal to 10%", function () {
        const savingAccount = new SavingsAccount("123456", 0.10);
        assert(savingAccount.getInterest(), 0.10);
    });

    it("check set interest, interest set to 20%", function () {
        const savingAccount = new SavingsAccount("123456", 0.10);
        savingAccount.setInterest(0.20);
        assert(savingAccount.getInterest(), 0.20)
    });

    it("deposit 500 to bank", function () {
        const savingAccount = new SavingsAccount("123456", 0.10);
        savingAccount.deposit(500);
        assert(savingAccount.getBalance(), 500);
    });

    it("Check add Interest", function () {
        const savingAccount = new SavingsAccount("12345", 25);
        savingAccount.deposit(500);
        savingAccount.addInterest();
        assert(savingAccount.getBalance(), 500 + 0.25 * 500);
    });

    it("check toString", function () {
        const savingAccount = new SavingsAccount("12345", 25);
        assert(true, savingAccount.toString().startsWith("SavingsAccount"));
    });

    it("assert end of month", function () {
        const savingAccount = new SavingsAccount("12345", 25);
        savingAccount.deposit(200);
        assert(savingAccount.endOfMonth(), 50);
    });
});

describe("Checking Account test", function () {
    it("check overdraft limit value", function () {
        const checkingAccount = new CheckingAccount("123456", 1000);
        assert(checkingAccount.getOverDraftLimit(), 1000);
    });

    it("check overdraft limit setter", function () {
        const checkingAccount = new CheckingAccount("123456", 1000);
        checkingAccount.setOverDraftLimit(10);
        assert(checkingAccount.getOverDraftLimit(), 10);
    });

    it("check withdraw", function () {
        const checkingAccount = new CheckingAccount("123456", 1000);
        checkingAccount.withdraw(900);
        assert(checkingAccount.getBalance(), -900);
    });

    it("check toString", function () {
        const checkingAccount = new CheckingAccount("123456", 1000);
        assert(checkingAccount.toString().startsWith("CheckingAccount"), true);
    });

    it("check end of month", function () {
        const checkingAccount = new CheckingAccount("123456", 1000);
        checkingAccount.withdraw(900);
        assert(checkingAccount.endOfMonth(), CheckingAccount.WARNING_LOW_BALANCE);
    });
});

describe("Check Bank class", function () {
    const bank = new Bank([]);

    it("check addition of new account", function () {
        bank.addAccount(new Account("12345678"));
        assert(bank.findAccount("12345678"), "12345678");
    });

    it("add savings account", function() {
        bank.addSavingsAccount("987654", 10);
        assert(bank.findAccount("987654"), "987654");
    });

    it("add checking account", function() {
       bank.addCheckingAccount("45678", 10, 1000);
       assert(bank.findAccount("45678"), "45678");
    });

    it("close account", function() {
       bank.addAccount(new Account("45213"));
       bank.closeAccount("45213");
       assert(bank.findAccountIndex("45213"), -1);
    });


    it("account report test", function() {
       const output = bank.accountReport();
       assert(output !== "");
    });

    it("static next number test", function() {
        bank.addSavingsAccount("5642", 10);
        bank.addSavingsAccount("4321", 10);
        assert(Bank.nextNumber(bank.getAccounts(), "5642"),"4321");
    });


    it("end of month test", function() {
        const bank = new Bank();
        const account1 = new Account("12345678");
        account1.deposit(500);

        bank.addAccount(account1);
        bank.addSavingsAccount("23456", 10);
        bank.addCheckingAccount("45678", 1000);

        const savingAccount = bank.findAccount("23456");
        const checkingAccount = bank.findAccount("45678");
        savingAccount.deposit(500);
        checkingAccount.deposit(500);

        assert(bank.endOfMonth());
    });

});