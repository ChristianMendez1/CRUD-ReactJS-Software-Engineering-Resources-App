import { useNavigate } from "react-router-dom"
import {createResource} from '../services/resources-api'

function Create() {
    const nav = useNavigate()

    const createTutorialTitles = (e) => {
        const resource =    {
            tutorialtitles: e.target.tutorialtitles.value, 
        }
        createResource(resource).then(() => nav('/'))
    }

    const createTutorialUrls = (e) => {
        const resource =    {
            tutorialurls: e.target.tutorialurls.value, 
        }
        createResource(resource).then(() => nav('/'))
    }

    const createJobBoards = (e) => {
        const resource =    {
            jobboards: e.target.jobboards.value,
        }
        createResource(resource).then(() => nav('/'))
    }

    const createDefinitionTitles = (e) => {
        const resource =    {
            definitiontitles: e.target.definitiontitles.value,
        }
        createResource(resource).then(() => nav('/'))
    }

    const createDefinitions = (e) => {
        const resource =    {
            definitions : e.target.definitions.value
        }
        createResource(resource).then(() => nav('/'))
    }

return(
    <div>
        <h4>Create a Resource</h4>
        <form onSubmit={createTutorialTitles}>
            Tutorial title: <input type='text' name='tutorialtitles' id='rsc'/><br></br>
            <input type='submit'/>
        </form><br></br>
        <form onSubmit={createTutorialUrls}>
            Tutorial url: <input type='url' name='tutorialurls' id='rsc'/><br></br>
            <input type='submit'/>
        </form><br></br>
        <form onSubmit={createJobBoards}>
            Job Board: <input type='url' name='jobboards' id='rsc'/><br></br>
            <input type='submit'/>
        </form><br></br>
        <form onSubmit={createDefinitionTitles}>
            Definition title: <input type='text' name='definitiontitles' id='rsc'/><br></br>
            <input type='submit'/>
        </form><br></br>
        <form onSubmit={createDefinitions}>
            Definition description: <input type='text' name='definitions' id='rsc'/><br></br>
            <input type='submit'/>
        </form>
    </div>
)
}

export default Create