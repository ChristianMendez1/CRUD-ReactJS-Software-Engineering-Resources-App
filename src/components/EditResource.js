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

    const editTheResource = e => {
        e.preventDefault()
        const updatedResource = {tutorials: e.target.tutorials.value}
        editResource(id, updatedResource)
        nav(`/${id}`)
    }
  return (
    <div>
        <form onSubmit={editTheResource}>
            Tutorials:<input type='text' name='tutorials' defaultValue={data.tutorials}/>
            <input type='submit' />
        </form>
    </div>
  )
}
