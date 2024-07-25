import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './VerifyOtp.css';
import Header from "../../component/header/Header";
import Footer from "../../component/footer/Footer";
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Import eye and slash icons from react-icons/fa

const CustomCloseButton = ({ closeToast }) => (
  <button className="custom-close-button" onClick={closeToast}>
    &times;
  </button>
);

function VerifyOtp() {
  const [otp, setOtp] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showOtp, setShowOtp] = useState(false); // State to control showing/hiding OTP input
  const location = useLocation();
  const navigate = useNavigate();
  const phoneNumber = location.state?.phoneNumber;

  useEffect(() => {
    if (!phoneNumber) {
      navigate("/login"); // Redirect to login if no phone number is provided
    }
  }, [phoneNumber, navigate]);

  const handleChange = (e) => {
    const value = e.target.value;
    if (!isNaN(value) && value.length <= 6) {
      setOtp(value);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  const showToast = (message, type, backgroundColor) => {
    toast(message, {
      type: type,
      style: {
        backgroundColor: backgroundColor,
        color: 'white',
        minHeight: '50px',
        fontSize: '16px',
        paddingLeft: '30px'
      },
      className: 'custom-toast',
      closeButton: <CustomCloseButton />,
    });
  };

  const handleSubmit = async () => {
    if (otp.length === 6) {
      setIsLoading(true);

      const payload = {
        otp: parseInt(otp, 10),
        phoneNumber: phoneNumber,
      };

      try {
        const response = await fetch("https://4r4iwhot12.execute-api.ap-south-1.amazonaws.com/auth/auth/validateOtp", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        });

        if (response.ok) {
          const resp = await response.json();
          showToast('OTP Verified Successfully!', 'success', '#008000');
          localStorage.setItem("token", resp.token);
          setTimeout(() => {
            navigate("/attendance"); // Replace with the actual path to navigate to
          }, 2000);
        } else {
          showToast('Invalid OTP. Please try again.', 'error', '#FF0000');
        }
      } catch (error) {
        console.error('Error verifying OTP:', error);
        showToast('An error occurred. Please try again.', 'error', '#FF0000');
      } finally {
        setIsLoading(false);
      }
    } else {
      showToast('Invalid OTP length. Please enter a 6-digit OTP.', 'error', '#FF0000');
    }
  };

  return (
    <>
      <div className='container-fluid'>
        <div className="row">
          <div className="col-lg-2 col-sm-12 col-md-4 ">
            <Header />
          </div>
        </div>
        <div className="titletext row ml-3">
          <div className="col-lg-1 col-sm-12 col-md-12 ml-5"></div>
          <div className="col-lg-6 col-sm-12 col-md-12">
            <h1 className="title1">Good Morning,</h1>
            <h2 className="Text1">What are you going to learn today?</h2>
            <p className="text2 pt-4">Verify your OTP</p>
            <div className="inputFieldContainer" style={{ position: 'relative' }}>
              <div className="showHideIcon" onClick={() => setShowOtp(!showOtp)}>
                {showOtp ? <FaEyeSlash /> : <FaEye />} {/* Show eye or slash icon based on showOtp state */}
              </div>
              <input
                type={showOtp ? "text" : "password"} // Toggle input type based on showOtp state
                className="inputField1"
                value={otp}
                onChange={handleChange}
                maxLength={6}
                minLength={6}
                onKeyPress={handleKeyPress} // Add event listener for Enter key press
              />
              <button onClick={handleSubmit} className="otpbutton1 pt-2" disabled={isLoading}>
                <div className="verify_icon m-0 p-0">
                  {isLoading ? (
                    <i className="fa-solid fa-circle-notch fa-spin icon_right loder m-0 p-0"></i> // Loading circle
                  ) : (
                    <i className="fa-solid fa-angle-right icon_right m-0 p-0"></i>
                  )}
                </div>
              </button>
            </div>
            <p className="third5">change Login details</p>
          </div>
          <div className="col-5"></div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
      <ToastContainer />
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

export default VerifyOtp;
