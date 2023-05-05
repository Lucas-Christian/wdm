import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();

export async function createSingleRecord() {
  const user = await prisma.user.create({
    data: {
      email: "share.this.course@gmail.com",
      name: "O Curso"
    }
  });
  return user;
}

export async function createManyRecords() {
  const users = [
    { email: "preula@gmail.com", name: "Eitcha" },
    { email: "eita@gmail.com", name: "Cavalo" },
    { email: "lord@outlook.com", name: "Uii" },
    { email: "cleiton@gmail.com", name: "Pedro" },
    { email: "luch@gmail.com", name: "Luch" }
  ];
  for(let user of users) {
    try {
      await prisma.user.create({
        data: user
      });
    } catch(err) {
      console.log("Falha ao criar usuários");
    }
  }
}

export async function findSingleRecord(email: string) {
  const user = await prisma.user.findUnique({
    where: {
      email: email
    }
  });
  return user;
}

export async function findAllRecords() {
  return await prisma.user.findMany();
}

export async function updateSingleRecord(email: string, newName: string) {
  const user = await prisma.user.update({
    where: { 
      email: email
    },
    data: {
      name: newName
    }
  });
  return user;
}

export async function updateManyRecords() {
  await prisma.user.updateMany({
    where: {
      email: {
        contains: "@gmail.com"
      }
    },
    data: {
      name: "HU3HU3HU3"
    }
  });
}

export async function updateOrCreate(email: string, name: string) {
  await prisma.user.upsert({
    where: {
      email: email
    }, 
    create: {
      email: email,
      name: name
    },
    update: {
      name: name
    }
  });
}

export async function deleteSingleRecord(email: string) {
  await prisma.user.delete({
    where: {
      email: email
    }
  });
}

export async function deleteManyRecords() {
  await prisma.user.deleteMany({
    where: {
      email: {
        contains: "@gmail.com"
      }
    }
  });
}

export async function deleteAllRecords() {
  await prisma.user.deleteMany({});
}