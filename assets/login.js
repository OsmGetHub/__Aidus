import React, {useEffect, useState} from 'react'
import ReactDOM from 'react-dom';
import axios from "axios";
import App from './app';


export default function Login(){
    // const body ={
        
    // }
    const [loginData, setLoginData] = useState({})
    const [isLoged, setLoged] = useState(false)
    useEffect(() => (
       axios.post('http://127.0.0.1:8000/login', loginData, {
        'Content-Type' : 'application/json'
       }) 
       .then(
        (response)=> console.log(response.data)   
       ).catch((err)=>{
        console.log(err.request.response)
       })
    )
    , [loginData]);

    return (
        <div>
            <form action="" onSubmit={(e)=>{
            processData(e)
            }
            }>
                <input id="1" className="cne" type="text"/>
                <input  id="2"classeName= "cni" type="text"/>
                <input type="submit"/>
            </form>
            {
                (isLoged == true) ? <App/> : ''
            }
        </div>
    );
    function processData(event){
        event.preventDefault()
        const cne = document.getElementById('1').value
        const cni = document.getElementById('2').value
        setLoginData({
            username : cne,
            password : cni
        })
    }
}

ReactDOM.render(<Login />, document.getElementById('root'))