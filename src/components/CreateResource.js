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
        <h1 class='title'>Create a Resource</h1>
        <form class='content' onSubmit={createTutorialTitles}>
            Tutorial title:&nbsp; <input type='text' name='tutorialtitles' id='rsc'/><br></br>
            <input type='submit'/>
        </form>
        <form class='content' onSubmit={createTutorialUrls}>
            Tutorial url:&nbsp; <input type='url' name='tutorialurls' id='rsc'/><br></br>
            <input type='submit'/>
        </form>
        <form class='content' onSubmit={createJobBoards}>
            Job Board:&nbsp; <input type='url' name='jobboards' id='rsc'/><br></br>
            <input type='submit'/>
        </form>
        <form class='content' onSubmit={createDefinitionTitles}>
            Definition title:&nbsp; <input type='text' name='definitiontitles' id='rsc'/><br></br>
            <input type='submit'/>
        </form>
        <form class='content' onSubmit={createDefinitions}>
            Definition description:&nbsp; <input type='text' name='definitions' id='rsc'/><br></br>
            <input type='submit'/>
        </form>
    </div>
)
}

export default Create