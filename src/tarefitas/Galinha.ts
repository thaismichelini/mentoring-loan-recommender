import { Animal } from './Animal';

export class Ave extends Animal {
  corPenas: String;
  tipoBico: String;
  voa: Boolean;

  constructor(
    nome: String,
    especie: String,
    classe: String,
    genero: String,
    corPenas: String,
    tipoBico: String,
    voa: Boolean
  ) {
    super(nome, especie, classe, genero);
    this.corPenas = corPenas;
    this.tipoBico = tipoBico;
    this.voa = voa;
  }

  voar = (): void => {
    if (this.voa) {
      console.log('Voando');
    } else {
      console.log('Esta espécie de ave não voa');
    }
  };
}
export class Galinha extends Ave {
  idade: Number;
  botaOvos: Boolean;

  constructor(
    nome: String,
    especie: String,
    classe: String,
    genero: String,
    corPenas: String,
    tipoBico: String,
    voa: Boolean,
    idade: number,
    botaOvos: Boolean
  ) {
    super(nome, especie, classe, genero, corPenas, tipoBico, voa);
    this.idade = idade;
    this.botaOvos = botaOvos;
  }
  override emitirSom = (): void => {
    console.log('Cócóricóóoóó');
  };
  teremosPanquecas = (): void => {
    this.idade >= 1 && this.genero === 'galinha';
    this.botaOvos = true;
  };
}

export class Pato extends Galinha {
  nada: Boolean;

  constructor(
    nome: String,
    especie: String,
    classe: String,
    genero: String,
    corPenas: String,
    tipoBico: String,
    voa: Boolean,
    idade: number,
    botaOvos: Boolean,
    nada: Boolean
  ) {
    super(
      nome,
      especie,
      classe,
      genero,
      corPenas,
      tipoBico,
      voa,
      idade,
      botaOvos
    );
    this.nada = nada;
  }

  nadar = (): void => {
    if ((this.nada = true)) {
      console.log('É uma ave aquática');
    } else {
      console.log('É uma galinha');
    }
  };
}

export class Ganso extends Pato {
  pescocoLongo: Boolean;
  constructor(
    nome: String,
    especie: String,
    classe: String,
    genero: String,
    corPenas: String,
    tipoBico: String,
    voa: Boolean,
    idade: number,
    botaOvos: Boolean,
    nada: Boolean,
    pescocoLongo: Boolean
  ) {
    super(
      nome,
      especie,
      classe,
      genero,
      corPenas,
      tipoBico,
      voa,
      idade,
      botaOvos,
      nada
    );
    this.pescocoLongo = pescocoLongo;
  }
  override emitirSom = (): void => {
    console.log('quá, quá, quá');
  };
}
