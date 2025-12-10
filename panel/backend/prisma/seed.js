import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  const hashedPassword = await bcrypt.hash('narcisa2025', 10);
  
  await prisma.user.upsert({
    where: { email: 'narcissaatelier@gmail.com' },
    update: {},
    create: {
      email: 'narcissaatelier@gmail.com',
      password: hashedPassword,
      name: 'Narcisa'
    }
  });

  // Categorías por defecto
  const categories = ['telas', 'arreglos', 'alquiler', 'publicidad', 'suministros', 'otros'];
  for (const name of categories) {
    await prisma.category.upsert({
      where: { name },
      update: {},
      create: { name }
    });
  }

  console.log('✅ Seed completado - Usuario: narcissaatelier@gmail.com');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
