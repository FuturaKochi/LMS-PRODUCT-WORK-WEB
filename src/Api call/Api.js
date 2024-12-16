import axios from "axios"
import { publicrequest } from "./Axios";


export const BatchandDays=async(day)=>{
    try{
const response=await publicrequest.get(`/batch/with-students/by-day?day=${day}`, { headers: { 'x-organization-id': 'org1db' } })
return response.data.data
    }catch(err){
console.log(err.message);   

    }
}


export const Batch=async()=>{
    try{
        const response=await publicrequest.get(`/batch`, { headers: { 'x-organization-id': 'org1db' } })
        return response.data.data
    }catch(err){
        console.log(err.message);  
    }
}

export const studentswithId=async(id)=>{
    try{
        const response=await publicrequest.get(`/student/${id}`)
    
        return response.data.data
    }catch(err){
        console.log(err.message);  
    }   
}

export const students=async()=>{
    try{
        const response=await publicrequest.get(`/student`)
        return response.data.data
    }catch(err){
        console.log(err.message);  
    }   
}
export const BatchWithstudents=async(id)=>{
    try{
        const response=await publicrequest.get(`/batch/with-students/${id}`)
        return response.data.data
    }catch(err){
        console.log(err.message);  
    }   
}

export const studentsPost=async(data)=>{
    try{
        const response=await publicrequest.post(`/student`,data)
        return response.data.data
    }catch(err){
        console.log(err.message);  
    }   
}

export const searchWithstudent=async(value)=>{
    console.log("111",value);
    
try{
const response=await publicrequest.get(`/student/search?name=${value}`)
console.log("final out put in student search",response);
return response.data
}catch(err){

}
}

export const searchWithcourse=async(value)=>{
    console.log("111",value);
    
try{
const response=await publicrequest.get(`/course/all`)
console.log("final out put in student search",response);
return response.data
}catch(err){

}
}


export const searchWithMentor=async()=>{
try{
const response=await publicrequest.get(`/staff/mentor/all`)
console.log("final out put in mentors.....",response);
return response.data
}catch(err){

}
}
export const postBatch=async(data)=>{
try{
const response=await publicrequest.post(`/batch`,data)
console.log("final out put in mentors.....",response);
return response.data
}catch(err){

}
}

//mentor section

export const Mentor=async()=>{
    try{
const response=await publicrequest.get(`/staff/mentor/all`)
return response.data.data
    }catch(err){

    }
}


//post students

export const studetPostData=async(data)=>{
    try{
        const response=await publicrequest.post('/student',data)
        console.log("final answwer in student post methods",response);
        
    }catch(err){
console.log("what is the error",err.message);

    }
}
