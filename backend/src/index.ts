import { Prisma, PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'

import { Hono } from 'hono'
import { decode, sign, verify } from 'hono/jwt';
import { userRouter } from './routes/userRouter';
 import { blogRouter } from './routes/blog';
import { cors } from 'hono/cors';

  

const app = new Hono<{
	Bindings: {
		DATABASE_URL: string,
    JWT_SECRET:string 
	}
}>();
app.use("*", cors({
  origin:"*"
}))
// const app= new Hono();
  app.route('api/v1/user',userRouter);
 app.route('api/v1/blog',blogRouter)
 console.log("util here workd")


//  app.post('/api/v1/user/signup', async(c)=>{
 

// const prisma = new PrismaClient({
//     datasourceUrl: c.env.DATABASE_URL,
// }).$extends(withAccelerate())

//  const body = await c.req.json(); 
//  try{ 

//  const user=await prisma.user.create({
//   data:{
//      name:body.name,
//     email:body.email,
//     password:body.password
//   },
// }) 
// const jwt= await sign({id:user.id},c.env.JWT_SECRET)
// return c.text('hello hono'); 
// }
// catch(e){
// return c.status(403); 

// }
 

//  })


//  app.post('/api/v1/user/signin',async (c)=>{
//    //const body= await c.req.json(); 
//    const prisma = new PrismaClient({
//     datasourceUrl: c.env.DATABASE_URL,
// }).$extends(withAccelerate())
//    const body= await c.req.json();
//      const user= await prisma.user.findUnique({
//       where:{
//         id:body.id, 
//       email:body.email},

//       // password:body.password },

//      }) 
//     if (!user) {
// 		c.status(403);
// 		return c.json({ error: "user not found" });
// 	}
//      const jwt= await sign({id:user.id},c.env.JWT_SECRET)
  
      
  
//   return c.json({jwt});
  

//  })

//  app.post('/api/v1/blog', async(c)=>{
//     const prisma = new PrismaClient({
//     datasourceUrl: c.env.DATABASE_URL,
// }).$extends(withAccelerate())

//  const body = await c.req.json(); 
//  try{
//   await prisma.posts.create({
//  data:{
    
//      title:body.title,
//      content:body.content,
//      author:body.author ,
    

//  } 

//   })

//  }
// catch(e){

// }
  
//   return c.text('blog');
  

//  })
//  app.put('/api/v1/user/blog',(c)=>{
//   return c.text('put blog');
  

//  })
//  app.get('/api/v1/blog/:id',(c)=>{
//   return c.text('user/signup');
  

//  })

// app.get('/api/v1/blog/bulk', (c) => {
//   return c.text('all blog')
// })


 export default app