import {useState,useContext} from 'react'
import AppContext from './context'

const [trailer,setTrailer] = useState({})
const [errMsg,setErrmsg] = useState('');

    
      
async function fetchTrailers(){

    try {
    const fetchOptions = {
        method : 'GET',
        url: `https://movies-app1.p.rapidapi.com/api/trailers/${movie._id}`,
        headers : options.headers
    };
    const response = await axios(fetchOptions);
    //console.log(fetchOptions)
    console.log('THE RESPONSE:',response.data.result[0])
    setTrailer(response.data.result[0])
    console.log('TRAILER:',trailer)
    }  
    
    catch (error) {
    setErrmsg(JSON.stringify(error))
    console.log('THE ERROR:',error)
    }
    
}

    