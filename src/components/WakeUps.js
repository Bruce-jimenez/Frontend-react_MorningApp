import { useState, useEffect } from 'react';
import { getAlldayBreaks } from '../services/wakeUpLogger-api';
import { Link } from 'react-router-dom';


export default function WakeUps() {
    const [Wakes, setWakes] = useState([])
    useEffect(() => {
        getAlldayBreaks()
        .then(res => setWakes(res.data))
    }, [])
    console.log(WakeUps)

return ( 
    <div>
        <h2>All of the Wake Up Logs</h2>
        <ul type='none'>
            {Wakes.map((wakelog) => {
                return(
                    <li><Link to={`/${wakelog._id}`}>Log Entry</Link> <br />
                                                    Time: {wakelog.time} <br />
                                                    Emotion: {wakelog.emotion}
                    </li>
                )
            })}
        </ul>
        <div>
     
        </div>
    </div>
)
}