import React from 'react'
import Sidebar from '../../component/sidebar/Sidebar'
import './Home.css' 
export const Home = () => {
  return (
    <>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-2'>
            <Sidebar />
          </div>
          
          <div className='col-10'>
            <div className="row">
              <div className="col-6">
                <div className="main">
                  <h5 className="act pt-3 pl-4">Course Activity</h5>
                  <h6 className='date pl-4'>12 Dec, 2024</h6>
                  <img className='ml-3 emoji' src='../../emoji.png' height={80} width={80}></img>
                  <p className='para pl-4'>You don’t have any courses assigned yet. Talk to your coordinator.</p>
                  <div className='red_box'>
                    <div className='row'>
                      <div className='col-3'>
                        <i class="fa-brands fa-java java pl-2 pt-2"></i>
                      </div>
                      <div className='col-6'>
                        <h6 className='java1 pt-1 '>Java Programming</h6>
                        <p className='java2'>Complete the java programming
                          tutorial at the earlier</p>
                      </div>
                      <div className='col-3'>
                        <p className='date2 pt-2 mt-2 pl-2 '>12%</p>
                      </div>
                    </div>

                    <div className='row'>
                      <div className='col-8'>
                        <div className="progress-bar-container ml-4">
                          <div
                            className="progress-bar"
                            style={{ width: `${75}%` }}
                          ></div>
                        </div>
                      </div>
                      <div className='col-4'>
                        <p className='resume'>Resume <i className="fa-solid fa-arrow-right-long"></i>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='purple_box mt-2'>
                    <div className='row'>
                      <div className='col-2'>
                        <i class="fa-brands fa-java java pl-2 pt-2"></i>
                      </div>
                      <div className='col-7'>
                        <h6 className='java1 pl-2 pt-1'>Flutter Devevolpment</h6>
                        <p className='java2 pl-3'>Complete the java programming
                          tutorial at the earlier</p>
                      </div>
                      <div className='col-3'>
                        <p className='date2 pt-2 pl-2 ml-1 mt-2 '>0%</p>
                      </div>
                    </div>

                    <div className='row'>
                      <div className='col-8'>
                        <div className="progress-bar-container2 ml-4">
                          <div
                            className="progress-bar"
                            style={{ width: `${75}%` }}
                          ></div>
                        </div>
                      </div>
                      <div className='col-4'>
                        <p className='resume'>Start <i className="fa-solid fa-arrow-right-long"></i>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='yellow_box mt-2'>
                    <div className='row'>
                      <div className='col-2'>
                        <i class="fa-brands fa-java java pl-2 pt-2"></i>
                      </div>
                      <div className='col-7'>
                        <h6 className='java1 pl-2 pt-1'>Flutter Development</h6>
                        <p className='java2 pl-2'>Complete the java programming
                          tutorial at the earlier</p>
                      </div>
                      <div className='col-3'>
                        <p className='date2 pt-2 mt-2 pl-2 '>0%</p>
                      </div>
                    </div>

                    <div className='row'>
                      <div className='col-8'>
                        <div className="progress-bar-container3 ml-4 ">
                          <div
                            className="progress-bar"
                            style={{ width: `${75}%` }}
                          ></div>
                        </div>
                      </div>
                      <div className='col-4'>
                        <p className='resume'>Start <i className="fa-solid fa-arrow-right-long"></i>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-6">
                <div className="main2">
                  <div className="row profile">
                    <div className="col-7">
                      <p><i class="fa-regular fa-bell bel"></i>
                      </p>
                    </div>
                    <div className="col-5">
                      <div className="d-flex">
                        <img className="buisness_man rounded-3" src="../../buisness man" height={40} width={40}></img>
                        <p className="text">Raosaheb Ghuge <span className="student">student</span></p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h6 className="assignment pt-2">Assignments</h6>
                    <p className="para2">All the assigned test to you, and your score.</p>
                  </div>
                  <div className="row">
                    <div className="col-2">
                      <div>
                        <i className="fa-brands fa-atlassian text-light fs-5 page_icon"></i>
                      </div>
                    </div>
                    <div className="col-10">
                      <div>
                        <h6 className="heading">Flutter Weekly Test - Dart Language</h6>
                        <p className="sub_heading">Target Completion Date: 12/03/2024</p>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-2">
                      <div className="">
                        <i className="fa-brands fa-java text-light fs-5 page_icon2"></i>
                      </div>
                    </div>
                    <div className="col-10">
                      <div className="">
                        <h6 className="heading">Java Language Test</h6>
                        <p className="sub_heading">Target Completion Date: 12/03/2024</p>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-2">
                      <div>
                        <i className="fa-brands fa-react text-dark fs-5 page_icon3"></i>
                      </div>
                    </div>
                    <div className="col-10">
                      <div>
                        <h6 className="heading">JavaScript & React Angular Test for Your next Exam</h6>
                        <p className="sub_heading">Target Completion Date: 12/03/2024</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h6 className="assignment2">Calendar & Schedule</h6>
                    <p className="para3">All your updates and calendar activities</p>
                  </div>
                  <div className="box">
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>
    </>
  )
}

export default Home;