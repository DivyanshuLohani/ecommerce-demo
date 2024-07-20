const { PrismaClient } = require("@prisma/client");
const { faker } = require("@faker-js/faker");

const prisma = new PrismaClient();

async function main() {
  console.log("Starting Seed");
  const categories = Array.from({ length: 100 }).map(() => ({
    name: faker.commerce.department(),
  }));

  await prisma.category.createMany({
    data: categories,
    skipDuplicates: true,
  });

  console.log("Seeded 100 categories");
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
