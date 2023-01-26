import axios from 'axios'

 const baseURL = `https://morning-app-be.onrender.com/wake`

//Needs a updating monthly calender
//the calender has to match the date format for each month.
//This is in the main page where it displays the calender where the the time you have woken up and 
// the emotion you have logged when you woken up

//Show All (It should show all in a calender type of format where it goes in accordance in which
//          month it would be and matches with the date you have placed, but doesn't display the date
//          )
export const getAlldayBreaks = () => {
    const URL = baseURL
    const response = axios.get(URL)
    return response;
}


//Show One (It will only display the one you have clicked on)
export const getDayBreak = (id) => {
    const URL = `${baseURL}/${id}`
    const response = axios.get(URL)
    return response;
}


//Edit (It will show where you have selected in the next page)
export const editdayBreak = (id, updatedDayBreak) => {
const URL = `${baseURL}/${id}`
const response = axios.put(URL, updatedDayBreak)
return response;
}


//Create (This will only be formatted from the entryForm-api)
export const createDayBreak = (dayBreak) => {
    const URL = baseURL
    const response = axios.post(URL, dayBreak)
    return response;
}


//Delete (It will show in the the show one page such as the edit one as well)
export const deleteDayBreak = (id) => {
    const URL = `${baseURL}/${id}`
    const response = axios.delete(URL)
    return response;
}

