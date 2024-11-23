import axios from "axios"
export const BatchandDays=async(day)=>{
    try{
const response=await axios.get(`https://futuralab-lms.onrender.com/batch/with-students/by-day?day=${day}`, { headers: { 'x-organization-id': 'org1db' } })
return response.data.data
    }catch(err){
console.log(err.message);

    }
}


export const Batch=async()=>{
    try{
        const response=await axios.get(`https://futuralab-lms.onrender.com/batch`, { headers: { 'x-organization-id': 'org1db' } })
        return response.data.data
    }catch(err){
        console.log(err.message);  
    }
}

export const studentswithId=async(id)=>{
    try{
        const response=await axios.get(`https://futuralab-lms.onrender.com/student/${id}`, { headers: { 'x-organization-id': 'org1db' } })
        return response.data.data
    }catch(err){
        console.log(err.message);  
    }   
}

export const students=async()=>{
    try{
        const response=await axios.get(`https://futuralab-lms.onrender.com/student`, { headers: { 'x-organization-id': 'org1db' } })
        return response.data.data
    }catch(err){
        console.log(err.message);  
    }   
}
export const BatchWithstudents=async(id)=>{
    try{
        const response=await axios.get(`https://futuralab-lms.onrender.com/batch/with-students/${id}`, { headers: { 'x-organization-id': 'org1db' } })
        return response.data.data
    }catch(err){
        console.log(err.message);  
    }   
}