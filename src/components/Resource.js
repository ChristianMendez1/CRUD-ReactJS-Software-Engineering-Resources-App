import { useState, useEffect } from "react"
import { getResource, deleteResource } from "../services/resources-api"
import {useParams, useNavigate} from 'react-router-dom'

export default function Resource() {
    const nav = useNavigate() 
    const {id} = useParams() 
    const [resource, setResource] = useState({}) 
    
    useEffect(() => {
        getResource(id)
        .then(res => setResource(res.data))}, [])

    const deleteTheResource = () => {
       deleteResource(id) 
        nav('/') 
    }

    return(
        <div>
            <h1>Resource:</h1>
            <h3>{resource.tutorials}</h3>
            <button onClick={() => {nav(`/${id}/edit`)}}>Edit</button>
            <button onClick={deleteTheResource}>Delete</button> 
            <button onClick={() => {nav('/')}}>Main</button> 
        </div>
    )
}