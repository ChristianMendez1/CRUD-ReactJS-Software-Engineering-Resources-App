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
        <div>
            <div>
            <h1><u>Tutorials</u></h1>
            {resources.map((resource) =>{
                const deleteTheResource = () => {
                    deleteResource(resource._id); 
                    setRequestData(new Date());
                    }
                if(resource.tutorialtitles){
                    return (
                        <div class='resourcediv'>
                            <h3 class='resourcediv'>{resource.tutorialtitles}
                            <button class='button' onClick={() => {nav(`/${resource._id}/edit`)}}>Edit</button>
                            <button class='button' onClick={deleteTheResource}>Delete</button></h3>
                        </div>
                    )}
            })}
            {resources.map((resource) =>{
                    const deleteTheResource = () => {
                        deleteResource(resource._id); 
                        setRequestData(new Date());
                        }
                    let links={
                        link: `${resource.tutorialurls}`,
                    }
                if(resource.tutorialurls){
                    return (
                        <div class='resourcediv'>
                            <a href={links.link}>{resource.tutorialurls}</a>
                            <button class='button' onClick={() => {nav(`/${resource._id}/edit`)}}>Edit</button>
                            <button class='button' onClick={deleteTheResource}>Delete</button> 
                        </div>
                    )}
            })}
            </div>
            <div>
                <h1><u>JobBoards</u></h1>
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
                            <div class='resourcediv'>
                                <a href={links.link}>{resource.jobboards}</a>
                                <button class='button' onClick={() => {nav(`/${resource._id}/edit`)}}>Edit</button>
                                <button class='button' onClick={deleteTheResource}>Delete</button> 
                            </div>
                        )}
                })}
            </div>
            <div>
                <h1><u>Definitions</u></h1>
                {resources.map((resource) =>{
                        const deleteTheResource = () => {
                            deleteResource(resource._id); 
                            setRequestData(new Date());
                            }
                        let links={
                            link: `${resource.jobboards}`,
                        }

                    if(resource.definitiontitles){
                        return (
                            <div class='resourcediv'>
                                <h3 class='resourcediv'>{resource.definitiontitles}                                
                                <button class='button' onClick={() => {nav(`/${resource._id}/edit`)}}>Edit</button>
                                <button class='button' onClick={deleteTheResource}>Delete</button> </h3>
                            </div>
                        )}
                })}
                {resources.map((resource) =>{
                        const deleteTheResource = () => {
                            deleteResource(resource._id); 
                            setRequestData(new Date());
                            }
                        let links={
                            link: `${resource.jobboards}`,
                        }
                    if(resource.definitions){
                        return (
                            <div class='resourcediv'>
                                {resource.definitions}
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