import axios from 'axios';


export function getInfo(){ 
    return async (dispatch)=>{
        let json = await axios.get('http://localhost:3001/pragmasoft')
        console.log(json.data.series)
        return dispatch({
            type: 'GET_INFO',
            payload: json.data.series
        })        
    }    
}

export function postLogin(input){
    return async (dispatch) => {
        let json = await axios.post("http://localhost:3001/login", input);
        return dispatch({
            type: 'POST_LOGIN',
            payload: json.data
        })                
    }
}
export function registerOperation(payload){
    return async () => {
        let json = await axios.post('http://localhost:3001/pragmasoft', payload);
        return json;        
    }
}