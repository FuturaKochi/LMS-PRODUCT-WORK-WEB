import axios from 'axios'
import { MDBBadge, MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardText, MDBCardTitle, MDBCol, MDBContainer, MDBDropdown, MDBDropdownItem, MDBDropdownMenu, MDBDropdownToggle, MDBIcon, MDBInput, MDBListGroup, MDBListGroupItem, MDBModal, MDBModalBody, MDBModalContent, MDBModalDialog, MDBModalHeader, MDBModalTitle, MDBRadio, MDBRow, MDBTable, MDBTableBody, MDBTableHead, MDBTextArea } from 'mdb-react-ui-kit'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { styled,keyframes } from 'styled-components'
import Loading from '../../Component/Loading'
import Navbar1 from '../../Component/Navbar1'
import { Batch, Mentor, students, studentsPost, studentswithId } from '../../Api call/Api'

const DropDown = styled(MDBDropdownToggle)`
   font-family: "Space Grotesk", sans-serif;
  font-optical-sizing: auto;
  font-weight:400; /* Default weight can be set here */
  font-style: normal;
  color: #411B66;
  font-size: 12px;
`


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

//styledModal

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

const SpaceGroteskText = styled.div`
  font-family: "Space Grotesk", sans-serif;
  font-optical-sizing: auto;
  font-weight:300; /* Default weight can be set here */
  font-style: normal;
  color: white;
  cursor: pointer;
`;
const StudentDetailTablecolumn=styled.td`
  font-family: "Space Grotesk", sans-serif;
  font-optical-sizing: auto;
  font-weight:400; /* Default weight can be set here */
  font-style: normal;
  font-size:14px;
  text-align: center;
`

const StudentDetailTableHead=styled.td`
  font-family: "Space Grotesk", sans-serif;
  font-optical-sizing: auto;
  font-weight:700; /* Default weight can be set here */
  font-style: normal;
  font-size:14px;
  text-align: center;
`
const Popup = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.09);
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Mdbcartimage = styled(MDBCardImage)`
   width: 200px;
    height: 200px;
    border-radius: 50%; // for circular image
    display: block;     // for centering the image
    margin: 0 auto;
    top: 0;
`

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

const Indication=styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
`
const Active=styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: green;
  /* margin-right: 30px; */
  margin: 7px;
`
const NonActive=styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: red;
  /* margin-right: 30px; */
  margin: 7px;
`
const Compleate=styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: blue;
  /* margin-right: 30px; */
  margin: 7px;
`
const Indicationname=styled.div`
  font-family: "Space Grotesk", sans-serif;
  font-optical-sizing: auto;
  font-weight:100; /* Default weight can be set here */
  font-style: normal;
  font-size: 14px;
`
const MDBDropdownMenus=styled(MDBDropdownMenu)`
  height: 100px;
  overflow-x: scroll;
`

const Student = () => {
  const [StudentDetails, setStudentDetails] = useState([]);
  const [StudentDetails1, setStudentDetails1] = useState([]);
  const [singleStudentData, setsingleStudentData] = useState({});
  const [loading, setLoading] = useState(false);
  const [loading1, setLoading1] = useState(false);  // Loader state for the modal
  const [centredModal, setCentredModal] = useState(false);
  const [updateModal, setupdatedModal] = useState(false);
  const [activestatus,setActiveStatus]=useState('All')
  const [batch_code, setBatch_code] = useState([])
  const [mentor,setMentor]=useState([])
  const [uploadData,setUploadData]=useState({
    firstName:"",
    lastName:"",
    email:"",
    mobileNumber:"",
    profilePicture:"",
    enrollmentNumber:"",
    dateOfBirth:Date,
    gender:"",
    courseName:"",
    courseDuration:Number,
    joiningDate:Date,
    street:"",
    city:"",
    district:"",
    state:"",
    country:"",
    pinCode:""
  })
  const [dropdownvalue,setDropdownValue]=useState({
    modeOfClass:"",
    mentor:"",
    status:"",
  })
  const toggleOpen = (id) => {
    console.log("where is id", id);
    setCentredModal(!centredModal);

    if (!centredModal) {
      setLoading1(true);  // Set loading state for modal content
      studentswithId(id)
        .then((data) => {
          setsingleStudentData(data);
        
          setLoading1(false);  // Stop loading once data is fetched
        })
        .catch(() => setLoading1(false));
    }
  };


  useEffect(() => {
    setLoading(true);
  students()
      .then((data) => {
        console.log('../',data);
        
        setStudentDetails(data);
        setStudentDetails1(data);
        setLoading(false);
      }).catch(() => setLoading(false));
      Mentor().then((data)=>{   
setMentor(data)
      })

  }, []);



  function filterStatus(value){
console.log("value in status",value);
setActiveStatus(value)
if(value=='all'){
  setStudentDetails1(StudentDetails)
}else{
  const studentData=StudentDetails.filter((li)=>{
    return li.status==value
  })
  
  setStudentDetails1(studentData)
}

  }

  
  const updateToggleOpen=()=>{
    setupdatedModal(!updateModal)
  }

  useEffect(() => {
    Batch().then((data) => {
      console.log("all batches", data);
      setBatch_code(data)
    })
  }, [StudentDetails])



  //value take in input tag

   function updateData(event){
const {value,name}=event.target
setUploadData({...uploadData,[name]:value})
console.log("values in input btag in student details",uploadData);

}

function submitForm(){
  console.log("final answer in form in update registration",{...uploadData,dropdownvalue});
  studentsPost({...updateData,dropdownvalue})
  
}





return (
  <MDBContainer fluid>
    <Navbar1 student={StudentDetails} setStudent={setStudentDetails}/>
      <Navsection2>
        <Leftside2>
      <Link style={{textDecoration:"none"}} to={'/createstudent'}><SpaceGroteskText>+ create student</SpaceGroteskText></Link>
     <MDBDropdown>
            <DropDown className='text-white  bg-transparent border-0 py-2 px-4 shadow-none border'>
        {activestatus} students
            </DropDown>
            <MDBDropdownMenu>
          
                  <MDBDropdownItem link onClick={() => filterStatus('active')}>Active</MDBDropdownItem>
                  <MDBDropdownItem link  onClick={() => filterStatus('inactive')}>Inactive</MDBDropdownItem>
                  <MDBDropdownItem link  onClick={() => filterStatus('all')}>All</MDBDropdownItem>
             
          
            </MDBDropdownMenu>
          </MDBDropdown>
          <MDBDropdown>
            <DropDown className='text-white  bg-transparent border-0 py-2 px-4 shadow-none border'>
              Select Course
            </DropDown>
            <MDBDropdownMenu>
       
                  <MDBDropdownItem></MDBDropdownItem>
               
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
            <Link style={{ textDecoration: "none", fontSize: '12px', color: "#411B66", margin: "3px" }} to={'/chat'}>Chat</Link>
          </Titles>
        </Rightside2>

      </Navsection2>
    {/* Rest of your UI */}
<Indication>
  <Indicationname>Active</Indicationname>
 <Active></Active>
 <Indicationname>Inactive</Indicationname>
 <NonActive></NonActive>
 <Indicationname>Course compleate</Indicationname>
 <Compleate></Compleate>
</Indication>
    <TableView className='container'>
      <MDBTable align='middle'>
        <MDBTableHead>
          <tr>
            <StudentDetailTableHead scope='col'>Name</StudentDetailTableHead>
            <StudentDetailTableHead scope='col'>Mobile</StudentDetailTableHead>
            <StudentDetailTableHead scope='col'>Joining Date</StudentDetailTableHead>
            <StudentDetailTableHead  scope='col'>Course</StudentDetailTableHead >
            <StudentDetailTableHead  scope='col'>Duration</StudentDetailTableHead >
            <StudentDetailTableHead  scope='col'>Move</StudentDetailTableHead >
            <StudentDetailTableHead  scope='col'>Show full details</StudentDetailTableHead >
            <StudentDetailTableHead  scope='col'>Remove</StudentDetailTableHead >
          </tr>
        </MDBTableHead>
       
        {loading ? <Loading/> : StudentDetails?.filter((li, index, self) =>index === self.findIndex((t) => t.status === li.status))
        .map((statusData,index) => (
          <MDBTableBody key={index}>
            {StudentDetails1.filter((status)=>status.status==statusData.status).map((li,rowindex)=>(
            <tr>
              <StudentDetailTablecolumn>
                <div className={li.status === "active" ? 'bg-success' : "bg-danger"} style={{ width: "15px", height: "15px", borderRadius: '15px', float: "left" }}></div>
                <div className='d-flex align-items-center'>
                  <img
                    src='https://mdbootstrap.com/img/new/avatars/8.jpg'
                    alt=''
                    style={{ width: '45px', height: '45px' }}
                    className='rounded-circle'
                  />
                  <div className='ms-3'>
                    <p className='fw-bold mb-1'>{li.firstName} {li.lastName}</p>
                    <p className='text-muted mb-0'>{li.email}</p>
                    <p className='text-muted mb-0'>{li.studentId}</p>
                  </div>
                </div>
              </StudentDetailTablecolumn>
              <StudentDetailTablecolumn>
                <p className='fw-normal mb-1'>{li.mobileNumber}</p>
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
                          <MDBDropdownItem link>{li.batchCode}</MDBDropdownItem>
                        ))}
                      </MDBDropdownMenu>

                    </MDBDropdown>
              </StudentDetailTablecolumn>
              <StudentDetailTablecolumn>
                <MDBBadge style={{cursor:'pointer'}}  color='success' className='fs-20 px-3' onClick={() => toggleOpen(li._id)} pill>Click</MDBBadge>
               
                {centredModal && (
                     <Popup> 
                <MDBModal open={centredModal} onClose={toggleOpen} backdrop={false}>
                   {loading1 ? (
                       <Loading/> // Show loader if data is still being fetched
                      ) : (
                  <MDBModalDialog centered>
             
                    <MDBModalContent>
                      <MDBModalHeader>
                        <MDBModalTitle>profile</MDBModalTitle>
                        <MDBBtn className='btn-close' color='none' onClick={toggleOpen}></MDBBtn>
                      </MDBModalHeader>
                      <MDBModalBody>
                     
                          <MDBCard>
                            <Mdbcartimage style={{ width: '200px', height: '200px' }} position='top' alt='...' src='https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg' />
                            <MDBCardBody>
                              <MDBCardTitle>{singleStudentData.firstName} {singleStudentData.lastName}</MDBCardTitle>
                              <MDBCardText>
                                {singleStudentData.email}<br />
                                {singleStudentData.phoneNumber}
                              </MDBCardText>
                            </MDBCardBody>
                            <MDBListGroup flush>
                              <MDBListGroupItem>status            : {singleStudentData.status}</MDBListGroupItem>
                              <MDBListGroupItem>student Id        : {singleStudentData.studentId}</MDBListGroupItem>
                              <MDBListGroupItem>enrollment_number : {singleStudentData.enrollmentNumber}</MDBListGroupItem>
                            </MDBListGroup>
                          </MDBCard>
                       
                      </MDBModalBody>
                 
                        <MDBBadge color='success' onClick={updateToggleOpen} pill style={{ cursor: 'pointer', width: "100%" }}>
                          Update
                        </MDBBadge>
                 
                    </MDBModalContent>
                   
                  </MDBModalDialog>
                )}
                </MDBModal>
                </Popup>
                )}
                  {updateModal && (
                  <StyledModal  open={updateModal} onClose={() => setupdatedModal(false)} backdrop={false}>
                        {loading1 ? (
                        <Loading/>  // Show loader if data is still being fetched
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
              <MDBInput wrapperClass='mb-4' label='Enrollment Number'  size='lg' id='form1' type='text' name="enrollmentNumber"  onChange={updateData}/>
            </MDBCol>
          </MDBRow>

          <MDBRow>
            <MDBCol md='6'>
              <MDBInput wrapperClass='mb-4' label='First Name'  size='lg' id='form1' type='text' name="firstName"  onChange={updateData}/>
            </MDBCol>

            <MDBCol md='6'>
              <MDBInput wrapperClass='mb-4' label='Last Name' size='lg' id='form2' type='text' name="lastName"  onChange={updateData}/>
            </MDBCol>
          </MDBRow>

          <MDBRow>
            <MDBCol md='6'>
              <MDBInput wrapperClass='mb-4' label='Date of birth' size='lg' id='form3' type='date' name='dateOfBirth'  onChange={updateData}/>
            </MDBCol>

            <MDBCol md='6' className='mb-4'>
              <h6 className="fw-bold">Gender: </h6>
              <MDBRadio name='gender' id='inlineRadio1' value='Femal' label='Female' inline  onClick={updateData}/>
              <MDBRadio name='gender' id='inlineRadio2' value='Male' label='Male' inline  onClick={updateData}/>
              <MDBRadio name='gender' id='inlineRadio3' value='Other' label='Other' inline  onClick={updateData}/>
            </MDBCol>
          </MDBRow>

          <MDBRow>
            <MDBCol md='6'>
              <MDBInput wrapperClass='mb-4' label='Email' size='lg' id='form4' type='email' name="email"  onChange={updateData}/>
            </MDBCol>

            <MDBCol md='6'>
              <MDBInput wrapperClass='mb-4' label='Phone Number' size='lg' id='form5' type='rel' name="mobileNumber"  onChange={updateData}/>
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol md='6'>
              <MDBInput wrapperClass='mb-4' label='Joining Date' size='lg' id='form4' type='date' name='joiningDate'  onChange={updateData}/>
            </MDBCol>

            <MDBCol md='6'>
              <MDBInput wrapperClass='mb-4' label='Course Duration' size='lg' id='form5' type='number' name='courseDuration' onChange={updateData}/>
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol md='6'>
              <MDBInput wrapperClass='mb-4' label='Course Name' size='lg' id='form4' type='text' name='courseName' onChange={updateData}/>
            </MDBCol>

            <MDBCol md='6'>
            <MDBDropdown>
            <MDBDropdownToggle style={{ fontSize: '12px', fontFamily: 'Arial, sans-serif' }} className='text-dark  bg-transparent border-0 mt-3 py-2 px-4 shadow-none border'>
               student status
            </MDBDropdownToggle>
            <MDBDropdownMenu>
          
                  <MDBDropdownItem  onClick={()=>setDropdownValue({status:"active"})}>Active</MDBDropdownItem>
                  <MDBDropdownItem  onClick={()=>setDropdownValue({status:'inactive'})}>Inactive</MDBDropdownItem>
                  <MDBDropdownItem  onClick={()=>setDropdownValue({status:"course compleated"})}>Course compleated</MDBDropdownItem>
             
          
            </MDBDropdownMenu>
          </MDBDropdown>
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol md='6'>
          <MDBDropdown>
            <MDBDropdownToggle style={{ fontSize: '12px', fontFamily: 'Arial, sans-serif' }} className='text-dark  bg-transparent border-0 mt-3 py-2 px-4 shadow-none border'>
               Mode of classes
            </MDBDropdownToggle>
            <MDBDropdownMenu>
          
                  <MDBDropdownItem  onClick={()=>setDropdownValue({modeOfClass:'online'})}>online</MDBDropdownItem>
                  <MDBDropdownItem   onClick={()=>setDropdownValue({modeOfClass:'offline'})} >offline</MDBDropdownItem>
             
             
          
            </MDBDropdownMenu>
          </MDBDropdown>
          </MDBCol>
          <MDBCol md='6'>
          <MDBDropdown>
            <MDBDropdownToggle style={{ fontSize: '12px', fontFamily: 'Arial, sans-serif' }} className='text-dark  bg-transparent border-0 mt-3 py-2 px-4 shadow-none border'>
               Mentor
            </MDBDropdownToggle>
            <MDBDropdownMenus>
          {mentor.map((li)=>(
   <MDBDropdownItem  onClick={()=>setDropdownValue({mentor:li.firstName+" "+li.lastName})} >{li.firstName+" "+li.lastName}</MDBDropdownItem>
          ))}
               
           
             
        
            </MDBDropdownMenus>
          </MDBDropdown>
          </MDBCol>

          </MDBRow>

          <MDBRow>
  <MDBTextArea
    wrapperClass='mb-4'
    label='Your Address'
    id='textAreaExample'
    // rows={6} // Number of visible rows
    placeholder='Address'
  >
    <MDBRow>
    <MDBCol md='6'>
              <MDBInput wrapperClass='mb-4' label='country' size='lg' id='form2' type='text' name="country"  onChange={updateData}/>
            </MDBCol>
    <MDBCol md='6'>
              <MDBInput wrapperClass='mb-4' label='state' size='lg' id='form2' type='text' name="state"  onChange={updateData}/>
            </MDBCol>
    </MDBRow>
    <MDBRow>
    <MDBCol md='6'>
              <MDBInput wrapperClass='mb-4' label='district' size='lg' id='form2' type='text' name="district"  onChange={updateData}/>
            </MDBCol>
    <MDBCol md='6'>
              <MDBInput wrapperClass='mb-4' label='city' size='lg' id='form2' type='text' name="city"  onChange={updateData}/>
            </MDBCol>
    </MDBRow>
    <MDBRow>
    <MDBCol md='6'>
              <MDBInput wrapperClass='mb-4' label='street' size='lg' id='form2' type='text' name="street"  onChange={updateData}/>
            </MDBCol>
    <MDBCol md='6'>
              <MDBInput wrapperClass='mb-4' label='pincode' size='lg' id='form2' type='text' name="pinCode"  onChange={updateData}/>
            </MDBCol>
    </MDBRow>
 
  </MDBTextArea>
</MDBRow>
<MDBRow>
<MDBInput wrapperClass='mb-4' size='lg' id='form4' type='file'/> 
</MDBRow>
<div className="d-flex justify-content-center">
  <MDBBtn className='mb-4' size='sm' color='success' onClick={submitForm}>Submit</MDBBtn>
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
            ))}
          </MDBTableBody>
        ))}
      </MDBTable>
    </TableView>
  </MDBContainer>
);
}

export default Student