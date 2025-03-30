import axios from "axios"

const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL,
    timeout: 5000
});

export const getItemInfoById = async(id: number) => {
    const response = await axiosInstance.get(`itemInfo/${id}`).then((response) => response.data);
    return response;
}

export const getItemsByQuery = async (query: string) => {
    const response = await axiosInstance.get(`/itemSearch`, { params: { query: query } }).then((response) => response.data);
    return response;
}

export const getItemCraftById = async (id: number) => {
    const response = await axiosInstance.get(`itemCraft/${id}`).then((response) => response.data);
    console.log(response);
    return response;
}