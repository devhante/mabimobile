import axios from "axios"

const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL,
    timeout: 5000
});

export const getItemById = async(id: number) => {
    const response = await axiosInstance.get(`item/${id}`).then((response) => response.data);
    return response;
}

export const getItemsByQuery = async (query: string) => {
    const response = await axiosInstance.get(`/itemSearch`, { params: { query: query } }).then((response) => response.data);
    return response;
}

export const getItemCraftById = async (id: number) => {
    const response = await axiosInstance.get(`itemCraft/${id}`).then((response) => response.data);
    return response;
}

export const postNyangGacha = async (firstSlot: number, firstResult: number, secondSlot: number, secondResult: number, thirdSlot: number, thirdResult: number, fourthSlot: number, fourthResult: number, fifthSlot: number, fifthResult: number) => {
    const response = await axiosInstance.post(`nyangGachaResult`, {
        userId: "devhante",
        firstSlot: firstSlot,
        firstResult: firstResult,
        secondSlot: secondSlot,
        secondResult: secondResult,
        thirdSlot: thirdSlot,
        thirdResult: thirdResult,
        fourthSlot: fourthSlot,
        fourthResult: fourthResult,
        fifthSlot: fifthSlot,
        fifthResult: fifthResult
    }).then((response) => response.data);
    return response;
}