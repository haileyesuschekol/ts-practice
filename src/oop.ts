class Account {
  //   readonly id: number
  //   owner: string
  //   private balance: number
  nickName?: string
  constructor(
    public readonly id: number,
    public owner: string,
    private balance: number
  ) {
    // this.id = id
    // this.owner = owner
    // this.balance = balance
  }
  deposit(amount: number): void {
    if (amount < 0) throw new Error("invalid amount")
    this.balance += amount
  }
  get getBalance(): number {
    return this.balance
  }
}

const account = new Account(1, "Jo", 0)
account.deposit(100)
// console.log(account.getBalance)

class SeatAssignment {
  [seatNumber: string]: string
}

const seats = new SeatAssignment()

seats.a1 = "seat1"
seats.a1 = "seat2"
// console.log(seats.a1)
