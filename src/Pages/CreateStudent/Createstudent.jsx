import React from 'react';
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBRadio,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem,
    MDBTextArea,
    MDBIcon
  }
  from 'mdb-react-ui-kit';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Navsection2 = styled.div`
   display: flex;
   padding: 7px;
   height: auto;
   align-items: center;
   z-index: 99;
   /* background: linear-gradient(135deg, #411B66, #8B4CAF); */
   background: linear-gradient(135deg, rgba(65, 27, 102, 1), rgba(65, 27, 102, 0));
   border-radius: 10px 10px 0 0;
   justify-content: space-between;
   margin-bottom: 25px;
   position: sticky;
   top: 0;
`
const Leftside2 = styled.div`
  display: flex;
  width: 40%;
  align-items: center;
  justify-content: space-around;
 margin-left: 67px;

`
const Rightside2 = styled.div`
width: 40%;
  display: flex;
  color: #ffffff;
  align-items: center;
  justify-content: flex-end;
  margin-right: 67px;

`
const Titles = styled.div`
  display: flex;
  flex-direction: row;
 align-items: center;
justify-content: center;
margin-left:3%;
margin-right: 3%;
font-family: "Space Grotesk", sans-serif;
  font-optical-sizing: auto;
  font-weight:400; /* Default weight can be set here */
  font-style: normal;
`
const Mdbcontainer=styled(MDBContainer)`
     background: linear-gradient(135deg, rgba(65, 27, 102, 1), rgba(65, 27, 102, 0));
     height: 100vh;
     overflow-x: scroll;
     font-family: "Space Grotesk", sans-serif;
  font-optical-sizing: auto;
  font-weight:300; /* Default weight can be set here */
  font-style: normal;

`

const Createstudent = () => {
  return (
<Mdbcontainer fluid>
<Navsection2>
        <Leftside2>
        </Leftside2>
        <Rightside2>

<Titles>
  <MDBIcon fas icon="home" size='sm' />
  <Link style={{ textDecoration: "none", fontSize: '12px', color: "#ffffff", margin: "3px" }} to={'/home'}>Home</Link>
</Titles>
<Titles>
  <MDBIcon fas icon="graduation-cap" size='sm' />
  <Link style={{ textDecoration: "none", fontSize: '12px', color: "#ffffff", margin: "3px" }} to={'/student'}>Student</Link>
</Titles>
<Titles>
  <MDBIcon fas icon="book-reader" size='sm' />
  <Link style={{ textDecoration: "none", fontSize: '12px', color: "#ffffff", margin: "3px" }} to={'/#'}>Mentor</Link>
</Titles>
<Titles>
  <MDBIcon fas icon="users" size='sm' />
  <Link style={{ textDecoration: "none", fontSize: '12px', color: "#ffffff", margin: "3px" }} to={'/batch'}>Batches</Link>
</Titles>
<Titles>
  <MDBIcon fas icon="headset" size='sm' />
  <Link style={{ textDecoration: "none", fontSize: '12px', color: "#ffffff", margin: "3px" }} to={'/#'}>Chat</Link>
</Titles>
</Rightside2>

      </Navsection2>
  <MDBRow className='justify-content-center align-items-center m-5'>
    <MDBCol md='8' lg='6'> {/* Set the column size to control the card width */}
      <MDBCard>
        <MDBCardBody className='px-4'>
          <h3 className="fw-bold mb-4 pb-2 pb-md-0 mb-md-5">Student Registration Form</h3>

          <MDBRow>
            <MDBCol md='6'>
              <MDBInput wrapperClass='mb-4' label='First Name' size='lg' id='form1' type='text'/>
            </MDBCol>

            <MDBCol md='6'>
              <MDBInput wrapperClass='mb-4' label='Last Name' size='lg' id='form2' type='text'/>
            </MDBCol>
          </MDBRow>

          <MDBRow>
            <MDBCol md='6'>
              <MDBInput wrapperClass='mb-4' label='Date of birth' size='lg' id='form3' type='date'/>
            </MDBCol>

            <MDBCol md='6' className='mb-4'>
              <h6 className="fw-bold">Gender: </h6>
              <MDBRadio name='inlineRadio' id='inlineRadio1' value='option1' label='Female' inline />
              <MDBRadio name='inlineRadio' id='inlineRadio2' value='option2' label='Male' inline />
              <MDBRadio name='inlineRadio' id='inlineRadio3' value='option3' label='Other' inline />
            </MDBCol>
          </MDBRow>

          <MDBRow>
            <MDBCol md='6'>
              <MDBInput wrapperClass='mb-4' label='Email' size='lg' id='form4' type='email'/>
            </MDBCol>

            <MDBCol md='6'>
              <MDBInput wrapperClass='mb-4' label='Phone Number' size='lg' id='form5' type='rel'/>
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol md='6'>
              <MDBInput wrapperClass='mb-4' label='Joining Date' size='lg' id='form4' type='date'/>
            </MDBCol>

            <MDBCol md='6'>
              <MDBInput wrapperClass='mb-4' label='Duration' size='lg' id='form5' type='text'/>
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol md='6'>
              <MDBInput wrapperClass='mb-4' label='Course' size='lg' id='form4' type='Course'/>
            </MDBCol>

            <MDBCol md='6'>
            <MDBDropdown>
            <MDBDropdownToggle style={{ fontSize: '12px', fontFamily: 'Arial, sans-serif' }} className='text-dark  bg-transparent border-0 mt-3 py-2 px-4 shadow-none border'>
               student status
            </MDBDropdownToggle>
            <MDBDropdownMenu>
          
                  <MDBDropdownItem link >Active</MDBDropdownItem>
                  <MDBDropdownItem link >Inactive</MDBDropdownItem>
             
          
            </MDBDropdownMenu>
          </MDBDropdown>
            </MDBCol>
          </MDBRow>

<MDBRow>
<MDBTextArea
  wrapperClass='mb-4'
  label='Your Message'
  id='textAreaExample'
  rows={4} // Number of visible rows
  placeholder='Address'
/>

</MDBRow>
<MDBRow>
<MDBInput wrapperClass='mb-4' size='lg' id='form4' type='file'/> 
</MDBRow>
<div className="d-flex justify-content-center">
  <MDBBtn className='mb-4' size='sm' color='success'>Submit</MDBBtn>
</div>


        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  </MDBRow>
</Mdbcontainer>

  )
}

export default Createstudent