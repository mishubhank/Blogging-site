import React from 'react'
import { useNavigate } from 'react-router-dom'
 
const Header = () => {
   const navigate=useNavigate() ;
  const handleclick=()=>{
  navigate('/new-story');
  

  }

  return (
    <>  
      <div className='w-full  
         bg-slate-500 flex-col  justify-center  '> 
        <div className='flex flex-row items-center bg-yellow-10'>
          <div className='pt-2 pl-4 font-serif font-bold text-3xl flex-grow'> Medium </div> 
          
          {/* Center the search bar */}
          <div className='flex flex-row justify-center items-center flex-grow h-20'>
            <form className="max-w-md">   
              <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
              <div className="relative">
                <div className="flex px-4 py-1 rounded-3xl border-2 border-slate-200 overflow-hidden max-w-md mx-auto font-[sans-serif]">
                  <input type="text" placeholder="Search "
                    className="w-full outline-none bg-transparent text-gray-600 text-sm" />
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192.904 192.904" width="16px" className="fill-gray-600">
                    <path
                      d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z">
                    </path>
                  </svg>
                </div>
              </div>
            </form>  
          </div>

          {/* Align the buttons to the right */}
          <div className='flex flex-row items-center'>
            <h2 className='mr-10 px-10 '> 
           <svg onClick={handleclick} width="25px" height="25px" viewBox="0 0 24.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg" transform="matrix(1, 0, 0, 1, 0, 0)" stroke="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path opacity="0.5" d="M22 10.5V12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2H13.5" stroke="#000000" stroke-width="0.648" stroke-linecap="round"></path> <path d="M17.3009 2.80624L16.652 3.45506L10.6872 9.41993C10.2832 9.82394 10.0812 10.0259 9.90743 10.2487C9.70249 10.5114 9.52679 10.7957 9.38344 11.0965C9.26191 11.3515 9.17157 11.6225 8.99089 12.1646L8.41242 13.9L8.03811 15.0229C7.9492 15.2897 8.01862 15.5837 8.21744 15.7826C8.41626 15.9814 8.71035 16.0508 8.97709 15.9619L10.1 15.5876L11.8354 15.0091C12.3775 14.8284 12.6485 14.7381 12.9035 14.6166C13.2043 14.4732 13.4886 14.2975 13.7513 14.0926C13.9741 13.9188 14.1761 13.7168 14.5801 13.3128L20.5449 7.34795L21.1938 6.69914C22.2687 5.62415 22.2687 3.88124 21.1938 2.80624C20.1188 1.73125 18.3759 1.73125 17.3009 2.80624Z" stroke="#000000" stroke-width="0.648"></path> <path opacity="0.5" d="M16.6522 3.45508C16.6522 3.45508 16.7333 4.83381 17.9499 6.05034C19.1664 7.26687 20.5451 7.34797 20.5451 7.34797M10.1002 15.5876L8.4126 13.9" stroke="#000000" stroke-width="0.648"></path> </g></svg>
            </h2>
            <h2 className='mr-10 px-10 bg-white'> 
              signup
            </h2>
          </div>
        </div>
      </div>    
    </>
  )
}

export default Header
