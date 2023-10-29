import axios from "axios"

const Url = "http://localhost:4422/data";

export const createTask = (data: any) =>{
    try {
        return axios.post(`${Url}/`, data);
    } catch (error) {
        console.log(error);
        
    }
}

export const getTask = () =>{
    try {
        return axios.get(`${Url}/`).then((res) =>{
            return res.data;
        })
    } catch (error) {
        console.log(error);
        
    }
}