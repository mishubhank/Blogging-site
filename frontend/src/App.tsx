
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Header from './components/Header'
import Signup from './components/Signup'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import Signin from './components/Signin';
import Blogs from './components/Blogs';
import Newblog from './components/Newblog';


function App() {
 
  return (
    <>
{/* <Header/> */}
<BrowserRouter>
<Routes>

<Route path='/signup' element={<Signup/>}/>
   <Route path='/signin' element={<Signin/>}/>
   <Route path='/blogs' element={<Blogs/>}/>
    <Route path='/new-story' element={<Newblog/>}/>

</Routes>
  

 <ToastContainer theme='dark' />
 </BrowserRouter>
    </>

  )
}

export default App
