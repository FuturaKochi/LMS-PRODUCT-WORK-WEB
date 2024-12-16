import React from 'react'
import {
    MDBContainer,
    MDBDropdown,
    MDBDropdownMenu,
    MDBDropdownItem,
    MDBIcon,
    MDBDropdownToggle
  }
  from 'mdb-react-ui-kit';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Dropdown } from 'bootstrap';

const Navsection2 = styled.div`
   display: flex;
   padding: 7px; 
   height: auto;
   align-items: center;
   z-index: 99;
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
     height: 100vh;
     overflow-x: scroll;
     font-family: "Space Grotesk", sans-serif;
  font-optical-sizing: auto;
  font-weight:300; /* Default weight can be set here */
  font-style: normal;

`

const Content=styled.div`
    width: 100%;
    height: 90vh;
    display: flex;
    align-items: center;
    justify-content: space-around;
`

const Sidebar=styled.div`
    width: 20%;
    height: 80vh;
    border: 0.5px solid #411B66;
    border-radius: 15px 0px 0px 15px;
    display: flex;
    flex-direction: column;
    align-items: center;

`

const MessageBox=styled.div`
    width: 78%;
    height:80vh;
    border: 0.5px solid #411B66;
    border-radius: 0px 15px 15px 0px;
    display: flex;
  

`
const Msgleft=styled.div` `
const Top=styled.div`
  width: 100%;
  height: 7vh;
  display:flex ;
  align-items: center;
  justify-content: space-around;
`

const Middle=styled.div`
width: 100%;
height: 7vh;
background: linear-gradient(135deg, rgba(65, 27, 102, 1), rgba(65, 27, 102, 0)); ;
display:flex ;
  align-items: center;
  justify-content: center;
`

const Input=styled.input`
  width: 90%;
  height: auto;
  border-radius: 10px;
  border: none;
`

const Title=styled.p`
 font-family: "Space Grotesk", sans-serif;
  font-optical-sizing: auto;
  font-weight:400; /* Default weight can be set here */
  font-style: normal;
  font-size: 16px;
  margin: 20px;
  
`

const Profile=styled.div`
  
`

const Time=styled.span`
  
`

const Chatbox = () => {

  
  return (
<Mdbcontainer fluid>
<Navsection2>
        <Leftside2>
        </Leftside2>
        <Rightside2>

<Titles>
  <MDBIcon fas icon="home" size='sm' />
  <Link style={{ textDecoration: "none", fontSize: '12px', color: "#411B66", margin: "3px" }} to={'/home'}>Home</Link>
</Titles>
<Titles>
  <MDBIcon fas icon="graduation-cap" size='sm' />
  <Link style={{ textDecoration: "none", fontSize: '12px', color: "#411B66", margin: "3px" }} to={'/student'}>Student</Link>
</Titles>
<Titles>
  <MDBIcon fas icon="book-reader" size='sm' />
  <Link style={{ textDecoration: "none", fontSize: '12px', color: "#411B66", margin: "3px" }} to={'/#'}>Mentor</Link>
</Titles>
<Titles>
  <MDBIcon fas icon="users" size='sm' />
  <Link style={{ textDecoration: "none", fontSize: '12px', color: "#411B66", margin: "3px" }} to={'/batch'}>Batches</Link>
</Titles>
<Titles>
  <MDBIcon fas icon="headset" size='sm' />
  <Link style={{ textDecoration: "none", fontSize: '12px', color: "#411B66", margin: "3px" }} to={'/chat'}>Chat</Link>
</Titles>
</Rightside2>

      </Navsection2>
      <Content>
<Sidebar>
  <Top> 
  <h3>Chat</h3>
  <MDBDropdown>
            <MDBDropdownToggle className='text-dark  bg-transparent border-0  py-2 px-4 shadow-none border'>
              Chat with
            </MDBDropdownToggle>


            <MDBDropdownMenu>
                  <MDBDropdownItem>Mentor</MDBDropdownItem>
                  <MDBDropdownItem>Batch</MDBDropdownItem>
                  <MDBDropdownItem>Students</MDBDropdownItem>
            </MDBDropdownMenu>
          </MDBDropdown>
          </Top>
          <Middle>
            <Input type="text" placeholder='Search by name or number' />
          </Middle>
          <Title>Messages</Title>


</Sidebar>
<MessageBox>
  <Msgleft>
    <Profile></Profile> 
  </Msgleft>
  <Time></Time>
</MessageBox>
      </Content>

      </Mdbcontainer>
  )
}

export default Chatbox