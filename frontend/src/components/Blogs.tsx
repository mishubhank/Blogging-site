import React, { useState } from 'react'
import Header from './Header'
import axios from 'axios';
 
interface blogs{
 
  date:string,
  blog:string

}
const Blogs = () => {
     const [title,setTitle]=useState("");
    const [content,setContent]=useState("");
    //const [title,setTitle]=useState("");
    const postBlog= async()=>{
       
      const data=await axios.post("https://backend.shubhankmishra1011-b68.workers.dev/api/v1/blog",{
         title:title,
         content:content
     
        })}

  return (
    <div>
      <Header/>
      
     <div className='flex flex-col w-3/4'>
      <form  onSubmit={postBlog} className=' flex flex-col '  >
        <label htmlFor='title'>  title 
          <input
          onChange={(e)=>setTitle(e.target.value)}
           id='title'
           type='text'
          name='title'
           />
        </label>
         <label htmlFor='content'>  star typing 
          <input
          onChange={(e)=>setContent(e.target.value)}
           id='content'
           type='text'
          name='content'
           />
        </label>
    <button type='submit' >publish  </button>

      </form>
  
     </div>


    </div>
  )
}

export default Blogs