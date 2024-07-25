import { useState } from 'react';
import './Sidebar.css';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
   const [isNotActive, setNotActive] = useState(true);
   const [activeLink, setActiveLink] = useState(null);

   const toggleActive = () => {
      setNotActive(!isNotActive);
   };

   const getLinkClass = (link) => {
      return activeLink === link ? 'active-link' : 'inactive-link';
   };

   const handleLinkClick = (link) => {
      setActiveLink(link);
   };

   return (
      <div className="container-fluid">
         <div className="row">
            <div className='col-2'>
               <div className=''>
                  <img className="image" src="../../logo.png" height={35} width={200} alt="Logo" />
               </div>
               <div className={`sidebar d-flex ${isNotActive ? "active" : ""}`} onClick={toggleActive}>
                  <div className="pt-5">
                     <p><i className="fa-solid fa-chalkboard learnicon"></i></p>
                     <p><i className="fa-solid fa-computer-mouse mouse pl-2 learnicon"></i></p>
                     <p><i className="fa-solid fa-book-open book pl-2 learnicon"></i></p>
                     <p><i className="fa-regular fa-circle-check check pl-2 learnicon"></i></p>
                     <p><i className="fa-regular fa-file file pl-2 learnicon"></i></p>
                     <p><i className="fa-regular fa-clock clock pl-2 learnicon"></i></p>
                     <p><i className="fa-regular fa-calendar calender pl-2 learnicon"></i></p>
                  </div>

                  <div className="pl-3 sidebartext">
                     <NavLink
                        // className={({ isActive }) => isActive ? 'active-link' : 'inactive-link'}
                        style={{ textDecoration: "none" }}
                        to="/learn"
                        onClick={() => handleLinkClick('/learn')}
                     >
                        <p className={`cource pt-5 ${getLinkClass('/learn')}`}>Learning</p>
                     </NavLink>
                     <NavLink
                        // className={({ isActive }) => isActive ? 'active-link' : 'inactive-link'}
                        style={{ textDecoration: "none" }}
                        to="/assigment"
                        onClick={() => handleLinkClick('/assigment')}
                     >
                        <p className={`cource pt-1 ${getLinkClass('/assigment')}`}>Assignments</p>
                     </NavLink>
                     <p
                        className={`cource pt-1 ${getLinkClass('/my-cource')}`}
                        onClick={() => handleLinkClick('/my-cource')}
                     >
                        My Course
                     </p>
                     <p
                        className={`cource pt-1 ${getLinkClass('/exams')}`}
                        onClick={() => handleLinkClick('/exams')}
                     >
                        Exams
                     </p>
                     <p
                        className={`cource pt-1 ${getLinkClass('/noticeboard')}`}
                        onClick={() => handleLinkClick('/noticeboard')}
                     >
                        Noticeboard
                     </p>
                     <p
                        className={`cource pt-1 ${getLinkClass('/timetable')}`}
                        onClick={() => handleLinkClick('/timetable')}
                     >
                        Timetable
                     </p>
                     <p
                        className={`cource ${getLinkClass('/calender')}`}
                        onClick={() => handleLinkClick('/calender')}
                     >
                        Calendar
                     </p>
                  </div>

                  <div className='footer_text1'>
                     <p className='punch'> Punched in @x
                        <button className='mt-2'>08:00 AM <i className="fa-solid fa-angle-right pl-5"></i></button>
                     </p>
                     <p className='footer1'>All rights reserved @ the baap company</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Sidebar;
