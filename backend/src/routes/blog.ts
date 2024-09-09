import { Hono } from "hono";
import { Prisma, PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'


import { decode, sign, verify } from 'hono/jwt';



export const blogRouter = new Hono<{
	Bindings: {
		DATABASE_URL: string,
    JWT_SECRET:string 
	},
  Variables:{
    userId:string
  }
}>();
blogRouter.use('/*',async(c,next)=>{
  
  const auth= c.req.header("authorization") ||""
  const user= await verify(auth,c.env.JWT_SECRET) 
  if(user){
    c.set("userId",user.id as string)
   await  next();
  }
  else { 
    c.status(403);
    return c.json({
      message:"You are not logged in"
    })
  }


})

 blogRouter.post('/', async(c)=>{
    const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
}).$extends(withAccelerate())
 
 const body = await c.req.json(); 
 const authorId=c.get("userId");
 try{
 const post=   await prisma.posts.create({
 data:{
    
     title:body.title,
     content:body.content,
     author:body.author ,
     authorId:  (authorId as string),
     publishdate: new Date().toLocaleDateString('en-CA'),
     published:true

 } 

  })
   return c.json({id:post.id}); 

 }
catch(e){   console.log(e);
  return c.status(411);   
 
}
  
  
 
 }) 

 blogRouter.put('/', async(c)=>{
    const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
}).$extends(withAccelerate())

 const body = await c.req.json(); 
 try{ 
  
   const blog= await prisma.posts.update({
    where:{
        id:body.id
    },
 data:{
    
     title:body.title,
     content:body.content,
 
  

 } 

  }) 
    console.log("done"); 
   return c.json({id:body.id}); 

 }
catch(e){
  return c.status(411);   
 
}
  
  
 
 })   
  blogRouter.get('/bulk', async(c)=>{
     const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
}).$extends(withAccelerate())
const body=c.req.json();

const blogs= await prisma.posts.findMany() 
  return c.json({ 
    blogs
   });

    
 })
 


 blogRouter.get('/:id', async(c)=>{
      const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
}).$extends(withAccelerate())
const body= await c.req.json(); 
try {
   const blog= await prisma.posts.findFirst({
      where:{
        id:body.id 
      }
     
   })
   return c.json({ blog});


}catch(e){
    
    c.status(404) 
      return c.json ( {
    message:'Err not found'
})
     
}

 })  

 