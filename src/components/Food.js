import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getOneMeal, deleteMeal } from '../services/prevFoods-api';

export default function Meal() {
    const nav = useNavigate();
    const {id} = useParams();
    const [Meal, setMeal] = useState({})

    useEffect(() => {
        getOneMeal(id)
        .then(res => setMeal(res.data))
    }, [])

const deleteTheMeal = () => {
    deleteMeal(id);
    nav('/')
} 

return (
    <div>
        <h1>Meal Design</h1>
        <p>Main Dish: {Meal.main}</p>
        <p>Side Dish: {Meal.side}</p>
        <p>Drink: {Meal.drink}</p>
<br />

        <button onClick={() => {nav(`/${id}/edit`)}}>To Change the Contents</button>

        <button onClick={deleteTheMeal}>Erase This Meal</button>
<br />
        <button onClick={() => {nav('/')}}>Return To Main page</button>

    </div>
)

}