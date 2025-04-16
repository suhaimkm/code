class BankAccount {
  accountHolder;
  accountNumber;
  balance;

  constructor(name, accountNo, balance) {
    this.accountHolder = name;
    this.accountNumber = accountNo;
    this.balance = balance;
  }

  printAccountDetails() {
    console.log(`Account Holder's Name: ${this.accountHolder}`);
    console.log(`Account Number: ${this.accountNumber}`);
    console.log(`Account Balance: ${this.balance}`);
  }

  deposit(amount) {
    console.log(`Depositing ${amount} in the account`);
    this.balance += amount;
  }

  withdraw(amount) {
    console.log(
      `Trying to withdraw amount ${amount}... Checking account for balance`
    );
    if (amount > this.balance) {
      console.log(`Insufficient balance in account`);
    } else {
      this.balance = this.balance - amount;
      console.log(`Withdrawn amount ${amount} from account.`);
    }
  }
}
let account1 = new BankAccount("Faiz", 200300345, 8000);
account1.printAccountDetails();
account1.deposit(2000);
account1.printAccountDetails();

account1.withdraw(20000);
account1.printAccountDetails();

let account2 = new BankAccount("Shahid", 200300325, 10000);

account2.printAccountDetails();
account2.deposit(2100);
account2.printAccountDetails();

