console.log("Environment Variables Check:");
console.log("DATABASE_URL:", process.env.DATABASE_URL ? "✓ Set" : "✗ Missing");
console.log("BETTER_AUTH_SECRET:", process.env.BETTER_AUTH_SECRET ? "✓ Set" : "✗ Missing");
console.log("BETTER_AUTH_URL:", process.env.BETTER_AUTH_URL ? "✓ Set" : "✗ Missing");
console.log("GITHUB_CLIENT_ID:", process.env.GITHUB_CLIENT_ID ? "✓ Set" : "✗ Missing");
console.log("GITHUB_CLIENT_SECRET:", process.env.GITHUB_CLIENT_SECRET ? "✓ Set" : "✗ Missing");

// Test database connection
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function test() {
  try {
    await prisma.$connect();
    console.log("\nDatabase: ✓ Connected successfully");
    
    // Try a simple query
    const result = await prisma.$queryRaw`SELECT version()`;
    console.log("Database version:", result);
    
    await prisma.$disconnect();
  } catch (error) {
    console.error("\nDatabase: ✗ Connection failed:", error);
  }
}

test();