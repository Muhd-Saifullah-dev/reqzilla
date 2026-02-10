import { PrismaClient } from "@prisma/client";
import { PrismaPg } from '@prisma/adapter-pg';

declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

function createPrismaClient() {
  const connectionString = process.env.DATABASE_URL!;
  
  if (process.env.NODE_ENV === 'production') {
    // Production: Direct connection
    return new PrismaClient({
      
    });
  } else {
    // Development: With adapter
    const adapter = new PrismaPg({ connectionString });
    return new PrismaClient({
      adapter,
   
    });
  }
}

// Global variable use karein taki hot reload pe naya instance na bane
const db = globalThis.prisma || createPrismaClient();

if (process.env.NODE_ENV !== 'production') {
  globalThis.prisma = db;
}

export default db;