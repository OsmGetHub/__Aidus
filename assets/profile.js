import React from 'react';
import Nav from "./offres/nav"
import InfoPerosonnels from "./profile/InfoPerosonnels";
import {useSelector} from "react-redux";

export default function Profile(){
    const isLogged = useSelector(state => state.UserLogin.isLogged)
    return (
            <React.StrictMode>
                    <Nav />
                    <InfoPerosonnels />
            </React.StrictMode>
        );
}
