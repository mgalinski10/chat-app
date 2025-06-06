import prisma from '../src/utils/prisma-client';

async function main() {
  await prisma.user.createMany({
    data: [
      {
        email: 'jk@gmail.com',
        firstName: 'Jan',
        lastName: 'Kowalski',
        password: 'admin',
      },
      {
        email: 'an@gmail.com',
        firstName: 'Adam',
        lastName: 'Nowak',
        password: 'admin',
      },
      {
        email: 'mw@gmail.com',
        firstName: 'Maria',
        lastName: 'Wójcik',
        password: 'admin',
      },
      {
        email: 'tb@gmail.com',
        firstName: 'Tomasz',
        lastName: 'Bąk',
        password: 'admin',
      },
    ],
    skipDuplicates: true,
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
