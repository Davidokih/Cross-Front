import axios from "axios";
// const baseURL = "http://localhost:5000";
const baseURL = "https://crossbackend.onrender.com";

export const createUser = async({firstName,lastName,email,companyName, phoneNum, password}) => {
    await axios.post(`${baseURL}/api/seler/register`, { firstName, lastName, email, companyName, phoneNum, password }).then(res => {
        localStorage.setItem("user", JSON.stringify(res.data.data))
        // alert(res.data.token)
    })
}
export const createAdmin = async(value) => {
    await axios.post(`${baseURL}/api/user/register`, value).then(res => {
        localStorage.setItem("user", JSON.stringify(res.data.data))
        // alert(res.data.token)
    })
}
export const loginUser= async({email, password}) => {
    await axios.post(`${baseURL}/api/user/login`, {email, password }).then(res => {
        localStorage.setItem("user", JSON.stringify(res.data.data))
        // alert(res.data.token)
    })
}
export const logInUser = async({email,password}) => {
    await axios.post(`${baseURL}/api/seler/signInUser`, { email, password }).then(res => {
        localStorage.setItem("user", JSON.stringify(res.data.data))
    });
};

export const verifyUser2 = async ({id, otp}) => {
    await axios.patch(`${baseURL}/api/user/${id}/verify2`, {otp} ).then(res => {
        console.log(res.data)
    })
};
export const verifyUser = async ({id, otp}) => {
    await axios.patch(`${baseURL}/api/user/${id}/verify`, {otp} ).then(res => {
        console.log(res.data)
    })
};

export const userInformation = async ({ id, formData }) => {
    const config = {
        "content-type": "multipart/form-data",
    }
    await axios.patch(`${baseURL}/api/seler/${id}/update`, formData, config).then(res => {
        console.log(res.data)
    }).catch(err => {
        console.log(err)
    })
}

export const personalInfo = async ({id, gender, DateOfBirth, country}) => {
    await axios.patch(`${baseURL}/api/seler/${id}/updateuser`, {gender, DateOfBirth, country}).then(res => {
        // console.log(res.data)
    })
}
export const businessInfo = async ({id, address, address2, shippingFrom,codePostal,shopName,city}) => {
    await axios.patch(`${baseURL}/api/seler/${id}/updateuser`, {address, address2, shippingFrom,codePostal,shopName,city}).then(res => {
        // console.log(res.data)
    })
}
export const bankDetail = async ({ id, bankName,accountName,accNumber,completed}) => {
    await axios.patch(`${baseURL}/api/seler/${id}/updateuser`, {bankName,accountName,accNumber,completed}).then(res => {
        // console.log(res.data)
    })
}
export const getUser = async () => {
    const response = await axios.get(`${baseURL}/api/user`).then(res => {
        // console.log(res.data)
        return res.data.data
    })

    return response
}
export const getCoustomers = async () => {
    const response = await axios.get(`${baseURL}/api/user/custormers`).then(res => {
        // console.log(res.data)
        return res.data.data
    })

    return response
}
export const getOneUser = async (id) => {
    const response = await axios.get(`${baseURL}/api/user/${id}`).then(res => {
        // console.log(res.data)
        return res.data.data
    })

    return response
}