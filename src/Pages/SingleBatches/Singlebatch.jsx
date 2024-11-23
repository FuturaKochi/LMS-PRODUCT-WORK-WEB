import React, { useEffect, useState } from 'react'

import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBModal, MDBModalDialog, MDBModalContent, MDBModalHeader, MDBModalTitle, MDBModalBody, MDBModalFooter, MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBListGroup, MDBListGroupItem, MDBCardLink, MDBRow, MDBCol, MDBInput, MDBCheckbox, MDBIcon, MDBRadio, MDBTextArea, MDBContainer } from 'mdb-react-ui-kit';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import Loading from '../../Component/Loading';
import Navbar1 from '../../Component/Navbar1';
import { Batch, BatchWithstudents, studentswithId } from '../../Api call/Api';

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
 color: #411B66;
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
const TableView = styled.div`
  `

const StyledModal = styled(MDBModal)`
  .modal-dialog-scrollable {
    max-height: 90vh; /* Make sure the modal dialog fits the viewport */
    overflow-y: auto; /* Enable vertical scroll */
  }

  .modal-content {
    max-height: 80vh; /* Limit modal content height */
    overflow-y: auto; /* Enable vertical scrolling inside modal */
  }
`

const BatchDetailTableHead = styled.th`
  font-family: "Space Grotesk", sans-serif;
  font-optical-sizing: auto;
  font-weight:bold; /* Default weight can be set here */
  font-style: normal;
  font-size:17px;
  text-align: center;
`
const BatchDetailTablecolumn = styled.td`
  font-family: "Space Grotesk", sans-serif;
  font-optical-sizing: auto;
  font-weight:bold; /* Default weight can be set here */
  font-style: normal;
  font-size:14px;
  text-align: center;
`

const StudentDetailTablecolumn = styled.td`
  font-family: "Space Grotesk", sans-serif;
  font-optical-sizing: auto;
  font-weight:400; /* Default weight can be set here */
  font-style: normal;
  font-size:14px;
  text-align: center;
`

const StudentDetailTableHead = styled.td`
  font-family: "Space Grotesk", sans-serif;
  font-optical-sizing: auto;
  font-weight:700; /* Default weight can be set here */
  font-style: normal;
  font-size:14px;
  text-align: center;
`;

const Mdbcartimage = styled(MDBCardImage)`
   width: 200px;
    height: 200px;
    border-radius: 50%; // for circular image
    display: block;     // for centering the image
    margin: 0 auto;
    top: 0;
`
const Popup = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Remove=styled(MDBDropdownToggle)`
    background-color: darkred;
  color: white;
  border: 0;
  box-shadow: none;
  border-radius: 50px;
  transition: background-color 0.3s ease;
  font-family: "Space Grotesk", sans-serif;
  font-optical-sizing: auto;
  font-weight:300; /* Default weight can be set here */
  font-style: normal;
  font-size:9px;
  text-align: center;
`

const Singlebatch = () => {
  const [Batchdetails, setBatchdetails] = useState([]);
  const [StudentDetails, setStudentDetails] = useState([]);
  const [singleStudentData, setsingleStudentData] = useState({})
  const [loading, setLoading] = useState(false)
  const [loading1, setLoading1] = useState(false)
  const [batch_code, setBatch_code] = useState([])
  const { id } = useParams()




  const [centredModal, setCentredModal] = useState(false);
  const [updateModal, setupdatedModal] = useState(false);

  const toggleOpen = (id) => {
    console.log("whereis id", id);
    setCentredModal(!centredModal)
    if (!centredModal) {
      setLoading1(true)
      studentswithId(id).then((data) => {

        setsingleStudentData(data)
        setLoading1(false)
      })
    }


  }

  const updateToggleOpen = () => {
    setupdatedModal(!updateModal)
  }



  useEffect(() => {
    setLoading(true)
    BatchWithstudents(id)
      .then((data) => {
        console.log("Batch with students", data);

        setBatchdetails(data)
        setStudentDetails(data[0]?.student_details)
        setLoading(false)
      })

  }, []);


  useEffect(() => {
    Batch().then((data) => {
      console.log("all batches", data);
      setBatch_code(data)
    })
  }, [])



  return (
    <>
      <Navsection2>
        <Leftside2>
          <MDBDropdown>
            <MDBDropdownToggle style={{ fontSize: '12px', fontFamily: 'Arial, sans-serif', marginLeft: "20px" }} className='text-white  bg-transparent border-0 mt-3 py-2 px-4 shadow-none border'>
              Update and Delete
            </MDBDropdownToggle>
            <MDBDropdownMenu>
              <Link to={`/updatebatch/${id}`}><MDBDropdownItem link>Update</MDBDropdownItem></Link>
              <MDBDropdownItem link>Delete</MDBDropdownItem>
            </MDBDropdownMenu>
          </MDBDropdown>
          <MDBDropdown>
            <MDBDropdownToggle style={{ fontSize: '12px', fontFamily: 'Arial, sans-serif', marginLeft: "20px" }} className='text-white  bg-transparent border-0 mt-3 py-2 px-4 shadow-none border'>
              Change schedule time & date
            </MDBDropdownToggle>
            <MDBDropdownMenu>
              <MDBDropdown>
                <MDBDropdownToggle className='dropdown-item text-dark bg-light border-0'>
                  Select Batch code
                </MDBDropdownToggle>
                <MDBDropdownMenu style={{ maxHeight: '200px', overflowY: 'auto' }}>
                  {batch_code.map((li) => (
                    <MDBDropdownItem link>{li.batch_code}</MDBDropdownItem>
                  ))}
                </MDBDropdownMenu>

              </MDBDropdown>
            </MDBDropdownMenu>
          </MDBDropdown>
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
            <Link style={{ textDecoration: "none", fontSize: '12px', color: "#411B66", margin: "3px" }} to={'/#'}>Chat</Link>
          </Titles>
        </Rightside2>
      </Navsection2>
      <MDBContainer className="my-4">
        <MDBTable>
          <MDBTableHead>
            <tr>
              <BatchDetailTableHead scope='col'>Batch name</BatchDetailTableHead>
              <BatchDetailTableHead scope='col'>Mentor name</BatchDetailTableHead>
              <BatchDetailTableHead scope='col'>Schedule start time</BatchDetailTableHead>
              <BatchDetailTableHead scope='col'>Schedule end time</BatchDetailTableHead>
            </tr>
          </MDBTableHead>
          <MDBTableBody>
            {Batchdetails.map((li) => (
              <tr>
                <BatchDetailTablecolumn scope='row'>{li.name}</BatchDetailTablecolumn>
                <BatchDetailTablecolumn>{li.mentor}</BatchDetailTablecolumn>
                <BatchDetailTablecolumn>{li.start_time}</BatchDetailTablecolumn>
                <BatchDetailTablecolumn>{li.end_time}</BatchDetailTablecolumn>
              </tr>
            ))}
          </MDBTableBody>
        </MDBTable>
      </MDBContainer>
      <TableView className='container'>
        <MDBTable
          align='middle'>
          <MDBTableHead>
            <tr>
              <StudentDetailTableHead scope='col'>Name</StudentDetailTableHead>
              <StudentDetailTableHead scope='col'>Mobile</StudentDetailTableHead>
              <StudentDetailTableHead scope='col'>Joining Date</StudentDetailTableHead>
              <StudentDetailTableHead scope='col'>Course</StudentDetailTableHead>
              <StudentDetailTableHead scope='col'>Duration</StudentDetailTableHead>
              <StudentDetailTableHead scope='col'>Move</StudentDetailTableHead>
              <StudentDetailTableHead scope='col'>Show full details</StudentDetailTableHead>
              <StudentDetailTableHead scope='col'>Remove</StudentDetailTableHead>
            </tr>
          </MDBTableHead>


          {loading ? <Loading />

            : StudentDetails?.map((li) => (
              <MDBTableBody >
                <tr   >
                  <StudentDetailTablecolumn>
                    <div className={li.status == "active" ? 'bg-success' : "bg-danger"} style={{ width: "15px", height: "15px", borderRadius: '15px', float: "left" }}></div>
                    <div className='d-flex align-items-center'>
                      <img
                        src='https://mdbootstrap.com/img/new/avatars/8.jpg'
                        alt=''
                        style={{ width: '45px', height: '45px' }}
                        className='rounded-circle'
                      />
                      <div className='ms-3'>
                        <p className='fw-bold mb-1'>{li.first_name} {li.last_name}</p>
                        <p className='text-muted mb-0'>{li.email}</p>
                        <p className='text-muted mb-0'>{li.student_id}</p>
                      </div>
                    </div>
                  </StudentDetailTablecolumn>
                  <StudentDetailTablecolumn>
                    <p className='fw-normal mb-1'>{li.phone_number}</p>
                  </StudentDetailTablecolumn>
                  <StudentDetailTablecolumn>
                    <p className='fw-normal mb-1'>10/05/2024</p>
                  </StudentDetailTablecolumn>
                  <StudentDetailTablecolumn>
                    <MDBBadge color='success' pill>
                      Mern
                    </MDBBadge>
                  </StudentDetailTablecolumn>

                  <StudentDetailTablecolumn>6 Months</StudentDetailTablecolumn>
                  <StudentDetailTablecolumn>
                    <MDBDropdown>
                      <MDBDropdownToggle className='dropdown-item fs-9 text-dark bg-transparent border-0 shadow-none'>
                        Select Batch code
                      </MDBDropdownToggle>
                      <MDBDropdownMenu style={{ maxHeight: '200px', overflowY: 'auto' }}>
                        {batch_code.map((li) => (
                          <MDBDropdownItem link>{li.batch_code}</MDBDropdownItem>
                        ))}
                      </MDBDropdownMenu>

                    </MDBDropdown>
                  </StudentDetailTablecolumn>
                  <StudentDetailTablecolumn>
                    {/* <MDBBtn color='success' className='fs-50' onClick={toggleOpen}>Click</MDBBtn> */}
                    {/* <MDBBadge color='success' className='fs-50' onClick={() => toggleOpen(li._id)} pill>click</MDBBadge> */}
                    <MDBBadge style={{ cursor: 'pointer' }} color='success' className='fs-20 px-3' onClick={() => toggleOpen(li._id)} pill>Click</MDBBadge>
                    {centredModal && (
                      <Popup>
                      <MDBModal open={centredModal} onClose={() => setCentredModal(false)} backdrop={false}>
                        {loading1 ? (
                          <Loading />  // Show loader if data is still being fetched
                        ) : (
                          <MDBModalDialog centered>
                            <MDBModalContent>
                              <MDBModalHeader>
                                <MDBModalTitle>Profile</MDBModalTitle>
                                <MDBBtn className='btn-close' color='none' onClick={toggleOpen}></MDBBtn>
                              </MDBModalHeader>
                              <MDBModalBody>
                                <MDBCard>
                                  <Mdbcartimage alt='...' src='https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg' />
                                  <MDBCardBody>
                                    <MDBCardTitle>{singleStudentData.first_name} {singleStudentData.last_name}</MDBCardTitle>

                                    <MDBCardText>
                                      {singleStudentData.email}<br></br>
                                      {singleStudentData.phone_number}
                                    </MDBCardText>
                                  </MDBCardBody>
                                  <MDBListGroup flush>
                                    <MDBListGroupItem>status            : {singleStudentData.status}</MDBListGroupItem>
                                    <MDBListGroupItem>student Id        : {singleStudentData.student_id}</MDBListGroupItem>
                                    <MDBListGroupItem>enrollment_number : {singleStudentData.enrollment_number}</MDBListGroupItem>
                                  </MDBListGroup>
                                </MDBCard>
                              </MDBModalBody>
                              <MDBBadge color='success' pill onClick={updateToggleOpen} style={{ cursor: 'pointer', width: "100%" }}>
                                Update
                              </MDBBadge>
                            </MDBModalContent>
                          </MDBModalDialog>
                        )}
                      </MDBModal>
                      </Popup>
                    )}
                    {updateModal && (
                      <StyledModal open={updateModal} onClose={() => setupdatedModal(false)} backdrop={false}>
                        {loading1 ? (
                          <Loading />  // Show loader if data is still being fetched
                        ) : (
                          <MDBModalDialog centered>
                            <MDBModalContent>
                              <MDBModalHeader>
                                <MDBBtn className='btn-close' color='none' onClick={updateToggleOpen}></MDBBtn>
                              </MDBModalHeader>
                              <MDBModalBody>


                                <MDBCardBody className='px-4'>
                                  <h3 className="fw-bold mb-4 pb-2 pb-md-0 mb-md-5">Update Registration Form</h3>

                                  <MDBRow>
                                    <MDBCol md='6'>
                                      <MDBInput wrapperClass='mb-4' label='First Name' size='lg' id='form1' type='text' />
                                    </MDBCol>

                                    <MDBCol md='6'>
                                      <MDBInput wrapperClass='mb-4' label='Last Name' size='lg' id='form2' type='text' />
                                    </MDBCol>
                                  </MDBRow>

                                  <MDBRow>
                                    <MDBCol md='6'>
                                      <MDBInput wrapperClass='mb-4' label='Date of birth' size='lg' id='form3' type='date' />
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
                                      <MDBInput wrapperClass='mb-4' label='Email' size='lg' id='form4' type='email' />
                                    </MDBCol>

                                    <MDBCol md='6'>
                                      <MDBInput wrapperClass='mb-4' label='Phone Number' size='lg' id='form5' type='rel' />
                                    </MDBCol>
                                  </MDBRow>
                                  <MDBRow>
                                    <MDBCol md='6'>
                                      <MDBInput wrapperClass='mb-4' label='Joining Date' size='lg' id='form4' type='date' />
                                    </MDBCol>

                                    <MDBCol md='6'>
                                      <MDBInput wrapperClass='mb-4' label='Duration' size='lg' id='form5' type='text' />
                                    </MDBCol>
                                  </MDBRow>
                                  <MDBRow>
                                    <MDBCol md='6'>
                                      <MDBInput wrapperClass='mb-4' label='Course' size='lg' id='form4' type='Course' />
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
                                    <MDBInput wrapperClass='mb-4' size='lg' id='form4' type='file' />
                                  </MDBRow>
                                  <div className="d-flex justify-content-center">
                                    <MDBBtn className='mb-4' size='sm' color='success'>Submit</MDBBtn>
                                  </div>


                                </MDBCardBody>

                              </MDBModalBody>

                            </MDBModalContent>
                          </MDBModalDialog>
                        )}
                      </StyledModal>
                    )}
                  </StudentDetailTablecolumn>
                  <StudentDetailTablecolumn>
                  <MDBDropdown>
              <Remove>
  Remove
</Remove>

                      <MDBDropdownMenu style={{ maxHeight: '200px', overflowY: 'auto' }}>
                    
                          <MDBDropdownItem link>course Compleated</MDBDropdownItem>
                          <MDBDropdownItem link>Non active</MDBDropdownItem>
                          <MDBDropdownItem link>permanently deleted</MDBDropdownItem>
                     
                      </MDBDropdownMenu>

                    </MDBDropdown>
                  </StudentDetailTablecolumn>
                </tr>


              </MDBTableBody>
            ))}



        </MDBTable>
      </TableView>
    </>
  )
}

export default Singlebatch





