import { describe, test, expect, beforeAll } from "vitest";
import { prisma, createSingleRecord, findSingleRecord, findAllRecords, updateSingleRecord, updateManyRecords, updateOrCreate, deleteSingleRecord, deleteManyRecords, deleteAllRecords, createManyRecords } from "./index"; 
describe("#praticando", () => {
  test("É esperado que seja criado um usuário no banco de dados sem gerar erros.", async () => {
    try {
      let user = await createSingleRecord();
      console.log(user);
      console.log("Usuário criado com sucesso.");
    } catch(err) {
      console.log("O usuário já foi criado.");
    }
  });
  test("É esperado que retorne o usuário chamado O Curso", async () => {
    try {
      let user = await findSingleRecord("share.this.course@gmail.com");
      expect(user?.name === "O Curso").toBe(true);
      console.log(user)
      console.log("Sucesso ao buscar pelo usuário");
    } catch(err) {
      console.log("Erro ao buscar pelo usuário");
    }
  });
  test("É esperado que todos os usuários sejam imprimidos no console", async () => {
    try {
      let users = await findAllRecords();
      console.log(users);
      console.log("Sucesso ao buscar por todos os usuários")
    } catch(err) {
      console.log("Falha ao buscar todos os usuários");
    }
  });
  test("É esperado que o nome seja atualizado sem erros", async () => {
    let user = await findSingleRecord("share.this.course@gmail.com");
    console.log(user!.name);
    await updateSingleRecord("share.this.course@gmail.com", "O CURSO");
    user = await findSingleRecord("share.this.course@gmail.com");
    console.log(user!.name);
  });
  test("É esperado que vários nomes sejam atualizados sem erros", async () => {
    console.log(await findAllRecords());
    await updateManyRecords();
    console.log(await findAllRecords());
  });
  test("É esperado que o nome tente ser atualizado, caso não exista, ele cria.", async () => {
    await updateOrCreate("teste@teste.com", "Teste");
    console.log(await findSingleRecord("teste@teste.com"));
    await updateOrCreate("teste@teste.com", "Testando");
    console.log(await findSingleRecord("teste@teste.com"));
  });
  test("É esperado que exclua um registro", async () => {
    let user = await findSingleRecord("share.this.course@gmail.com");
    console.log(user!.name);
    await deleteSingleRecord("share.this.course@gmail.com");
    expect(await findSingleRecord("share.this.course@gmail.com")).toBe(null);
  });
  test("É esperado que exclua vários registros", async () => {
    await createManyRecords();
    try {
      expect(
        (await prisma.user.findMany({
          where: {
            email: {
              contains: "@gmail.com"
            }
          }
        })) !== null
      ).toBe(true);
      await deleteManyRecords();
      expect(
        await prisma.user.findMany({
          where: {
            email: {
              contains: "@gmail.com"
            }
          }
        })
      ).toBe(null);
    } catch(err) {
      console.log("Erro ao tentar deletar todos os registros");
    }
  });
  test("É esperado que exclua todos os registros", async () => {
    await createManyRecords();
    let users = await findAllRecords();
    await deleteAllRecords();
    users = await findAllRecords();
    expect(users.length === 0).toBe(true);
  });
});