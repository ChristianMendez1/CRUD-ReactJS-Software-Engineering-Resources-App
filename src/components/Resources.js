import { getResources } from "../services/resources-api"
import{useState, useEffect} from 'react'
import Create from "./CreateResource"
import { Link } from "react-router-dom"

export default function Resources() {
    const [resources, setResources] = useState([])
    useEffect(() => {
        getResources() 
        .then(res => setResources(res.data)) 
    }, [])
    console.log(resources)
    return(
        <div>
            <ul>
            {resources.map((resource) =>{
                return (
                    <div>
                        <Link to={`/${resource._id}`}>{resource.tutorials}</Link>
                    </div>
                )
            })}
          </ul>
          <Create />  
        </div>
    )
}