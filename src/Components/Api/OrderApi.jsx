import axios from "axios";
// const baseURL = "http://localhost:5000";
const baseURL = "https://crossbackend.onrender.com";

export const orders = async (id) => {
    const response = await axios.get(`${baseURL}/api/order`)

    return response.data.data
}
export const placeOrder = async (formData) => {
    // console.log(id);
    await axios.post(`${baseURL}/api/order/create`,formData).then((res)=>{
      console.log(res.data)
      localStorage.setItem("order", JSON.stringify(res.data.data))
    }).catch((err)=>{
        console.log(err)
    })
}
export const getOneOrder =(id)=>{
    const response = axios.get(`${baseURL}/api/order/${id}`).then((res) => {
        return res.data.data
    })
    return response
}
export const deleteOrder =(id)=>{
    const response = axios.delete(`${baseURL}/api/order/${id}`).then((res) => {
        return res.data.data
    })
    return response
}