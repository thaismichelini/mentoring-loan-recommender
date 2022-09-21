class Person {
  id: string;
  name: string;
  document: number;
  email: string;
  bornDate: Date;
  civilState: string;
  address: Address;

  constructor(
    id: string,
    name: string,
    document: number,
    email: string,
    bornDate: Date,
    civilState: string,
    address: Address
  ) {
    this.id = id;
    this.name = name;
    this.document = document;
    this.email = email;
    this.bornDate = bornDate;
    this.civilState = civilState;
    this.address = address;
  }

  printPersonData = (
    id: string,
    name: string,
    document: number,
    email: string,
    bornDate: Date,
    civilState: string,
    street: string,
    complement: string,
    cep: string,
    city: string,
    state: string
  ) => {
    `${this.id} ${this.name} ${this.document} ${this.email} ${this.bornDate} ${this.civilState} ${this.street} ${this.cep} ${this.cidade} ${this.state}`;
  };

  getDocument = () => this.document;
}

class Address {
  street: string;
  complement: string;
  cep: Number;
  city: string;
  state: string;

  constructor(street, complement, cep, city, state) {
    this.street = street;
    this.complement = complement;
    this.cep = cep;
    this.city = city;
    this.state = state;
  }
}

const person = new Person(
  '0214',
  'Bernardo',
  3587994,
  'be@bernardo.com',
  '2018-01-19',
  'solteiro',
  Address
);

person.printPersonData(
  '0214',
  'Bernardo',
  3587994,
  'be@bernardo.com',
  '2018-01-19',
  'solteiro',
  'Rua Carlos Gomes',
  'ap12',
  '09715130',
  'SBC',
  'SP'
);
person.getDocument();
exports.person = person;

console.log(person.getDocument());
console.log(person);
