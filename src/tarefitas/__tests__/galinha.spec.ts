// nvm use 14.15.0
import { Galinha, Pato } from '../Galinha';

describe('Testando a Classe Galinha', () => {
  const novaGalinha = new Galinha(
    'Doralice',
    'deliciosa',
    'liberal',
    'galinha',
    'preta',
    'fino',
    false,
    1,
    true
  );
  it('Vamos ver se Cacareja', () => {
    const elaFala = novaGalinha.emitirSom();
    expect(elaFala).toEqual('Cócóricóóoóó');
  });
  it('Vamos ver galinha não voa', () => {
    expect(novaGalinha.voa).toBe(false);
  });
  it('Vamos testar a função voar na galinha', () => {
    expect(novaGalinha.voar).toBeFalsy();
  }); //falhou
});

describe('Testando a Classe Pato', () => {
  const novoPato = new Pato(
    'Patinhas',
    'patati',
    'patata',
    'pato',
    'branco',
    'redondo',
    true,
    10,
    false,
    true
  );

  it('Vamos ver se sabe nadar', () => {
    expect(novoPato.nadar).toBeTruthy();
  });

  it('Vamos ver se o pato voa', () => {
    expect(novoPato.voar).toBeTruthy();
  });
});
