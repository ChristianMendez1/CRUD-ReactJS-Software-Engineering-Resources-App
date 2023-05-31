import axios from 'axios'

const baseURL = 'https://crud-expressjs-seresourcesapp.onrender.com/resources'

export const getResources = () => {
    const URL = baseURL
    const response = axios.get(URL) 
    return response
}

export const getResource = (id) => {
    const URL = `${baseURL}/${id}`
    const response = axios.get(URL)
    return response
}

export const editResource = (id, updatedResource) => {
    const URL = `${baseURL}/${id}`
    const response = axios.put(URL, updatedResource)
    return response
}

export const createResource = (resource) => {
    const URL = baseURL
    const response = axios.post(URL, resource)
    return response
}

export const deleteResource = (id) => {
    const URL = `${baseURL}/${id}`
    const response = axios.delete(URL)
    return response
}