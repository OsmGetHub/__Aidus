import React, {useEffect, useState} from 'react'
import Filtrage from "./flitrage"
import Articles from './articles'
import axios from "axios";

function Main(){
    const [filterValue, setFilterValue] = useState([]);
    const [records,setRecords] = useState([]);
    useEffect(()=>{

        // axios.get('api/articles?page=1')
        //     .then(response=>{
        //         console.log(response.data["hydra:member"])
        //         setRecords(response.data["hydra:member"])
        //     }).catch(error=>{
        //     console.log(error)
        // })

    }, []);
    const handlefilterChange = (value)=>{
        setFilterValue(value);
    }
        return (

                <div id="Main" style={{
                    marginTop: "2px",
                    display: "flex",
                    height: "1200px",
                    backgroundColor: "#E8E8E8",
                    width: "99vw"
                }}>
                    <Filtrage filtred= {filterValue} records={records} onChange={handlefilterChange}/>
                    <Articles filtred= {filterValue} records = {records}/>
                </div>
                
                );
}



export default Main;