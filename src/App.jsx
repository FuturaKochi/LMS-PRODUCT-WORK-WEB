import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from 'react-router-dom'
import './App.css'
import Login from "./Pages/Login page/Login"
import Signup from "./Pages/Signup page/Signup"
import Home from './Pages/Home page/Home'
import Batches from './Pages/Batches/Batches'
import Singlebatch from './Pages/SingleBatches/Singlebatch'
import Student from './Pages/Student/Student'
import Createstudent from './Pages/CreateStudent/Createstudent'
import CreateBatch from './Pages/Batches/Createbatch'
import UpdateBatch from './Pages/Batches/UpdateBatch'
import Chatbox from './Pages/Chat/Chatbox'


function App() {
  const date = new Date()
  console.log("All is well ok", date);

  const router = createBrowserRouter(createRoutesFromElements(
    <>
      <Route path='/' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/home' element={<Home />} />
      <Route path='/batch' element={<Batches />} />
      <Route path='/singlebatch/:id' element={<Singlebatch />} />
      <Route path='/student' element={<Student />} />
      <Route path='/createbatch' element={<CreateBatch />} />
      <Route path='/updatebatch/:id' element={<UpdateBatch />} />
      <Route path='/createstudent' element={<Createstudent />} />
      <Route path='/chat' element={<Chatbox />} />

   </>
  ))

  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App
