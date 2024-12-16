import axios from 'axios'
import { MDBIcon } from 'mdb-react-ui-kit'
import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components'
import { Batch } from '../Api call/Api'

const breakpoints = {
  mobile: '480px',
  tablet: '768px',
  desktop: '1024px',
};

const Navsection1 = styled.div`
width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  margin: 0;
`

const Image = styled.img`
width: 7rem;
margin-right: 100px;

`
const Leftside = styled.div`
  width: 70%;
  display: flex;
  align-items: center;  
  justify-content: flex-start;
  @media (min-width: ${breakpoints.mobile}) and (max-width: ${breakpoints.tablet}) {
 width: 60%;
  }
  @media (min-width: ${breakpoints.tablet}) and (max-width: ${breakpoints.desktop}) {
    width: 60%;
  }

`
const Rightside = styled.div`
  width: 20%;
  display: flex;
  align-items: center;
  justify-content:space-between ;
  margin-right: 0px;
  @media (max-width: ${breakpoints.mobile}) {

  }

  @media (min-width: ${breakpoints.mobile}) and (max-width: ${breakpoints.tablet}) {
 width: 40%;
  }

  @media (min-width: ${breakpoints.tablet}) and (max-width: ${breakpoints.desktop}) {
    width: 40%;
  justify-content: space-around;
  }
`

const Input = styled.input`
  width: 100%;
  border: none;
  padding: 4px;
  border-radius: 25px;
  outline-color: #411B66;
  &::placeholder {
    font-family: "Space Grotesk", sans-serif;
  font-optical-sizing: auto;
  font-weight:100; /* Default weight can be set here */
  font-style: normal;
  color: #411B66;
  
  }
  &:focus{
outline: none;
  }
`
const Searchbar = styled.div`
  border: .1px solid #411B66;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 46.5%;
  border-radius: 25px;
  outline-color: #411B66;
 background-color: white;
 
 @media (min-width: ${breakpoints.mobile}) and (max-width: ${breakpoints.tablet}) {
 width: 70%;
  }
 
`
const CustomIcon = styled(MDBIcon)`
  color:#411B66;
  margin: 0.5rem;
  font-size:medium ;
`;
const Button = styled.div`
  padding: 3px;
  border-radius: 7px;
  border: 0.5px solid grey;
  margin-right: 17px;

`


const SpaceGroteskText = styled.div`
  font-family: "Space Grotesk", sans-serif;
  font-optical-sizing: auto;
  font-weight:100; /* Default weight can be set here */
  font-style: normal;
  color: #000000;
  /* background-color: #411B66 ; */
  cursor: pointer;
  padding: 5px;
  border-radius: 10px;
  &:hover{
    background-color: white;
    color:  #411B66;
    @media (min-width: ${breakpoints.mobile}) and (max-width: ${breakpoints.tablet}) {
padding: 1.5px;
font-size: 14px;
background-color: #6c0202 ;
  }
  }

`;
const Days=styled.h6`
    font-family: "Space Grotesk", sans-serif;
  font-optical-sizing: auto;
  font-weight:200; /* Default weight can be set here */
  font-style: normal;
  color: #411B66;
  @media (min-width: ${breakpoints.mobile}) and (max-width: ${breakpoints.tablet}) {
font-weight: 300;
  }

`

const Navbar1 = ({day,filter,student,setStudent}) => {

  const [searchQuery, setSearchQuery] = useState('');
  const [filteredStudents, setFilteredStudents] = useState();
  const [batchData, setBatchData] = useState([]);

  useEffect(()=>{
    Batch().then((data)=>{
    console.log("navbar data",data);
    setBatchData(data)
    }).catch((err)=>{
      console.log("nav bar error",err.message);
      
    })
    },[])

  // Update filtered results as search query changes
  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);
    
    const filtered = batchData.filter(states =>
      states.mentor.toLowerCase().includes(query)
    );
    setFilteredStudents(filtered);
    filter(filtered)
  };
  

console.log("filtered students**",filteredStudents);


  return (
    <Navsection1>
    <Leftside>
      {/* <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPgJPgAp_4zvcBBWIgWfIfbTo5qYymSC1T6djE5sijLRq2hGOfQpR-FOvac0cGcc_0vVc&usqp=CAU'></Image> */}
      <Image src='./Logo/futura-labs logo.svg'></Image>
      <Searchbar>
        <Input type='search' placeholder='Search Mentor'   value={searchQuery}  onChange={handleSearch}></Input>
        <CustomIcon className='m-2 gray-icon' fas icon="search" size='lg' />
      </Searchbar>
    </Leftside>
    <Rightside>
    <Days>{day}</Days>
      {/* <Button> */}
      <SpaceGroteskText>Logout</SpaceGroteskText>
      {/* </Button> */}
    </Rightside>
  </Navsection1>
  )
}

export default Navbar1