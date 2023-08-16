import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SubHeading from '../SubHeading/SubHeading';
import './Newsletter.css';
import { useNavigate } from 'react-router-dom';

const Newsletter = () => {

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const navigate = useNavigate();

  const postData = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // console.log(name);
    // console.log(phone);
    console.log(JSON.stringify({ name, phone }));
    try{
      const response = await fetch('http://127.0.0.1:5000/booktable', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, phone })
      });
      console.log(response);
      // const data = await response.json();
      if (response.status === 422 || !response) {
        toast.error("Invalid Registration")
        console.log("No Registered")
      }
      else {
        toast.success("Success Registration")
        setTimeout(() => {
          navigate('/');
        }, 2000);
        console.log("Yes Registered")
      }
    }
    catch (error) {
      console.error("Error during form submission:", error);
      toast.error("An error occurred during submission.");
    }
    finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="app__newsletter">
      <div className="app__newsletter2">
      <div className="app__newsletter-heading">
        <SubHeading title="" />
        <h1 className="headtext__cormorant">Book Table</h1>
        <p className="p__opensans">Have a great healthy Meal!</p>
      </div>
      <ToastContainer />
    
      <form method='POST' onSubmit={postData}>
        <div className="app__newsletter-input ">
          {/* //flex__center */}
          <input type="text" name='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder='Enter Your Name' 
            autoComplete='off'
          />
          <br />
          <input type="text" name='phone'
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder='Enter Your Mobile Number' 
            autoComplete='off'
          />
        </div>
        <button
            className="custom__button"
            type="submit"
            style={{ borderRadius: '0px 1px 1px 0px' }}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Booking..." : "Book Now"}
          </button>
      </form>
      </div>
    </div>

  )
};

export default Newsletter;
