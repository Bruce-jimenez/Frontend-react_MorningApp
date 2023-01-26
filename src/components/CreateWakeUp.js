import { useNavigate } from "react-router-dom";
import { createDayBreak } from "../services/wakeUpLogger-api";

function CreateWakeLog() {
    const nav = useNavigate()

    const CreatetheWakeLog = (e) => {
        const wakelog = {time: e.target.time.value, emotion: e.target.emotion.value}
        createDayBreak(wakelog)
        nav('/')
    }

return(
    <div>
        <h2>Log the Morning</h2>
        <form onSubmit={CreatetheWakeLog}>
          Time:  <input type='text' name='time' id='dsc' />
          <br />
          Emotion:  <input type='text' name='emotion' id='dsc' />
          <br />
        <input type='submit' />
        </form>
    </div>
)
}

export default CreateWakeLog