import Axios from "axios"
import { API_HOST } from "../../config"

export const getFoodData = () => () =>{
    Axios.get(`${API_HOST.url}/food`)
    .then(res => {
        console.log('res: ', res);
    })
    .catch(err => {
        console.log('err: ', err);
    })

}