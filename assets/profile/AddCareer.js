import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {setModal} from "../ReduxToolkit/InfospSlice";

export default function AddCareer(){
    const dispatch = useDispatch()
    return(
        <div onClick={()=>dispatch(setModal(true))} style={ADDCREER}>
            <a   style={{
                padding:"15px 25px",
                display:"block",
                width:"100%"
            }} href="#"><img style={{ height:"20px" }} src="profile-styles/Images_css/plus.png" alt="default"/></a>
        </div>
    );
}

export let ADDCREER ={
    marginTop : "0px",
    border: "2px solid #707070",
    height: "50px",
    boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.1)"
}
