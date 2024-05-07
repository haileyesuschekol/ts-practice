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

class Person {
  constructor(public fName: string, public lName: string) {}
  get fullName() {
    return `${this.fName} ${this.lName}`
  }
}

class Student extends Person {
  constructor(fName: string, lName: string) {
    super(fName, lName)
  }
  getScore() {
    console.log("A")
  }
  override get fullName() {
    return `mr ` + super.fullName
  }
}

const stud1 = new Student("jo", "li")

console.log(stud1.fullName)
