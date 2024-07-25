import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from '../../component/header/Header';
import Footer from '../../component/footer/Footer';
import './Login.css';

const API = {
  apiGateway: 'https://gxppcdmn7h.execute-api.ap-south-1.amazonaws.com',
};

const CustomCloseButton = ({ closeToast }) => (
  <button className="custom-close-button" onClick={closeToast}>
    &times;
  </button>
);

function Login() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isValid, setIsValid] = useState(true);
  const [click, setClick] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handlePhoneNumberChange = (e) => {
    let value = e.target.value;
    // Filter out non-numeric characters
    value = value.replace(/\D/g, '');
    // Limit to exactly 10 digits
    value = value.slice(0, 10);
    setPhoneNumber(value);
    setIsValid(value.length === 10);
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevents the default form submission behavior
    if (isValid && phoneNumber.length === 10) {
      setClick(true);
      setIsLoading(true);
      try {
        const response = await fetch(`${API.apiGateway}/authgw/sendotp`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            phoneNumber: phoneNumber,
            groupId: 1703228300417,
          }),
        });

        if (response.ok) {
          toast.success('OTP Sent Successfully!', {
            style: {
              backgroundColor: '#008000',
              color: 'white',
              minHeight: '50px',
              fontSize: '16px',
              paddingLeft: '30px'
            },
            className: 'custom-toast',
            closeButton: <CustomCloseButton />,
          });
          setTimeout(() => {
            navigate('/verifyotp', { state: { phoneNumber: phoneNumber } });
          }, 2000);
        } else {
          toast.error('Failed To Send OTP. Please Try Again.', {
            closeButton: <CustomCloseButton />,
          });
        }
      } catch (error) {
        console.error('Error Sending OTP:', error);
        toast.error('Error Sending OTP. Please Try Again.', {
          closeButton: <CustomCloseButton />,
        });
      } finally {
        setIsLoading(false);
        setClick(false);
      }
    } else {
      toast.error('Invalid phone number. Please enter a 10-digit phone number.', {
        closeButton: <CustomCloseButton />,
      });
    }
  };

  return (
    <>
      <Header />
      <form onSubmit={handleSubmit}> {/* Wrap input field and button with a form */}
        <div className="all-text">
          <div className="margin-top">
            <div className="main-text">Good Morning,</div>
            <div className="second-text">What are you going to learn today?</div>
            <div>
              <label htmlFor="phoneNumber" className="third-text">Login to start</label>
              <div className='conten-display'>
                <div className="inputContainer">
                  <input
                    type="text"
                    id="phoneNumber"
                    value={phoneNumber}
                    onChange={handlePhoneNumberChange}
                    placeholder="Enter 10-digit phone number"
                    className={`inputField ${isValid ? '' : 'error'}`}
                  />
                  {!isValid && <p className="errorText">Please enter a 10-digit phone number.</p>}
                </div>
                <div>
                  <button type="submit" className="clickable-buttons" disabled={click || isLoading || !isValid || phoneNumber.length !== 10}>
                    {isLoading ? (
                      <i className="fa-solid fa-circle-notch loding fa-spin icon_right m-0 p-0"></i> // Loading circle
                    ) : (
                      <i className="fa-solid fa-angle-right icon_right1 m-0 p-0"></i>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        toastStyle={{ background: "#FF0000", color: "white", minHeight: "50px" }}
      />
      <style jsx>{`
        .custom-close-button {
          position: absolute;
          left: 10px;
          top: 10px; /* Align to the top */
          background: none;
          border: none;
          font-size: 20px;
          color: white;
          cursor: pointer;
        }

        .custom-toast {
          position: relative;
          padding-left: 30px; /* Add space for the close button */
        }
      `}</style>
    </>
  );
}

export default Login;
