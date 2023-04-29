import React from 'react'

export default function BlockExperience({dataE}){
    return(
        <div style={{
            border : "1px solid black",
            display : "grid",
            gridTemplateColumns : "70px 20px 1fr",
            padding : "15px 13px",
            boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.2)"
        }}>
            <img style={{gridColumn: "1 / 2", width : "70px", border:"2px solid black"}} src={dataE.imageSociete} alt="image d'etablissment"/>
            <div style={{
                gridColumn: "3 / 4",
                display: "flex",
                flexDirection : "column",
                padding : "5px 0px"
            }} >
                <div style={{
                    fontSize : "1.3em",
                    marginBottom : "5px"
                }}><b>{dataE.titreEmploi}</b></div>
                <div>{dataE.societe}</div>
                <div style={{ color : "#808080" }}>{dataE.dateEmploi}</div>
                <div style={{ color : "#808080" }}>{dataE.addresse}</div>
            </div>
        </div>
    );
}