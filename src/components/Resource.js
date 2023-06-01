import { useState, useEffect } from "react"
import { getResource, deleteResource } from "../services/resources-api"
import {useParams, useNavigate} from 'react-router-dom'

export default function Resource() {
    const nav = useNavigate() 
    const {id} = useParams() 
    const [resource, setResource] = useState({}) 
    const [requestData, setRequestData] = useState(new Date());

    useEffect(() => {
        console.log('useeffect')
        getResource(id)
        .then(res => setResource(res.data))
    }, [requestData])

    useEffect(() => {
        console.log('useeffect3')
        setRequestData(new Date())
    }, [])

    const deleteTheResource = () => {
       deleteResource(id) 
        nav('/') 
    }

    return(
        <div >
            <div class='content'>
            <h3>Resource: {resource.tutorialtitles}{resource.tutorialurls}{resource.jobboards}{resource.definitiontitles}{resource.definitions}</h3>
            <button onClick={() => {nav(`/${id}/edit`)}}>Edit</button>
            <button onClick={deleteTheResource}>Delete</button> 
            <button onClick={() => {nav('/')}}>Main</button> 
            </div>
        </div>
    )
}