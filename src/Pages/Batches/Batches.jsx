import React, { useEffect, useState } from 'react'
import Datepicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaCalendarAlt } from 'react-icons/fa'
import { styled, keyframes, createGlobalStyle } from 'styled-components'
import { MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem, MDBIcon, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn, MDBSpinner, MDBContainer, } from 'mdb-react-ui-kit';
import axios from 'axios'
import { Link } from 'react-router-dom';
import Loading from '../../Component/Loading';
import Navbar1 from '../../Component/Navbar1';
import { Batch } from '../../Api call/Api';


const DropDown = styled(MDBDropdownToggle)`
   font-family: "Space Grotesk", sans-serif;
  font-optical-sizing: auto;
  font-weight:400; /* Default weight can be set here */
  font-style: normal;
  color: #411B66;
  font-size: 12px;
`
const CardTitle = styled(MDBCardTitle)`
    font-family: "Space Grotesk", sans-serif;
  font-optical-sizing: auto;
  font-weight:400; /* Default weight can be set here */
  font-style: normal;
  color: #411B66;
`
const CardText = styled(MDBCardText)`
      font-family: "Space Grotesk", sans-serif;
  font-optical-sizing: auto;
  font-weight:400; /* Default weight can be set here */
  font-style: normal;
  color: #411B66;
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


`

const Message = styled.div`
  width: 100%;
  height: 83vh;
  padding: 1px;
display: flex;
flex-wrap: wrap;
overflow: scroll;

`



const Content = styled.div`
  gap:1rem;  
  width: 100%;
  white-space: nowrap; 
  overflow-x: scroll;
  -ms-overflow-style: none; 
  scrollbar-width: none; 
  margin: 25px;
  &::-webkit-scrollbar {
    display: none;
  }
  `
const SubMain = styled.div`
 min-width: 450px;
display: inline-block;
  text-align: center;
`
const AnimatedCard = styled(MDBCard)`
  position: relative;
  overflow: hidden; /* Ensures the gradient stays within the card */
  transition: background-color 0.5s ease;
  background: linear-gradient(135deg, #e5deeb, rgba(255, 255, 255, 1));
  margin-left: 45px;
  margin-right: 45px;
  border-radius: 50px;
  &:hover {
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(135deg, rgba(216, 231, 248, 0.3), rgba(209, 229, 252, 0.3)); /* Overlay color */
      animation: slide 0.7s forwards; /* Animation for slide effect */
    }
  }
`;

// Keyframes for the slide animation
const slideAnimation = `
  @keyframes slide {
    0% {
      top: -100%; /* Start above the card */
      left: 0; /* Align to the left */
      height: 0; /* No height initially */
      width: 100%; /* Full width */
    }
    100% {
      top: 0; /* Move to the top of the card */
      left: 0; /* Align to the left */
      height: 100%; /* Full height */
      width: 100%; /* Full width */
    }
  }
`;


// Define a global style for keyframes
const GlobalStyle = createGlobalStyle`
  ${slideAnimation}
`;

const Leftside2 = styled.div`
display: flex;
  width: 60%;
  align-items: center;
  justify-content: space-around;
  margin-left: 30px;

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

const InputGroup = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  border: 1px solid #dfdfdf;
  border-radius: 8px;
  background-color: #ffffff;
  transition: border-color 0.3s ease;

  &:focus-within {
    border-color: #007bff; /* Change border color on focus */
  }
`

const InputStyled = styled.input`
  border: none;
  outline: none;
  flex: 1;
  font-size: 16px;
  color: #333;
  background-color: transparent;
  &::placeholder{
    color:#411B66 ;
    font-family: "Space Grotesk", sans-serif;
  font-optical-sizing: auto;
  font-weight:400; /* Default weight can be set here */
  font-style: normal;
  }
`;

const InputGroupAppend = styled.div`
  display: flex;
  align-items: center;
`;

const InputGroupText = styled.span`
  display: flex;
  align-items: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: #333;
  font-size: 1.2em;
  padding: 0 8px;

  &:hover {
    color: #007bff; /* Change icon color on hover */
  }
`;


const SpaceGroteskText = styled.div`
  font-family: "Space Grotesk", sans-serif;
  font-optical-sizing: auto;
  font-weight:400; /* Default weight can be set here */
  font-style: normal;
  color: #f5f5f5;
  cursor: pointer;
  font-size: 14px;
  display: flex;
  align-items: center;

`;




function CustomInput({ value, onClick }) {
  return (
    <InputGroup>
      <InputStyled type="text" value={value} placeholder="Select Date" onClick={onClick} readOnly />
      <InputGroupAppend>
        <InputGroupText onClick={onClick}>
          <FaCalendarAlt />
        </InputGroupText>
      </InputGroupAppend>
    </InputGroup>
  );
}


  //time format

  function timeFormat(value){
 
    const date = new Date(value);
    
    // Format the time in 12-hour clock with AM/PM
    const formattedTime = new Intl.DateTimeFormat("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true, // Ensures 12-hour format
    }).format(date);
    
    return formattedTime
    
      }




const Batches = () => {


  

  const [demoDatas, setDemoDatas] = useState([]);
  const [demoDatas1, setDemoDatas1] = useState([]);
  const [selectedDate, setDate] = useState(null);
  const [day, setDay] = useState('');
  const [module, setModules] = useState([])
  const [loading, setLoading] = useState(false)


  // Get today's day when the component mounts
  useEffect(() => {
    const today = new Date();

    // Get the day of the week (0 - Sunday, 6 - Saturday)
    const dayOfWeek = today.getDay();
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    // Get the name of today's day and set it in state
    const dayName = daysOfWeek[dayOfWeek];
    setDay(dayName);
  }, []);

  console.log("first check", typeof (day));


  // Make the API call based on the day state
  useEffect(() => {
    setLoading(true)
    if (day) {
      console.log("Making API call for day:", day);
      Batch()
        .then((response) => {
          setDemoDatas(response);
          setDemoDatas1(response);
          setLoading(false)

          console.log(response, "API Response");
        })
        .catch((error) => {
          console.error("Error fetching data", error);
        });
    }
  }, [day, selectedDate]);  // Adding `day` as a dependency so it runs when `day` changes

  // Handle when selectedDate changes
  useEffect(() => {
    if (selectedDate) {
      const dayOfWeek = selectedDate.getDay();
      const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      setDay(daysOfWeek[dayOfWeek]);
    }
  }, [selectedDate]);  // Adding selectedDate as a dependency


  //filtering mentor

  function filterMentor(value) {
    console.log("////////////////////", value);
    const mentorBatch = demoDatas1.filter((li) => {
      return li.mentor == value
    })
    setDemoDatas(mentorBatch)
  }


  useEffect(() => {
    if (demoDatas1) {
      const filteredModules = demoDatas1
        .filter((li) => li.modules && li.modules.length > 0) // Ensure modules exist and have elements
        .map((li) => li.modules[0]); // Get the first element of each module array

      setModules(filteredModules); // Set the modules as the array of first elements
    }
  }, [demoDatas1]);

  console.log("modues**", module);
  console.log("demodatas**", demoDatas1);


  function filterModule(value) {
    const moduleBatch = demoDatas1.filter((li) => {

      const data = li.modules.filter((innerData) => {
        return innerData.module_name == value
      })
      return data[0]?.module_name == value
    })
    setDemoDatas(moduleBatch)
  }



  return (
    <MDBContainer fluid>
      <Navbar1 day={day} filter={setDemoDatas1} />
      <Navsection2>
        <Leftside2>
          {/* <label style={{ marginLeft: "10px" }} htmlFor=""> */}
          {/* <Datepicker selected={selectedDate} onChange={date => setDate(date)} customInput={<CustomInput />} /> */}
          {/* </label> */}
          <Link style={{ textDecoration: "none" }} to={'/createbatch'}><SpaceGroteskText><span class="material-symbols-outlined m-2">
            add_card
          </span> Add New Batch</SpaceGroteskText></Link>
          <MDBDropdown>
            <DropDown className='text-white  bg-transparent border-0  py-2 px-4 shadow-none border'>
              Mentor
            </DropDown>


            <MDBDropdownMenu>
              {demoDatas1
                ?.filter((li, index, self) => index === self.findIndex((t) => t.mentor === li.mentor))
                .map((li, index) => (
                  <MDBDropdownItem link key={index} onClick={() => filterMentor(li.mentor)}>{li.mentor}</MDBDropdownItem>
                ))}


            </MDBDropdownMenu>
          </MDBDropdown>

          <MDBDropdown>
            < DropDown className='text-white  bg-transparent border-0  py-2 px-4 shadow-none border'>
              Batch type
            </DropDown>
            <MDBDropdownMenu>
              <MDBDropdownItem link>Active Batch</MDBDropdownItem>
              <MDBDropdownItem link>Archived Batch</MDBDropdownItem>
            </MDBDropdownMenu>
          </MDBDropdown>
          <MDBDropdown>
            < DropDown className='text-white  bg-transparent border-0  py-2 px-4 shadow-none border'>
              Select Module
            </DropDown>
            <MDBDropdownMenu>
              {module
                ?.filter((li, index, self) => index === self.findIndex((t) => t.module_name === li.module_name))
                .map((li, index) => (
                  <MDBDropdownItem link key={index} onClick={() => filterModule(li.module_name)}>{li.module_name}</MDBDropdownItem>
                ))}
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
      <Message>
        {loading ?

          <Loading />

          : demoDatas1
            ?.filter((li, index, self) => index === self.findIndex((t) => t.mentor === li.mentor)) // Get unique mentors
            .sort((a, b) => a.mentor.localeCompare(b.mentor)) // Sort mentors alphabetically
            .map((mentorData, index) => (
              <Content className='container-fluid' key={index}>
                {demoDatas // Map over all batches but only display those with the same mentor
                  .filter((batch) => batch.mentor === mentorData.mentor)
                  .map((li) => (
                    <SubMain key={li._id}>
                      <Link style={{ textDecoration: 'none' }} to={`/singlebatch/${li._id}`}>
                        <GlobalStyle />
                        <AnimatedCard>
                          <MDBCardBody>
                            <CardTitle className='fs-5'>{li.batchName}</CardTitle>
                            <CardText>{li.mentor}</CardText>
                            <CardText>
                              {li.batchCode}
                              <br />
                              <MDBIcon fas icon="clock" /> { timeFormat(li.startTime)} to { timeFormat(li.endTime)}
                            </CardText>
                            <CardText>
                              <MDBIcon fas icon="plus" className='text-success' /> {li.students.length} students
                              <br />
                            </CardText>
                          </MDBCardBody>
                        </AnimatedCard>
                      </Link>
                    </SubMain>
                  ))}
              </Content>
            ))
        }
      </Message>
    </MDBContainer>

  )
}

export default Batches