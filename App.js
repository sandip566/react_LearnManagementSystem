import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/login/Login'
import Home from './pages/home/Home'
import VerifyOtp from './pages/verify-otp/VerifyOtp'
import Attendance from './pages/attendance/Attendance';
import Assignments from './pages/assignment/Assignment';
import Learn from './pages/learn/Learn';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />}></Route>
          <Route path='home' element={<Home />}></Route>
          <Route path='verifyotp' element={<VerifyOtp />} />
          <Route path='/attendance' element={<Attendance/>}>
          <Route path='home'element={<Home/>}></Route>
            </Route> 
          <Route path='assigment' element={<Assignments/>}></Route>
          <Route path='learn' element={<Learn/>}></Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

