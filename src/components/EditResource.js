import { getResource, editResource} from "../services/resources-api"
import {useState, useEffect} from 'react'
import {useNavigate, useParams} from 'react-router-dom'

export default function EditResource(){
    const {id} = useParams()
    const nav = useNavigate()
    const [data, setData] = useState({})

    useEffect(() => {
        getResource(id) 
        .then(res => setData(res.data))
    }, [])

    const editTheTutorialtitles = e => {
        e.preventDefault()
        const updatedResource = {
            tutorialtitles: e.target.tutorialtitles.value
        }
        editResource(id, updatedResource)
        nav(`/${id}`)
    }

    const editTheTutorialurls = e => {
        e.preventDefault()
        const updatedResource = {
            tutorialurls: e.target.tutorialurls.value
        }
        editResource(id, updatedResource)
        nav(`/${id}`)
    }

    const editTheJobboard = e => {
        e.preventDefault()
        const updatedResource = {
            jobboards: e.target.jobboards.value
        }
        editResource(id, updatedResource)
        nav(`/${id}`)
    }

    const editTheDefinitiontitles = e => {
        e.preventDefault()
        const updatedResource = {
            definitiontitles: e.target.definitiontitles.value
        }
        editResource(id, updatedResource)
        nav(`/${id}`)
    }

    const editTheDefinitions = e => {
        e.preventDefault()
        const updatedResource = {
            definitions: e.target.definitions.value
        }
        editResource(id, updatedResource)
        nav(`/${id}`)
    }

    if(data.tutorialtitles){
    return (
        <div>
            <form onSubmit={editTheTutorialtitles}>
                Tutorials:<input type='text' name='tutorialtitles' defaultValue={data.tutorialtitles}/><br></br>
                <input type='submit' /><br></br>
                <button onClick={() => {nav('/')}}>Home</button> 
            </form>
        </div>
  )} else if(data.tutorialurls){
    return (
        <div>
            <form onSubmit={editTheTutorialurls}>
                Job Boards:<input type='url' name='tutorialurls' defaultValue={data.tutorialurls}/><br></br>
                <input type='submit' /><br></br>
                <button onClick={() => {nav('/')}}>Home</button> 
            </form>
        </div>
      )
  } else if(data.jobboards){
    return (
        <div>
            <form onSubmit={editTheJobboard}>
                Job Boards:<input type='url' name='jobboards' defaultValue={data.jobboards}/><br></br>
                <input type='submit' /><br></br>
                <button onClick={() => {nav('/')}}>Home</button> 
            </form>
        </div>
      )
  } else if(data.definitiontitles){
    return (
        <div>
            <form onSubmit={editTheDefinitiontitles}>
                Definitions:<input type='text' name='definitiontitles' defaultValue={data.definitiontitles}/><br></br>
                <input type='submit' /><br></br>
                <button onClick={() => {nav('/')}}>Home</button> 
            </form>
        </div>
    )
} else if(data.definitions){
        return (
            <div>
                <form onSubmit={editTheDefinitions}>
                    Definitions:<input type='text' name='definitions' defaultValue={data.definitions}/><br></br>
                    <input type='submit' /><br></br>
                    <button onClick={() => {nav('/')}}>Home</button> 
                </form>
            </div>
        )
  }
}
