import { useNavigate } from "react-router-dom"
import {createResource} from '../services/resources-api'

function Create() {
    const nav = useNavigate()

    const createTheResource = (e) => {
        const resource =    {
            tutorialtitles: e.target.tutorialtitles.value, 
            tutorialurls: e.target.tutorialurls.value, 
            jobboards: e.target.jobboards.value,
            definitiontitles: e.target.definitiontitles.value,
            definitions : e.target.definitions.value
        }
        createResource(resource).then(() => nav('/'))
    }

return(
    <div>
        <h4>Create a Resource</h4>
        <form onSubmit={createTheResource}>
            Tutorial titles: <input type='text' name='tutorialtitles' id='rsc'/><br></br>
            Tutorial urls: <input type='url' name='tutorialurls' id='rsc'/><br></br>
            Job Boards: <input type='url' name='jobboards' id='rsc'/><br></br>
            Definition titles: <input type='text' name='definitiontitles' id='rsc'/><br></br>
            Definition descriptions: <input type='text' name='definitions' id='rsc'/><br></br>
            <input type='submit'/>
        </form>
    </div>
)
}

export default Create