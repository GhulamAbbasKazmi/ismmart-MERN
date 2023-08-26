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
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://ismmart-dd9fd21491a7.herokuapp.com/Login",
        {
          email: formData.email,
          password: formData.password,
        }
      );

      console.log("Login successful:", response.data);
      navigate("/Home/");
      alert("Login successful");
      // Redirect or perform other actions on successful login
    } catch (error) {
      console.error("Login error:", error);
      alert("Invalid Credidentals!");
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
              <h1 classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Log In</h1>
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="envelope me-3" size='lg' />
                <MDBInput label='Your Email' id='email' type='email' name='email' value={formData.email}
            onChange={handleChange} required />
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="lock me-3" size='lg' />
                <MDBInput label='Password' id='password' type='password' name='password'  value={formData.password}
            onChange={handleChange} required />
              </div>

              <div className='mb-4'>
              <p>
               <Link to="/Signup/">Don't have an account? click here</Link>
              </p>
              </div>

              <MDBBtn className='mb-4' size='lg' type="submit">Sign In</MDBBtn>
              </form>
            </MDBCol>

            <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
              <MDBCardImage src='https://s.rozee.pk/company_logos/20/cpx_20559918713857.jpg' fluid />
            </MDBCol>

          </MDBRow>
        </MDBCardBody>
      </MDBCard>

    </MDBContainer>
  );
}

export default App;