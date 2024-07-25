import React from 'react'
import Sidebar from '../../component/sidebar/Sidebar'
import './Assignment.css'
function Assignments() {
    return (
        <>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-2'>
                        <Sidebar />
                    </div>
                    <div className='col-10'>

                        <div >
                            <h1 className=''>This is Assignments Page</h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Assignments;