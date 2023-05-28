import { useNavigate } from "react-router-dom"
import {createResource} from '../services/resources-api'

function Create() {
    const nav = useNavigate()

    const createTheResource = (e) => {
        const resource = {tutorials: e.target.tutorials.value}
        createResource(resource).then(() => nav('/'))
    }

return(
    <div>
        <h4>Create a Resource</h4>
        <form onSubmit={createTheResource}>
            <input type='text' name='tutorials' id='rsc'/>
            <input type='submit'/>
        </form>
    </div>
)
}

export default Create