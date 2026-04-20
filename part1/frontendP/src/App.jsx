import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import SignupPage from '../Components/SignupPage';
import LoginPage from '../Components/LoginPage';
import DashBoard from '../Components/DashBoard';
function App() {
  return(
    
    <BrowserRouter>
      <Routes>
        <Route path='/signup' element={<SignupPage/>}></Route>
        <Route path='/login' element={<LoginPage/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
