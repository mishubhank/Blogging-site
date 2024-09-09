import React from 'react'
import Header from './Header'

interface CardProp {
  title: string,
  content: string,
  authorName: string,
  publishDate: string
}

const BlogCard = ({ authorName, title, content, publishDate }: CardProp) => {
  return (
    <>   
      {/* <Header/>   */}
      <div className='flex flex-col w-2/3 max-w-screen-md mt-28 p-6 bg-slate-200 h-48 border-b-red-500  ml-20'>
        <div className='flex flex-row items-center mb-2'>
          <div className='mr-2'>
            <Avatar name={authorName} />
          </div>
          <div className='font-sans text-xs text-slate-500'>
            {authorName}
          </div>
          <div className='ml-4 font-sans text-xs text-slate-600'>
            {publishDate}
          </div>
        </div>
        <div className='text-left overflow-hidden text-ellipsis break-words w-full font-sans'>
          {content}
        </div>
      </div>
    </>
  )
}

const Avatar = ({ name }: { name: string }) => {
  return (
    <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
      <span className="font-medium text-gray-600 dark:text-gray-300">
        {name[0]}
      </span>
    </div>
  )
}

export default BlogCard
