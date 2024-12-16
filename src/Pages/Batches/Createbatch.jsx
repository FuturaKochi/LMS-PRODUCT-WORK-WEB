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
import { Link } from 'react-router-dom';
import { postBatch, searchWithcourse, searchWithMentor, searchWithstudent } from '../../Api call/Api';

const NavSection = styled.div`
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
 
  cursor: pointer;
  &:hover{
    background-color:gray ;
  }
`;
const Mdbrow = styled(MDBCol)`
display: flex;
align-items: center;
justify-content: space-between;
`

const MDBDropdownMenus = styled(MDBDropdownMenu)`
height:250px ;
overflow:scroll ;
`

const CreateBatch = () => {





  const [searchResult, setSearchResult] = useState([])
  const [studentId, setStudentId] = useState([])
  const [courseDetails, setCourseDetails] = useState([])
  const [days, setDays] = useState([])
  const [day, setDay] = useState(['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'])
  const [course, setCourse] = useState("")
  const [mentors, setMentors] = useState([])
  const [mentor, setMentor] = useState("")


  const [data, setData] = useState({
    batchName: "",
    batchCode: "",
    startDate: Date,
    endDate: Date,
    startTime: "",
    endTime: "",

  })

  console.log("Id evide", studentId, days, course);

  function searchStudent(event) {
    const { value } = event.target
    searchWithstudent(value).then((response) => {
    
      setSearchResult(response.data)
    })
  }

  useEffect(() => {
    searchWithcourse().then((data) => {
      setCourseDetails(data.data)
    })

    searchWithMentor().then((data) => {
      setMentors(data.data)
   

    })
  }, [])


  function onchange(event) {
    const { name, value } = event.target
 

    if (name == 'startTime' || name == 'endTime') {

      const today = new Date();

      // Split the time value into hours and minutes
      const [hours, minutes] = value.split(":").map(Number);

      // Set the hours and minutes of the Date object
      today.setHours(hours, minutes, 0, 0);
   
      

      setData({ ...data, [name]: today })
    }else{
    setData({ ...data, [name]: value })
    }


  }


  function submit() {


    postBatch({...data,day:days,mentor,students:studentId,courseName:course})
  }

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

      <MDBRow className='justify-content-center align-items-center mx-3'>
        <MDBCol md='10' lg='8'>
          <MDBCard className='shadow-sm rounded'>
            <MDBCardBody className='px-5 py-4'>
              <h3 className="fw-bold text-center mb-4 pb-2 pb-md-0 mb-md-5">Create New Batch</h3>
              <MDBRow>
                <MDBCol md='6'>
                  <MDBInput wrapperClass='mb-4' label='Batch name' size='lg' id='form1' type='text' name='batchName' onChange={onchange} />
                </MDBCol>
                <MDBCol md='6'>
                  <MDBInput wrapperClass='mb-4' label='Batch code' size='lg' id='form2' type='text' name='batchCode' onChange={onchange} />
                </MDBCol>
              </MDBRow>

              <MDBRow>
                <MDBCol md='6'>
                  <MDBInput wrapperClass='mb-4' label='Batch starting date' size='lg' id='form3' type='date' name='startDate' onChange={onchange} />
                </MDBCol>
                <MDBCol md='6'>
                  <MDBInput wrapperClass='mb-4' label='Batch ending date' size='lg' id='form4' type='date' name="endDate" onChange={onchange} />
                </MDBCol>
              </MDBRow>

              <MDBRow>
                <MDBCol md='6'>
                  <label htmlFor="form6" className="form-label">Batch starting time</label>
                  <MDBInput wrapperClass='mb-4' size='lg' id='form6' type='time' name='startTime' onChange={onchange} />
                </MDBCol>
                <MDBCol md='6'>
                  <label htmlFor="form7" className="form-label">Batch ending time</label>
                  <MDBInput wrapperClass='mb-4' size='lg' id='form7' type='time' name='endTime' onChange={onchange} />
                </MDBCol>
              </MDBRow>

              <MDBRow>
                <MDBCol md='6'>
                  <MDBDropdown>
                    <StyledDropdownToggle className="shadow-none">
                      select Mentor
                    </StyledDropdownToggle>
                    <MDBDropdownMenus>
                      {mentors.map((li) => (
                        <StyledDropdownItem onClick={() => setMentor(li.firstName + " " + li.lastName)}>{li.firstName + " " + li.lastName}</StyledDropdownItem>
                      ))}
                    </MDBDropdownMenus>
                  </MDBDropdown>

                </MDBCol>
                <MDBCol md='6'>
                  {/* <MDBInput wrapperClass='mb-4' label='Duration' size='lg' id='form9' type='text' /> */}
                </MDBCol>
              </MDBRow>
              <Mdbrow>

                <MDBCol md='2'>
                  <MDBDropdown>
                    <StyledDropdownToggle className="shadow-none">
                      select Day
                    </StyledDropdownToggle>
                    <MDBDropdownMenu>
                      {day.map((li) => (
                        <StyledDropdownItem onClick={() => setDays([...days, li])}>{li}</StyledDropdownItem>
                      ))}
                    </MDBDropdownMenu>
                  </MDBDropdown>

                </MDBCol>
                <MDBCol md='2'>
                  <MDBDropdown>
                    <StyledDropdownToggle className="shadow-none">
                      Add Course
                    </StyledDropdownToggle>
                    <MDBDropdownMenu>
                      {courseDetails.map((li) => (
                        <StyledDropdownItem onClick={() => setCourse(li.courseName)}>{li.courseName}</StyledDropdownItem>
                      ))}

                    </MDBDropdownMenu>
                  </MDBDropdown>
                </MDBCol>
                <MDBCol md='2' >
                  <MDBDropdown>
                    <StyledDropdownToggle className="shadow-none">
                      Add Students
                    </StyledDropdownToggle>
                    <MDBDropdownMenu>
                      <MDBInput wrapperClass='mb-4' label='Enter student name' size='lg' id='form9' type='search' onChange={searchStudent} />
                      {searchResult.map((li) => (
                        <StyledDropdownItem onClick={() => setStudentId([...studentId, li._id])}>{li.firstName + " " + li.lastName}</StyledDropdownItem>
                      ))}

                    </MDBDropdownMenu>
                  </MDBDropdown>
                </MDBCol>
              </Mdbrow>

              <div className="d-flex justify-content-center mt-4">
                <MDBBtn className='m-5 w-50' size='sm' color='success' onClick={submit}>Submit</MDBBtn>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </StyledContainer>
  )
}

export default CreateBatch;
