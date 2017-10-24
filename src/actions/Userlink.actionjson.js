import axios from 'axios';



export function getName() {
  return {
    type: "GET_NAME",
    payload: axios.get("http://localhost:3000/jsons")
  }
}
/* add link json show data */
export function getData() {
  return {
    type: "GET_DATA",
    payload: axios.get("https://mysafeinfo.com/api/data?list=presidents&format=json")
  }
}

/*Clear data json web */
export function cleData() {
  return {
    type: "CLE_DATA",
    payload: axios.get("https://mysafeinfo.com/api/data?list=presidents&format=json")
  }
}
export function setName(name) {
  return {
    type: "SET_NAME",
    payload: axios.post('http://localhost:3000/jsons', {name: name})
  }
}
