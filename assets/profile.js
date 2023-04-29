import React from 'react';
import Nav from "./offres/nav"
import InfoPerosonnels from "./profile/InfoPerosonnels";
import {useState} from "React";

export const EtudesContext = React.createContext(null)

export default function Profile({etudes, setEtudes}){
        return (
            <React.StrictMode>
                <EtudesContext.Provider value={{etudes, setEtudes}}>
                    <Nav />
                    <InfoPerosonnels />
                </EtudesContext.Provider>
            </React.StrictMode>
        );
}
