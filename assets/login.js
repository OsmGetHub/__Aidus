import React, {useEffect, useState} from 'react'
import axios from "axios";
import Cookies from 'js-cookie'
import App from './app';
import {useDispatch, useSelector} from "react-redux";
import {setLogin} from "./ReduxToolkit/LoginSlice";

const ENVIRONMENT_BOX = {
    display : "flex",
    justifyContent:"center",
    alignItems : "center",
    border : "2px solid black",
    height : "100vh"
}
const BOX ={
    width: "351px",
    height: "300px",
    border: "2px solid #70707088",
    borderRadius: "50px",
    boxSizing: "border-box",
    textAlign: "center",
    boxShadow: "0 3px 10px rgba(0,0, 0, 0.2)"
}

const HEADER = {
    display: "flex",
    alignItems: "center",
    height: "61px",
    textAlign: "center",
    backgroundColor: "#13569F",
    color: "white",
    borderRadius: "48px 48px 0px 0px",
    fontFamily: 'HP Simplified Hans',
    fontSize: "22px",
    marginBottom: "25px",
}

const INPUT = {
    marginTop : "25px",
    width: "266px",
    height: "28px",
    backgroundColor: "#F7F7F7",
    borderColor: "#70707088",
    borderRadius: "5px",
    fontWeight :"1.1em"
}

const BUTTON = {
    display: "inline-block",
    padding: "10px 25px",
    backgroundColor: "#13569F",
    color: "white",
    fontFamily: 'HP Simplified Hans',
    fontSize: "14px",
    textTransform: "uppercase",
    textDecoration: "none",
    borderRadius: "100px",
    transition: "all .2s",
    marginTop:"35px"
}
export default function Login(){

    const [cne, setCne] = useState('')
    const [cni, setCni] = useState('')
    const isLogged = useSelector(state => state.UserLogin.isLogged)
    const dispatch = useDispatch()

    useEffect(() => {

        const session = Cookies.get('currentUser')
        if(session === undefined){
            dispatch(setLogin(false))
        }
    }, []);


    const LOGIN_FORM =
        <div style={ENVIRONMENT_BOX}>
            <form style={BOX} action="">
                <div style={HEADER}><span style={{margin : "auto"}}>s'authentifier</span></div>
                <input style={INPUT} id="1" className="cne" type="text" onChange={(e)=>{
                    setCne(e.target.value)
                }
                } placeholder="CNE"/>
                <input  style={INPUT} id="2"classeName= "cni" type="text" onChange={(e)=>{
                    setCni(e.target.value)
                }
                } placeholder="CNI"/>
                <a className="connexion" style={BUTTON}  href="" onClick={(e)=>processData(e)}>connexion</a>
            </form>
        </div>

    return (
        <>
            {
                (!isLogged) ? LOGIN_FORM : ''
            }
            {
                isLogged ? <App/> : ''
            }
        </>
    );

    async function processData (event) {
        event.preventDefault()
        console.log({cne, cni})

        axios.post('http://127.0.0.1:8000/login', {username : cne, password : cni}, {
            headers : {
                'Content-Type' : 'application/json'
            }
        })
            .then(
                (response)=> {
                    dispatch(setLogin(true))
                    Cookies.set('currentUser',response.data.user)
                }
            ).catch((err)=>{
            console.log(err.request)
        })

    }

}

