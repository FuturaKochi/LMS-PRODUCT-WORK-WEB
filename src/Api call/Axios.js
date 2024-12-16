import axios from "axios"

const URL=`https://futuralab-lms.onrender.com`
// const URL=`http://192.168.29.220:4000`

export const publicrequest=axios.create({
    baseURL:URL,
    headers:{ 'x-organization-id': 'org1db' }
})