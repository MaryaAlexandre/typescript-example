import { fatorial } from '../src/fatorial';

describe('Função fatorial', () => {
  it('deve retornar 1 para 0', () => {
    expect(fatorial(0)).toBe(1);
  });

  it('deve retornar 120 para 5', () => {
    expect(fatorial(5)).toBe(120);
  });

  it('deve lançar erro para número negativo', () => {
    expect(() => fatorial(-3)).toThrow('Número deve ser não negativo');
  });
});
