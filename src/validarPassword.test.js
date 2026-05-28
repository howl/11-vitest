import { describe, expect, test } from "vitest";
import { validarPassword } from "./validarPassword";

describe("validarPassword()", () => {
  test("Return { valido: false, errores: ['Mensaje del error'] } when password is less than 8 characters", () => {
    const password = "123";

    const result = validarPassword(password);

    expect(result).toMatchObject({ valido: false, errores: ['Mensaje del error'] });
  });

  test("Return { valido: true, errores: [] } when password is at least 8 characters", () => {
    const password = "abcdefgh";

    const result = validarPassword(password);

    expect(result).toMatchObject({ valido: true, errores: [] });
  });
});
