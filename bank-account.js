class BankAccount {
    constructor(){
    this._balance=0
    this._isBankOpened=true
    }
   deposit(amount){
    if (this._isBankOpened){
     return this._balance+=amount
    }
    throw new Error("Bank is closed")
   }
   withdraw(amount){
    if (this._isBankOpened && this._balance>amount) {
        return  this._balance-=amount
    }
    throw new Error (" Transaction failed  you don't have enough money")
   }
   close (){
    this._isBankOpened=false
   }
   get balance(){
    console.log(`you balance is ${this._balance}`)
    return this._balance
    
}
}
let user= new BankAccount()
user.deposit(1000)
user.withdraw(500)
user.balance
