import axios from 'axios'
const baseURL = `http://localhost:3001/`
// const baseURL = `https://morning-app-be.onrender.com/`

// Show all (Not sure if i need it for this specifically because 
//          it wont show anything just put it in 1 big databases made up of two small ones) 
export const getallEvents = () => {
    const URL = baseURL
    const response =  axios.get(URL)
    return response;
}

//Show One (Only being used as a form and parsing through data from one big database to
//          two small databases)
export const getOneEvent = (id) => {
    const URL = `${baseURL}/${id}`
    const response =  axios.get(URL)
    return response;
}

//Edit (This only be changed in another api)
export const editEvent = (id, updatedEvent) => {
    const URL = `${baseURL}/${id}`
    const response = axios.put(URL, updatedEvent)
    return response;
}

//Create (This one would most likely be the only one being used consistently 
//       because it is only a form )
export const createForm = (form) => {
    const URL = baseURL
    const response = axios.post(URL, form)
    return response;
}

//Delete (Same reasoning as the edit comment)
export const deleteEvent = (id) => {
    const URL = `${baseURL}/${id}`
    const response = axios.delete(URL)
    return response;
}
 