export class Animal {
  nome: String;
  especie: String;
  classe: String;
  genero: String;

  constructor(nome: String, especie: String, classe: String, genero: String) {
    this.nome = nome;
    this.especie = especie;
    this.classe = classe;
    this.genero = genero;
  }

  emitirSom = (): void => {};
}

export class Mamifero extends Animal {
  pelagem: String;

  constructor(
    nome: String,
    especie: String,
    classe: String,
    genero: String,
    pelagem: String
  ) {
    super(nome, especie, classe, genero);
    this.pelagem = pelagem;
  }
}

export class Cachorro extends Mamifero {
  raca: String;

  constructor(
    nome: String,
    especie: String,
    classe: String,
    genero: String,
    pelagem: String,
    raca: String
  ) {
    super(nome, especie, classe, genero, pelagem);
    this.raca = raca;
  }

  override emitirSom = (): void => {
    console.log('Au au au!');
  };
}
