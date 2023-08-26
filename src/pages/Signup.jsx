import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
}
  from 'mdb-react-ui-kit';

function App() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(
{
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  }
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post(
        "https://ismmart-dd9fd21491a7.herokuapp.com/Signup",
        {
          name: formData.name,
          email: formData.email,
          password: formData.password,
          confirmPassword: formData.confirmPassword,
        }
      );

      console.log("Registration successful:", response.data);
      alert("Registration successful");
      navigate("/");
    } catch (error) {
      console.error("Registration error:", error);
      alert("Registration not successfull");
    }
  };

  return (
    <MDBContainer fluid>

      <MDBCard className='text-black m-5' style={{ borderRadius: '25px' }}>
        <MDBCardBody>
          <MDBRow>
          
            <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>
            <form onSubmit={handleSubmit}>
              <div className="d-flex flex-row align-items-center mb-4">
                <h1 classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign Up</h1>
              </div>
              <div className="d-flex flex-row align-items-center mb-4 ">
                <MDBIcon fas icon="user me-3" size='lg' />
                <MDBInput label='Your Name' id='name' type='name' name='name' className='w-100' value={formData.name}
            onChange={handleChange} required /></div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="envelope me-3" size='lg' />
                <MDBInput label='Your Email' id='email' type='email' name='email' value={formData.email}
            onChange={handleChange} required /></div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="lock me-3" size='lg' />
                <MDBInput label='Password' id='password' type='password' name='password' value={formData.password}
            onChange={handleChange} required /></div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="key me-3" size='lg' />
                <MDBInput label='Repeat your password' id='confirmPassword' type='cofirmPassword' name='confirmPassword' value={formData.confirmPassword}
            onChange={handleChange} required /></div>

              <div className='mb-4'>
              <p>
               <Link to="/">if already have an account then click here</Link>
              </p>
              </div>

              <MDBBtn className='mb-4' size='lg'>Register</MDBBtn>
              </form>
            </MDBCol>
            <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
              <MDBCardImage src='https://www.safagold.com/wp-content/uploads/2023/01/ismmart.jpg' fluid />
            </MDBCol>

          </MDBRow>
        </MDBCardBody>
      </MDBCard>

    </MDBContainer>
  );
}

export default App;

