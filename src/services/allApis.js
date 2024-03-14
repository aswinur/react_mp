import commonApi from "./commonApi"
import { BASE_URL } from "./base_url"

export const uploadVideo=async(data)=>{
    return await commonApi("POST",`${BASE_URL}/allVideos`,data)
}

export const getVideos=async()=>{
    return await commonApi("GET",`${BASE_URL}/allVideos`,"")
}

export const deleteVedio=async(id)=>{
    return await commonApi("DELETE",`${BASE_URL}/allVideos/${id}`,{})
}


export const addCategory=async(data)=>{
    return await commonApi("POST",`${BASE_URL}/category`,data)
}

export const getCategorys=async(data)=>{
    return await commonApi("GET",`${BASE_URL}/category`,data)
}

export const deleteCategorys=async(id)=>{
    return await commonApi("DELETE",`${BASE_URL}/category/${id}`,{})
}

export const addHistory=async(data)=>{
    return await commonApi("POST",`${BASE_URL}/history`,data)
}

export const getHistory=async()=>{
    return await commonApi("GET",`${BASE_URL}/history`)
}

export const deleteHis=async(id)=>{
    return await commonApi("DELETE",`${BASE_URL}/history/${id}`,{})
}

export const getSpecificVideo=async(id)=>{
    return await commonApi("GET",`${BASE_URL}/allVideos/${id}`,"")
}

export const updateCategory=async(data,id)=>{
    return await commonApi("PUT",`${BASE_URL}/category/${id}`,data)
}