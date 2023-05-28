import { useNavigate } from "react-router-dom"
import {createResource} from '../services/resources-api'

function Create() {
    const nav = useNavigate()

    const createTheResource = (e) => {
        const resource = {description: e.target.description.value, complete: false}
        createResource(resource).then(() => nav('/'))
        
    }

return(
    <div>
        <h4>Create a Resource</h4>
        <form onSubmit={createTheResource}>
            <input type='text' name='description' id='dsc'/>
            <input type='submit'/>
        </form>
    </div>
)
}

export default Create