import { useNavigate } from "react-router-dom";
import { createMeal } from "../services/prevFoods-api";

function CreateFoods() {
    const nav = useNavigate()

    const createTheFoods = (e) => {
        const Food = {main: e.target.main.value, side: e.target.side.value, drink: e.target.drink.value}
        createMeal(Food)
        nav('/')
    }

return(
    <div>
        <h2>Log the Meal</h2>
        <form onSubmit={createTheFoods}>
           Main Dish: <input type='text' name='main' id='dsc' />
           <br />
           Side Dish: <input type='text' name='side' id='dsc' />
           <br />
           Drink: <input type='text' name='drink' id='dsc' />
           <br />
           <input type='submit' />
        </form>
    </div>
)
}

export default CreateFoods