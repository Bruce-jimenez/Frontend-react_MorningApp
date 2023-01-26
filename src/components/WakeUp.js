import { useState, useEffect} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getDayBreak, deleteDayBreak } from '../services/wakeUpLogger-api';

export default function WakeUp() {
    const nav = useNavigate();
    const {id} = useParams();
    const [Wake, setWake] = useState({})

    useEffect(() => {
        getDayBreak(id)
        .then(res => setWake(res.data))
    }, [])

const deleteTheDayBreak = () => {
    deleteDayBreak(id);
    nav('/');
}

return (
    <div>
        <h1>Full Wake Up Log</h1>
        <p>Time: {Wake.time}</p>
        <p>Emotion: {Wake.emotion}</p>
       
<br />

    <button onClick={() => {nav(`/${id}/edit`)}}>Edit This Log</button>
    
    <button onClick={deleteTheDayBreak}>Delete This Wake Up Log</button>
<br />
    <button onClick={() => {nav('/')}}>Return to the Main page</button>

    </div>
)

}