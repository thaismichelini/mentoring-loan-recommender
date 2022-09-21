export class Loan {
  id: string;
  type: string;
  tax: number;
  createdAt: Date;
  upDatedAt: Date;
  paidAt: Date;
  installments: Installment[];
  totalAmount: number;

  constructor(
    id: string,
    type: string,
    tax: number,
    createdAt: Date,
    upDatedAt: Date,
    paidAt: Date,
    installments: Installment[] = [],
    totalAmount: number
  ) {
    this.id = id;
    this.type = type;
    this.tax = tax;
    this.createdAt = createdAt;
    this.upDatedAt = upDatedAt;
    this.paidAt = paidAt;
    this.installments = installments;
    this.totalAmount = totalAmount;
  }
  createInstallmentPlan = (
    totalAmount: number,
    quantityInstallments: number,
    tax: number
  ): number => (totalAmount / quantityInstallments) * tax;
}
export class Installment {
  constructor(
    id: string,
    number: Number,
    amountToCharge: Number,
    dueDate: Date,
    createdAt: Date,
    upDatedAt: Date,
    status: string
  ) {}
}
const loan = new Loan(
  '0123',
  'CREDIT_CERTIFICATE',
  15,
  '2021-12-10',
  '2021-12-10',
  '2021-12-10',
  10,
  15
);
console.log(loan.createInstallmentPlan(10000, 10, 1.2)); //1200
