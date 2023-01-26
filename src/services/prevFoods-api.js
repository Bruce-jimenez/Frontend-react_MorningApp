import axios from 'axios'

 const baseURL = `https://morning-app-be.onrender.com/breakfast`

//This should display the last five food you have eaten and dates the day it was eaten


// Show All : Should show when you press a link it go to a page with a calender 
//           only with ability to select which edit and delete you can select
export const getAllMeals = () => {
    const URL = baseURL
    const response = axios.get(URL)
    return response;
}


//Show only one
export const getOneMeal = (id) => {
    const URL = `${baseURL}/${id}`
    const response = axios.get(URL)
    return response;
}


//Edit: It should only show in the show all page where you can choose a specific one to edit
export const editMeal = (id, updatedMeal) => {
    const URL = `${baseURL}/${id}`
    const response = axios.put(URL, updatedMeal)
    return response;
}


//Create: This would only be used in the entryForm-api where the form is passing the data from the big database
//          to the two smaller ones
export const createMeal = (Meal) => {
    const URL = baseURL
    const response = axios.post(URL, Meal)
    return response;
}


//Delete: Same as the edit comment (It should only show in the show all route page w/ the calender) 
export const deleteMeal = (id) => {
    const URL = `${baseURL}/${id}`
    const response = axios.delete(URL)
    return response;
}

