import { PrismaClient } from '@prisma/client/edge';

export const initPrisma = async (env: any) => {
  return new PrismaClient({
    datasources: {
      db: {
        url: env.DATABASE_URL,
      },
    },
  });
};
