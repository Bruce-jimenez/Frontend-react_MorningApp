import { editdayBreak, getDayBreak } from "../services/wakeUpLogger-api";
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function EditDayBreak() {
    const {id} = useParams();
    const nav = useNavigate();
    const [data, setData] = useState({});

    useEffect(() => {
        getDayBreak(id)
        .then (res => setData(res.data))
    }, [])

    const editThisDayBreak = e => {
        e.preventDefault()
        const updatedDayBreak = {time: e.target.time.value, emotion: e.target.emotion.value}
        editdayBreak(id, updatedDayBreak)
        nav(`/${id}`)
    }

return (
    <div>
        <form onSubmit={editThisDayBreak}>
            Time: <input type='text' name="time" defaultValue={data.time} />
            Emotion: <input type='text' name="emotion" defaultValue={data.emotion} />
            <input type='submit' />
        </form>
    </div>
)
}