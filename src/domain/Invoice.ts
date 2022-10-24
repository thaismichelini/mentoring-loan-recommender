export class Invoice {
  id: String;
  type: String;
  amount: Number;
  createdAt: Date;
  updatedAt: Date;
  expired: Boolean;
  installments: String[];
  loanId: String;
  dueDate: Date;

  constructor(
    id: String,
    type: String,
    amount: Number,
    createdAt: Date,
    updatedAt: Date,
    expired: Boolean,
    installments: String[],
    loanId: String,
    dueDate: Date
  ) {
    this.id = id;
    this.type = type;
    this.amount = amount;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.expired = expired;
    this.installments = installments;
    this.loanId = loanId;
    this.dueDate = dueDate;
  }

  // checkIfExpired = () => {
  //   this.dueDate < new Date() ? (this.expired = true) : (this.expired = false);
  // };

  checkIfExpired = () => {
    if (this.dueDate < new Date()) {
      console.log('111111111111');
      this.expired = true;
    } else {
      this.expired = false;
      console.log('22222222222');
    }
  };
}
