const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  const user1 = await prisma.user.create({
    data: {
      email: "john.doe@example.com",
      name: "John Doe",
      profile: {
        create: {
          bio: "Software developer with a passion for open-source projects.",
        },
      },
      posts: {
        create: [
          {
            title: "First Post",
            content: "This is the content of the first post.",
            published: true,
          },
          {
            title: "Second Post",
            content: "This is the content of the second post.",
            published: false,
          },
        ],
      },
    },
  });

  const user2 = await prisma.user.create({
    data: {
      email: "jane.doe@example.com",
      name: "Jane Doe",
      profile: {
        create: {
          bio: "An avid reader and writer.",
        },
      },
      posts: {
        create: [
          {
            title: "Jane's First Post",
            content: "Content for Jane's first post.",
            published: true,
          },
        ],
      },
    },
  });

  console.log({ user1, user2 });
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
