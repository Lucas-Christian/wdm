import { describe, expect, test } from "vitest";
import { helloWorld } from "./index"; 

describe("#helloWorld", () => {
  test("É esperado que seja retornada a string 'Hello World!'", () => {
    expect(helloWorld()).toBe("Hello World!");
  });
});