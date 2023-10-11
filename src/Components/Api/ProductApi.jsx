import axios from "axios";
// const baseURL = "http://localhost:5000";
const baseURL = "https://crossbackend.onrender.com";

export const sellerProducts = async (id) => {
    // console.log(id);
    const response = await axios.get(`${baseURL}/api/product/${id}/seller`)

    return response.data.data
}

export const createProduct = async ({ id, formData }) => {
    
    const config = {
        "content-type": "multipart/form-data",
    }
    await axios.post(`${baseURL}/api/product/${id}/create/phone`, formData, config).then(res => {
        localStorage.setItem("product", JSON.stringify(res.data.data))
        console.log(res.data)
    })
};
export const uploadCloths = async ({ id, formData }) => {
    
    const config = {
        "content-type": "multipart/form-data",
    }
    await axios.post(`${baseURL}/api/product/${id}/create/cloth`, formData, config).then(res => {
        localStorage.setItem("product", JSON.stringify(res.data.data))
        console.log(res.data)
    })
};
export const uploadElectronics = async ({ id, formData }) => {
    
    const config = {
        "content-type": "multipart/form-data",
    }
    await axios.post(`${baseURL}/api/product/${id}/create/electronics`, formData, config).then(res => {
        localStorage.setItem("product", JSON.stringify(res.data.data))
        console.log(res.data)
    })
};
export const uploadFoods = async ({ id, formData }) => {
    
    const config = {
        "content-type": "multipart/form-data",
    }
    await axios.post(`${baseURL}/api/product/${id}/create/food`, formData, config).then(res => {
        localStorage.setItem("product", JSON.stringify(res.data.data))
        console.log(res.data)
    })
};

export const addTag = async ({id,tag_No,quantity,startDate,endDate,active}) => {

    await axios.patch(`${baseURL}/api/product/${id}/update`,{id,tag_No,quantity,startDate,endDate,active}).then(res => {
        localStorage.setItem("product", JSON.stringify(res.data.data))
        console.log(res.data)
    })
};

export const getAllProduct = async () => {
    const response = await axios.get(`${baseURL}/api/product`).then((res) => {
        // console.log(res.data.data)
        return res.data.data
    })

    return response
}
export const getSingleProduct = async (id) => {
    // console.log(id)
    const res = await axios.get(`${baseURL}/api/product/${id}`)

    return res.data.data
}
export const purchasedProduct = async ({ids, quantities}) => {
    // console.log(id)
    const res = await axios.patch(`${baseURL}/api/product/order`,{ids, quantities})
    console.log(res)
    return res.data.data
}