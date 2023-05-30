import { getResources } from "../services/resources-api"
import{useState, useEffect} from 'react'
import Create from "./CreateResource"
import { Link } from "react-router-dom"
import {useParams} from 'react-router-dom'

export default function Resources() {
    const [resources, setResources] = useState([])
    
    useEffect(() => {
        console.log('useEffect2')
        getResources() 
        .then(res => setResources(res.data)) 
    }, [useParams()])
    console.log(resources)
    return(
        <div>
            <ul>
            Tutorials:
            {resources.map((resource) =>{
                return (
                    <div>
                        <Link to={`/${resource._id}`}>{resource.tutorials}</Link>
                    </div>
                )
            })}
          </ul>
          <ul>
            JobBoards: 
            {resources.map((resource) =>{
                return (
                    <div>
                        <Link to={`/${resource._id}`}>{resource.jobboards}</Link>
                    </div>
                )
            })}
          </ul>
          <Create />  
        </div>
    )
}