import { editMeal, getOneMeal} from '../services/prevFoods-api'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom' 

export default function EditMeal() {
    const {id} = useParams();
    const nav = useNavigate();
    const [data, setData] = useState({});

    useEffect(() => {
        getOneMeal(id)
        .then(res => setData(res.data))
    }, [])

    const editThisMeal = e => {
        e.preventDefault()
        const updatedMeal = {main: e.target.main.value, side: e.target.side.value, drink: e.target.drink.value}
        editMeal(id, updatedMeal)
        nav(`/${id}`)
    }

    return (
        <div>
            <form onSubmit={editThisMeal}>
                Main Dish: <input type='text' name='main' defaultValue={data.main} />
                Side Dish: <input type='text' name='side' defaultValue={data.side} />
                Drink: <input type='text' name='drink' defaultValue={data.drink} />
                <input type='submit' />
            </form>
        </div>
    )
}