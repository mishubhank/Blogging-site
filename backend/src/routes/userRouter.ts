import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';
import { sign } from "hono/jwt";

export const userRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string,
    JWT_SECRET: string
  }
}>();

// Signup route
userRouter.post('/signup', async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  
  const body = await c.req.json();
  
  try {
    // Create the user in the database with plain text password
    const user = await prisma.user.create({
      data: { 
        name: body.name,
        email: body.email,
        password: body.password, // Storing plain text password
      }
    });

    // Generate JWT token
    const token = await sign({ id: user.id }, c.env.JWT_SECRET);
    
    console.log('Generated Token:', token);
  //   localStorage.setItem('token',token);
  
    return c.json({ jwt: token });

  } catch (e) {
    console.error('Signup error:', e);
    c.status(400);
    return c.json({ message: 'Failed to sign up' });
  } finally {
    await prisma.$disconnect();
  }
});

// Signin route
userRouter.post('/signin', async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();
  
  try {
    // Find the user by email and password
    const user = await prisma.user.findUnique({
      where: {
        email: body.email,
        password: body.password, // Directly comparing plain text password
      }
    });

    if (!user) {
      c.status(403);
      return c.json({ error: "Invalid email or password" });
    }

    // Generate JWT token
    const token = await sign({ id: user.id }, c.env.JWT_SECRET);
     localStorage.setItem('token',token);
    return c.json({ jwt: token });

  } catch (e) {
    console.error('Signin error:', e);
    c.status(500);
    return c.json({ message: 'Failed to sign in' });
  } finally {
    await prisma.$disconnect();
  }
});

