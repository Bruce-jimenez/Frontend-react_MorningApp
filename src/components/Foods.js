import { useState, useEffect } from "react";
import { getAllMeals } from "../services/prevFoods-api";
import { Link } from "react-router-dom";


export default function FoodsBanquet() {
    const [Foods, setFoods] = useState([])
    useEffect(() => {
        getAllMeals()
        .then(res => setFoods(res.data))
    }, [])
    console.log(FoodsBanquet)

return(
    <div>
        <h2>Each Meal Log</h2>
        <ul type='none'>
            {Foods.map((food) => {
                return(
                <li><Link to={`/${food._id}`}>Dish Layout</Link> <br />
                                                Main Dish: {food.main} 
                                            <p>  Side Dish: {food.side} </p> 
                                            <p> Drink: {food.drink}  </p>
                    </li>
               )
            })}
        </ul>
        <div>
       
        </div>
    </div>
)
}