import { getResources } from "../services/resources-api"
import{useState, useEffect} from 'react'
import Create from "./CreateResource"
import { Link } from "react-router-dom"
import {useParams, useNavigate} from 'react-router-dom'
import axios from 'axios'

import { getResource, deleteResource } from "../services/resources-api"

export default function Resources() {
    const [resources, setResources] = useState([])
    const [requestData, setRequestData] = useState(new Date());
    const params = useParams()
    const nav = useNavigate() 

    useEffect(() => {
        console.log('useEffect2')
        getResources() 
        .then(res => setResources(res.data)) 
    }, [requestData])

    useEffect(() => {
        setRequestData(new Date())
    }, [])

    console.log(resources)
    return(
        <div id='alldivs'>
            <div>
            <h1 class='title'>Tutorials</h1>
            {resources.map((resource) =>{
                const deleteTheResource = () => {
                    deleteResource(resource._id); 
                    setRequestData(new Date());
                    }
                let links={
                    link: `${resource.tutorialurls}`,
                }
                if(resource.tutorialtitles || resource.tutorialurls){
                    return (
                        <div class='content'>
                            <div><h3>{resource.tutorialtitles}</h3></div>
                            <div><em><a href={links.link} target="_blank" >{resource.tutorialurls}</a></em></div>
                            <button class='button' onClick={() => {nav(`/${resource._id}/edit`)}}>Edit</button>
                            <button class='button' onClick={deleteTheResource}>Delete</button> 
                        </div>
                    )}
            })}
            </div>
            <div>
                <h1 class='title'>JobBoards</h1>
                {resources.map((resource) =>{
                    const deleteTheResource = () => {
                        deleteResource(resource._id); 
                        setRequestData(new Date());
                        }

                        let links={
                            link: `${resource.jobboards}`,
                        }

                    if(resource.jobboards){
                        return (
                            <div class='content'>
                                <em><a href={links.link}>{resource.jobboards}</a></em>
                                <button class='button' onClick={() => {nav(`/${resource._id}/edit`)}}>Edit</button>
                                <button class='button' onClick={deleteTheResource}>Delete</button> 
                            </div>
                        )}
                })}
            </div>
            <div>
                <h1 class='title'>Definitions</h1>
                {resources.map((resource) =>{
                        const deleteTheResource = () => {
                            deleteResource(resource._id); 
                            setRequestData(new Date());
                            }
                        let links={
                            link: `${resource.jobboards}`,
                        }

                    if(resource.definitiontitles || resource.definitions){
                        return (
                            <div class='content'>
                                <h3>{resource.definitiontitles}</h3>
                                <em>{resource.definitions}</em>                             
                                <button class='button' onClick={() => {nav(`/${resource._id}/edit`)}}>Edit</button>
                                <button class='button' onClick={deleteTheResource}>Delete</button>
                            </div>
                        )}
                })}
            </div>
            <Create />  
        </div>
    )
}