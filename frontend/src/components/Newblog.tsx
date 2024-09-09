import React, { useEffect, useState } from 'react';
import BlogCard from './BlogCard';
import Header from './Header';
import axios from 'axios';

// interface Blogs {
//   authorName: string;
//   title: string;
//   publishDate: string;
//   content: string;


const Newblog: React.FC = () => {
  const [Blogs, setBlogs] = useState<any>([]);

  useEffect(() => {
    const fetch = async () => {
      try {
        const token = localStorage.getItem('token'); // Assuming you stored the token in localStorage
      const res = await axios.get('http://127.0.0.1:8787/api/v1/blog/bulk', {
        headers: {
          'Authorization': `${token}` // Add this line
        }
      })
       
   console.log(res.data);    
        setBlogs(res.data);

      } catch (error) {
        console.log("ailed");
        console.error('Error fetching blogs:', error);
      }
    };

    fetch();
  }, []);


   const blogss = [
  {
    title: 'Exploring the Wonders of the Universe',
    publishDate: '2024-09-01',
    authorName: 'Jane Doe',
    content: 'In this blog, we delve into the mysteries of the cosmos, exploring the latest discoveries in astrophysics and cosmology. From black holes to dark matter, join us on a journey through the universe!'
  },
  {
    title: 'Mastering JavaScript: Tips and Tricks',
    publishDate: '2024-08-20',
    authorName: 'John Smith',
    content: 'JavaScript is a powerful and versatile language. In this post, we share some advanced tips and tricks to help you write cleaner and more efficient code. Whether you’re a beginner or an experienced developer, there’s something for everyone!'
  },
  {
    title: 'The Future of Web Development',
    publishDate: '2024-07-15',
    authorName: 'Alice Johnson',
    content: 'The web development landscape is constantly evolving. This blog post explores emerging trends and technologies that will shape the future of web development. Stay ahead of the curve with insights into the latest tools and frameworks!'
  }
];

  return (
    <div>
      <Header />
      {Blogs.map((blog:any) => (
        <BlogCard  
         title={blog.title}
         publishDate={blog.publishDate} 
         authorName={blog.authorName}
         content={blog.content}
        />
      ))}
    </div>
  );
};

export default Newblog;
