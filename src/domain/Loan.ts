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
  ) => {
    const amount = (totalAmount / quantityInstallments) * tax;
    for (let i = 0; i < quantityInstallments; i++) {
      let installment = new Installment(
        '122' + i,
        i + 1,
        amount,
        new Date(),
        new Date(),
        new Date(),
        'open',
        new Date()
      );
      this.installments.push(installment);
    }
  };
  // ajustar data
}
export class Installment {
  id: string;
  number: number;
  amountToCharge: number;
  dueDate: Date;
  createdAt: Date;
  upDatedAt: Date;
  status: string;
  paidAt: Date | null;
  constructor(
    id: string,
    number: number,
    amountToCharge: number,
    dueDate: Date,
    createdAt: Date,
    upDatedAt: Date,
    status: string,
    paidAt: Date
  ) {
    this.id = id;
    this.number = number;
    this.amountToCharge = amountToCharge;
    this.dueDate = dueDate;
    this.createdAt = createdAt;
    this.upDatedAt = upDatedAt;
    this.status = status;
    this.paidAt = paidAt;
  }

  paidInstallment = (): void => {
    if (this.status !== 'paid') {
      (this.status = 'PAID'), (this.paidAt = new Date());
    }
  };
}
const loan = new Loan(
  '0123',
  'CREDIT_CERTIFICATE',
  15,
  new Date(2021, 12, 10),
  new Date(2021, 12, 10),
  new Date(2021, 12, 10),
  [],
  10
);
loan.createInstallmentPlan(10000, 10, 1.2);
console.log(loan.installments);
