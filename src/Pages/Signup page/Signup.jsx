import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
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
    MDBTypography,
  }
  from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';



function Signup() {


  const validationSchema = Yup.object().shape({
    name: Yup.string() .min(3, 'Username must be at least 3 characters').required('Name is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    mobile: Yup.string().matches(/^[6-9]\d{9}$/, 'Mobile number is not valid').required('Mobile number is required'),
    branch: Yup.string() .min(3, 'at least 3 characters').required('Branch is required'),
  });

  // Form Submission Handler
  const handleSubmit = (values) => {
    console.log(values);
  };


  return (
  
    <MDBContainer fluid className='w-100 bg-dark' >
    <MDBCard className='text-black w-100 bg-info'> 
      <MDBCardBody className='w-100 bg-danger w-100'>
        <MDBTypography tag="h3" className="text-center mb-4">Profile</MDBTypography>
        <MDBRow>
          <MDBCol md='12' lg='8' className='order-2 order-lg-1 d-flex flex-column align-items-center'>
            <Formik
              initialValues={{ name: '', email: '', mobile: '', branch: '' }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ handleChange, handleBlur, values }) => (
                <Form>
                  {/* Name Field */}
                  <div className="d-flex flex-row align-items-center mb-4">
                    <MDBIcon fas icon="user me-3" size='lg' />
                    <Field
                      as={MDBInput}
                      name="name"
                      label="Name"
                      id="name"
                      type="text"
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      style={{ width: '100%' }} 
                    />
                    <ErrorMessage name="name" component="div" className="text-danger fs-6" />
                  </div>

                  {/* Email Field */}
                  <div className="d-flex flex-row align-items-center mb-4">
                    <MDBIcon fas icon="envelope me-3" size='lg' />
                    <Field
                      as={MDBInput}
                      name="email"
                      label="Email"
                      id="email"
                      type="email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      style={{ width: '100%' }} 
                    />
                    <ErrorMessage name="email" component="div" className="text-danger fs-6" />
                  </div>

                  {/* Mobile Field */}
                  <div className="d-flex flex-row align-items-center mb-4">
                    <MDBIcon fas icon="mobile-alt me-3" size='lg' />
                    <Field
                      as={MDBInput}
                      name="mobile"
                      label="Mobile"
                      id="mobile"
                      type="tel"
                      value={values.mobile}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      style={{ width: '100%' }}  
                    />
                    <ErrorMessage name="mobile" component="div" className="text-danger fs-6" />
                  </div>

                  {/* Branch Field */}
                  <div className="d-flex flex-row align-items-center mb-4">
                    <MDBIcon fas icon="map-marker-alt me-3" size='lg' />
                    <Field
                      as={MDBInput}
                      name="branch" 
                      label="Branch"
                      id="branch"
                      type="text"
                      value={values.branch}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      style={{ width: '100%' }}
                    />
                    <ErrorMessage name="branch" component="div" className="text-danger fs-6" />
                  </div>

                  <MDBBtn type='submit' className='mb-4' size='sm'>Save</MDBBtn>
                </Form>
              )}
            </Formik>
          </MDBCol>
        </MDBRow>
      </MDBCardBody>
    </MDBCard>
  </MDBContainer>

  )
}

export default Signup
