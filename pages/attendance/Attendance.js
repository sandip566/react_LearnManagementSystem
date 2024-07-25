import React from "react";
import './Attendance.css'
import Footer from "../../component/footer/Footer";
import Header from "../../component/header/Header";
import { Link } from "react-router-dom";
const Attendance = () =>{
    return(
        <>
          <div className ='container-fluid'>
            <div className="row">
                <div className="col-lg-2 col-sm-12 col-md-4 ">
                    <Header/>
            </div>
            </div>
            <div className="titletext row ml-3"> 
            <div className="col-lg-1 col-sm-12 col-md-12 ml-5"></div>
            <div className="col-lg-6 col-sm-12 col-md-12">
            <h1 className="title">Good Morning,</h1>
            <h2 className="Text">What are you going to learn today? </h2>
            <p className="text1 pt-4">Mark your Attendance</p>
            <Link className="" to="/home"><button className="bt pl-3">Web Check In <i class="fa-solid fa-angle-right text-white icon float-end me-2 pt-1"></i></button></Link>
            </div> 
            <div className="col-5"></div>
    </div> 
        </div>
        <div>
          <div>
        <Footer/>
        </div>
        </div>
        
        </>
    )
}
export default Attendance ;