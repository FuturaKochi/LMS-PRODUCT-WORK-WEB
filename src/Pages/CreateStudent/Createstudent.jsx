import React, { useState } from 'react';
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
    MDBTextArea,
    MDBIcon
  }
  from 'mdb-react-ui-kit';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { studentsPost } from '../../Api call/Api';

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

  const [data,setData]=useState({
  firstName:String,
  lastName:String,
  email:String,
  password:String,
  mobileNumber:String,
  })

  function handlechange(event){
    const {name,value}=event.target

    setData({...data,[name]:value})

  }

function display(){
  console.log("check",data);
  
  studentsPost(data)
}


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
  <Link style={{ textDecoration: "none", fontSize: '12px', color: "#ffffff", margin: "3px" }} to={'/chat'}>Chat</Link>
</Titles>
</Rightside2>

      </Navsection2>
  <MDBRow className='justify-content-center align-items-center m-5'>
    <MDBCol md='8' lg='6'> {/* Set the column size to control the card width */}
      <MDBCard>
        <MDBCardBody className='px-4'>
          <h3  className="fw-bold mb-4 pb-2 pb-md-0 mb-md-5 text-center">Student Registration Form</h3>


          <MDBRow>
            <MDBCol md='6'>
              <MDBInput wrapperClass='mb-4' label='Firstname' name='firstName' size='lg' id='form4' type='text' onChange={handlechange}/>
            </MDBCol>
            <MDBCol md='6'>
              <MDBInput wrapperClass='mb-4' label='Lastname' name='lastName' size='lg' id='form4' type='text' onChange={handlechange}/>
            </MDBCol>
            </MDBRow>
          <MDBRow>
            <MDBCol md='12'>
              <MDBInput wrapperClass='mb-4' label='Email' name='email' size='lg' id='form4' type='email' onChange={handlechange}/>
            </MDBCol>
            </MDBRow>
            <MDBRow>
            <MDBCol md='12'>
              <MDBInput wrapperClass='mb-4' name='mobileNumber' label='Phone Number' size='lg' id='form5' type='rel' onChange={handlechange}/>
            </MDBCol>
          
            </MDBRow>
          <MDBRow>
            <MDBCol md='12'>
              <MDBInput wrapperClass='mb-4' label='password' name="password" size='lg' id='form4' type='text' onChange={handlechange}/>
            </MDBCol>
          </MDBRow>
<div className="d-flex justify-content-center">
  <MDBBtn className='mb-4' size='sm' color='success' onClick={display}>Submit</MDBBtn>
</div>


        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  </MDBRow>
</Mdbcontainer>

  )
}

export default Createstudent