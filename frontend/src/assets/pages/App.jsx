import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { Login } from './login';
import { Home } from './home'
import '../styles/app.css'
import { GendersPage } from './genders';
import { ErrorPage } from './errorpage';
// import { User } from './user';

function App() {
  
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route  path="/home" element={<Home/>}/>
      {/* <Route path='/myUser' element={<User/>}/> */}
      <Route path='/repertoire' element={<GendersPage/>}/>
      <Route path='*' element={<ErrorPage/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
