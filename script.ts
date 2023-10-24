import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // ... you will write your Prisma Client queries here
  //   const user = await prisma.user.create({
  //     data: {
  //       name: "Alice",
  //       email: "keitanamazue@gmail.com",
  //     },
  //   });

  //   const user = await prisma.user.findMany();

  //   const user = await prisma.user.create({
  //     data: {
  //       name: "Bob",
  //       email: "bob@prisma.io",
  //       posts: {
  //         create: {
  //           title: "Hello World",
  //         },
  //       },
  //     },
  //   });

  //   const usersWithPosts = await prisma.user.findMany({
  //     include: {
  //       posts: true,
  //     },
  //   });
  //   console.dir(usersWithPosts, { depth: null });

  const deleteUser = await prisma.user.delete({
    where: {
      email: "keitanamazue@gmail.com",
    },
    select: {
      email: true,
      name: true,
    },
  });

  console.log({ deleteUser });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
