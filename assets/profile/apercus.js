import React, {useState} from 'react';
import Nav from "../offres/nav";
import {default_profile_image} from "../images";
import Footer from "../offres/footer";
import Education from '../data/Education.json'

function Apercus() {
    const [education, setEducation] = useState(Education)
    return (
        <div style={{
            height : "fit-content",
            backgroundColor : "rgb(232, 232, 232)",
        }}>
            <Nav />
            <div style={{
                display : "flex",
                justifyContent : "center",
                alignItems : "center",
                margin: "5% 0px",
            }}>
                <div style={{
                    width : "60%",
                    height : "fit-content",
                    border : "1px solid #707070",
                    borderRadius : "30px",
                    fontFamily : "Arial, sans-serif",
                    backgroundColor : "white",
                    boxShadow: "0px 5px 3px rgba(0, 0, 0, 0.4)"
                }}>
                    <div style={CARTE_IDENTITE}>
                        <h1 style={{gridRow : "2 /3", gridColumn: "2 / 5"}}>Profile d'étudiant</h1>
                    </div>
                    <hr />
                    <div style={{
                        display: "grid",
                        gridTemplateColumns: "50px 15% 2% 1fr 200px 70px",
                        gridTemplateRows: "1fr 14% 14% 14% 14% 14% 14% 1fr",
                        height : "250px",
                        verticalAlign : "middle"
                    }}>
                        <section style={{gridRow : "2 /3", gridColumn: "2 /3", fontWeight:"bold" }}>Nom complet</section>
                        <section style={{gridRow : "2 /3", gridColumn: "3 /4", }} >:</section>
                        <section style={{gridRow : "2 /3", gridColumn: "4 /5", fontSize:"0.8em", color: "#707070"}}>EL FILA Oussama</section>
                        <section style={{gridRow : "3 /4", gridColumn: "2 /3", fontWeight:"bold" }}>Status</section>
                        <section style={{gridRow : "3 /4", gridColumn: "3 /4" }}>:</section>
                        <section style={{gridRow : "3 /4", gridColumn: "4 /5", fontSize:"0.8em", color: "#707070" }}>Licencié Juin 2022</section>
                        <section style={{gridRow : "4 /5", gridColumn: "2 /3", fontWeight:"bold" }}>Ville</section>
                        <section style={{gridRow : "4 /5", gridColumn: "3 /4" }}>:</section>
                        <section style={{gridRow : "4 /5", gridColumn: "4 /5", fontSize:"0.8em", color: "#707070" }}>Agadir</section>
                        <section style={{gridRow : "5 /6", gridColumn: "2 /3", fontWeight:"bold" }}>Adresse</section>
                        <section style={{gridRow : "5 /6", gridColumn: "3 /4" }}>:</section>
                        <section style={{gridRow : "5 /6", gridColumn: "4 /5",fontSize:"0.8em", color: "#707070" }}>xxxxxxx</section>
                        <section style={{gridRow : "6 /7", gridColumn: "2 /3", fontWeight:"bold" }}>Adresse email</section>
                        <section style={{gridRow : "6 /7", gridColumn: "3 /4" }}>:</section>
                        <section style={{gridRow : "6 /7", gridColumn: "4 /5", fontSize:"0.8em", color: "#707070" }}>exemple@domaine.ma</section>
                        <section style={{gridRow : "7 /8", gridColumn: "2 /3", fontWeight:"bold" }}>Telephone</section>
                        <section style={{gridRow : "7 /8", gridColumn: "3 /4" }}>:</section>
                        <section style={{gridRow : "7 /8", gridColumn: "4 /5", fontSize:"0.8em", color: "#707070" }}>xxxxxxxxx</section>
                        <img style={PHOTO_PROFILE} src={default_profile_image} alt="photo_profile"/>
                    </div>
                    <hr />
                    <div style={{
                        display: "grid",
                        gridTemplateColumns: "50px 15% 2% 1fr 200px 70px",
                        gridTemplateRows : "5% 25px 1fr",
                        padding : "20px 0px"
                    }}>
                        <div style={{
                            gridRow: "1 / 2",
                            gridColumn: "2 / 6",
                            fontWeight : "bold",
                        }}>Education : </div>
                        <div style={{
                            gridColumn: "2 / 6",
                            gridRowStart :"3"
                        }}>
                            {
                                education.map((item)=>(
                                        <div style={{
                                            display : "grid",
                                            gridTemplateColumns : "50px 1% 1fr",
                                            marginBottom : "10px"
                                        }}>
                                            <img style={{gridColumn: "1 / 2", width : "50px"}} src={item.Image} alt="image d'etablissment"/>
                                            <div style={{
                                                gridColumn: "3 / 4",
                                                display: "flex",
                                                flexDirection : "column",
                                                height : "fit-content"
                                            }} >
                                                <div style={{
                                                    fontSize : "0.9em",
                                                    marginBottom : "2px",
                                                    fontWeight : "1.1em"
                                                }}><b>{item.Ecole}</b></div>
                                                <div style={{
                                                    display :"flex",
                                                    alignItems :"center",
                                                    fontSize:"0.95em", color: "#707070",
                                                    padding : "2.5px 0px"
                                                }}>
                                                    <div style={{minWidth:"fit-content", fontSize : "0.8em"}}>{item.Diplome}</div>
                                                    <div style={{
                                                        flexGrow : "1",
                                                        margin :"0 10px",
                                                        border :"none",
                                                        backgroundColor: "black",
                                                        height : "1px"
                                                    }}></div>
                                                    <div style={{ minWidth:"fit-content", color : "#808080", fontSize : "0.8em"}}>{item.DateDebut} - {item.DateFin}</div>
                                                </div>
                                                <div style={{
                                                    display :"flex",
                                                    alignItems :"center",
                                                    fontSize:"0.95em", color: "#707070",
                                                    padding : "2.5px 0px"
                                                }}>
                                                    <div style={{minWidth:"fit-content", fontSize : "0.8em"}}>{item.Diplome}</div>
                                                    <div style={{
                                                        flexGrow : "1",
                                                        margin :"0 10px",
                                                        border :"none",
                                                        backgroundColor: "black",
                                                        height : "1px"
                                                    }}></div>
                                                    <div style={{ minWidth:"fit-content", color : "#808080", fontSize : "0.8em"}}>{item.DateDebut} - {item.DateFin}</div>
                                                </div>
                                            </div>
                                        </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

const CARTE_IDENTITE = {
    display: "grid",
    gridTemplateColumns: "50px 15% 2% 1fr 200px 70px",
    gridTemplateRows: "1fr 14% 14% 14% 14% 14% 14% 1fr",
    color : "#12549B"
}

const PHOTO_PROFILE = {
    width : "150px",
    margin : "auto",
    gridRow : "2 /7",
    gridColumn : "5/ 6",
    border: "2px solid #707070",
    borderRadius :" 100%"
}
export default Apercus;