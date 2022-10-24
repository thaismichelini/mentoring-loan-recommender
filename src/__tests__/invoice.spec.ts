import { Invoice } from '../domain/Invoice';

describe('Teste retorno Classe Invoice', () => {
  const invoice = new Invoice(
    '212',
    'abc',
    1000,
    new Date(2021, 12, 10),
    new Date(2021, 12, 10),
    true,
    [],
    'LOA-23577',
    new Date(2021, 12, 10)
  );
  it('teste atributo id', () => {
    expect(invoice.id).toBe('212');
  });
  it('teste atributo type', () => {
    expect(invoice.type).toBe('abc');
  });
  it('teste atributo amount', () => {
    expect(invoice.amount).toBe(1000);
  });
  it('teste atributo createdAt', () => {
    const data = new Date(2021, 12, 10);
    expect(data.getMonth()).toBe(invoice.createdAt.getMonth()); // expect(invoice.createdAt).toBe('2021, 12, 10'); });
    expect(data.getFullYear()).toBe(invoice.createdAt.getFullYear());
    expect(data.getDay()).toBe(invoice.createdAt.getDay());
  });
  it('teste atributo updatedAt', () => {
    const data = new Date(2021, 12, 10);
    expect(data.getMonth()).toBe(invoice.updatedAt.getMonth());
    expect(data.getFullYear()).toBe(invoice.updatedAt.getFullYear());
    expect(data.getDay()).toBe(invoice.updatedAt.getDay());
  });
  it('teste atributo expired', () => {
    expect(invoice.expired).toBeTruthy();
  });
  it('teste função checkIfExpired', () => {
    const validationCheckIfExpired = invoice.checkIfExpired();
    expect(validationCheckIfExpired).toBeTruthy();
  }); //falhou
});
