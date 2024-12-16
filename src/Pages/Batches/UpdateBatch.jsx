import React, { useEffect, useState } from 'react'
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBIcon
} from 'mdb-react-ui-kit';
import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';
import { BatchWithstudents } from '../../Api call/Api';
import Loading from '../../Component/Loading';

const NavSection = styled.div`
  display: flex;
  padding: 15px;
  height: auto;
  align-items: center;
  z-index: 99;
  background: linear-gradient(135deg, #411B66, #8B4CAF);
  border-radius: 10px 10px 0 0;
  justify-content: space-between;
  margin-bottom: 25px;
  position: sticky;
  top: 0;
`;

const LeftSide = styled.div`
  display: flex;
  width: 40%;
  align-items: center;
  justify-content: space-around;
  margin-left: 67px;
`;

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
const StyledContainer = styled(MDBContainer)`
  background: linear-gradient(135deg, rgba(65, 27, 102, 1), rgba(65, 27, 102, 0.1));
  height: 100vh;
  overflow-x: auto;
  padding-top: 2rem;
  font-family: "Space Grotesk", sans-serif;
  font-optical-sizing: auto;
  font-weight:300; /* Default weight can be set here */
  font-style: normal;
`;

const StyledDropdownToggle = styled(MDBDropdownToggle)`
  font-size: 12px;
  font-family: Arial, sans-serif;
  color: #333;
  background-color: #f8f9fa;
  border: 1px solid #ced4da;
  border-radius: 5px;
  padding: 10px 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
  margin-top: 1rem;
`;

const StyledDropdownItem = styled(MDBDropdownItem)`
  padding: 10px 15px;
  font-size: 14px;
  color: #333;
`;
const Mdbrow=styled(MDBCol)`
display: flex;
align-items: center;
justify-content: space-between;
`
const UpdateBatch = () => {
    const [Batchdetails, setBatchdetails] = useState([]);
    const [loading, setLoading] = useState(false)
    const {id}=useParams()

    useEffect(()=>{
    setLoading(true)
        BatchWithstudents(id)
        .then((data) => {
  
          setBatchdetails(data)
          setLoading(false)
        })
      
    },[])

console.log("Batch details........",Batchdetails);


  return (
    <StyledContainer fluid>
      <NavSection>
        <LeftSide />
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
      </NavSection>
{loading ? <Loading/> : Batchdetails.map((datas)=>(
      <MDBRow className='justify-content-center align-items-center mx-3'>
        <MDBCol md='10' lg='8'>
          <MDBCard className='shadow-sm rounded'>
            <MDBCardBody className='px-5 py-4'>
              <h3 className="fw-bold text-center mb-4 pb-2 pb-md-0 mb-md-5">Update Batch</h3>
              <MDBRow>
                <MDBCol md='6'>
                  <MDBInput wrapperClass='mb-4' label='Batch name' value={datas.name} size='lg' id='form1' type='text' />
                </MDBCol>
                <MDBCol md='6'>
                  <MDBInput wrapperClass='mb-4' label='Batch code' value={datas.batch_code} size='lg' id='form2' type='text' />
                </MDBCol>
              </MDBRow>

              <MDBRow>
                <MDBCol md='6'>
                  <MDBInput wrapperClass='mb-4' label='Batch starting date' value={new Date(datas.start_date).toLocaleString("en-US", { timeZone: "UTC" })} size='lg' id='form3' type='text' />
                </MDBCol>
                <MDBCol md='6'>
                  <MDBInput wrapperClass='mb-4' label='Batch ending date' value={new Date(datas.end_date).toLocaleString("en-US", { timeZone: "UTC" })}  size='lg' id='form4' type='text' />
                </MDBCol>
              </MDBRow>

              <MDBRow>
                <MDBCol md='6'>
                  <label htmlFor="form6" className="form-label">Batch starting time</label>
                  <MDBInput wrapperClass='mb-4' size='lg'value={datas.start_time}  id='form6' type='text' />
                </MDBCol>
                <MDBCol md='6'>
                  <label htmlFor="form7" className="form-label">Batch ending time</label>
                  <MDBInput wrapperClass='mb-4' size='lg' value={datas.end_time} id='form7' type='text' />
                </MDBCol>
              </MDBRow>

              <MDBRow>
                <MDBCol md='6'>
                  <MDBInput wrapperClass='mb-4' label='Mentor Name' value={datas.mentor} size='lg' id='form8' type='text' />
                </MDBCol>
                <MDBCol md='6'>
                  <MDBInput wrapperClass='mb-4' label='Duration' size='lg' id='form9' type='text' />
                </MDBCol>
              </MDBRow>

              <Mdbrow>
                <MDBCol md='3'>
                  <MDBDropdown>
                    <StyledDropdownToggle className="shadow-none">
                      Add Course
                    </StyledDropdownToggle>
                    <MDBDropdownMenu>
                      <StyledDropdownItem link>Active</StyledDropdownItem>
                      <StyledDropdownItem link>Inactive</StyledDropdownItem>
                    </MDBDropdownMenu>
                  </MDBDropdown>
                </MDBCol>
                <MDBCol md='3' >
                  <MDBDropdown>
                    <StyledDropdownToggle className="shadow-none">
                      Add Students
                    </StyledDropdownToggle>
                    <MDBDropdownMenu>
                      <StyledDropdownItem link>Active</StyledDropdownItem>
                      <StyledDropdownItem link>Inactive</StyledDropdownItem>
                    </MDBDropdownMenu>
                  </MDBDropdown>
                </MDBCol>
              </Mdbrow>

              <div className="d-flex justify-content-center mt-4">
                <MDBBtn className='mb-4' size='sm' color='success'>Submit</MDBBtn>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
      ))}
    
    </StyledContainer>
  )
}

export default UpdateBatch