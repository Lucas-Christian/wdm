import { describe, test, vi, expect } from "vitest";
import { calculadora } from "./calculadora";
import * as math from "./math";

describe("#calculadora", () => {
  test("calculadora", () => {
    // Faz o mocking da função soma do módulo math
    const mockSoma = vi.spyOn(math, "soma").mockReturnValue(3);
  
    // Chama a função calculadora
    const resultado = calculadora(1, 2);
  
    // Verifica se a função soma foi chamada com os argumentos corretos
    expect(mockSoma).toHaveBeenCalledWith(1, 2);
  
    // Verifica se o resultado da função calculadora está correto
    expect(resultado).toBe(3);
  });
});