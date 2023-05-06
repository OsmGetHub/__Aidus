import React from 'react';
import Nav from "../offres/nav";
import {default_profile_image} from "../images";
import Footer from "../offres/footer";

function Apercus() {
    return (
        <React.StrictMode>
            <Nav />
            <div style={{
                height: "100vh",
                display : "flex",
                justifyContent : "center",
                alignItems : "center"
            }}>
                <div style={{
                    width : "60%",
                    border : "1px solid black",
                    borderRadius : "15px",
                    fontFamily : "Arial, sans-serif"
                }}>
                    <h1>Profile d'étudiant</h1>
                    <hr />
                    <div style={CARTE_IDENTITE}>
                        <section style={{gridRow : "2 /3", gridColumn: "2 /3", fontWeight:"bold" }}>Nom complet</section>
                        <section style={{gridRow : "2 /3", gridColumn: "3 /4", }} >:</section>
                        <section style={{gridRow : "2 /3", gridColumn: "4 /5" }}>EL FILA Oussama</section>
                        <section style={{gridRow : "3 /4", gridColumn: "2 /3", fontWeight:"bold" }}>Status</section>
                        <section style={{gridRow : "3 /4", gridColumn: "3 /4" }}>:</section>
                        <section style={{gridRow : "3 /4", gridColumn: "4 /5" }}>Licencié Juin 2022</section>
                        <section style={{gridRow : "4 /5", gridColumn: "2 /3", fontWeight:"bold" }}>Ville</section>
                        <section style={{gridRow : "4 /5", gridColumn: "3 /4" }}>:</section>
                        <section style={{gridRow : "4 /5", gridColumn: "4 /5" }}>Agadir</section>
                        <section style={{gridRow : "5 /6", gridColumn: "2 /3", fontWeight:"bold" }}>Adresse</section>
                        <section style={{gridRow : "5 /6", gridColumn: "3 /4" }}>:</section>
                        <section style={{gridRow : "5 /6", gridColumn: "4 /5" }}>xxxxxxx</section>
                        <section style={{gridRow : "6 /7", gridColumn: "2 /3", fontWeight:"bold" }}>Adresse email</section>
                        <section style={{gridRow : "6 /7", gridColumn: "3 /4" }}>:</section>
                        <section style={{gridRow : "6 /7", gridColumn: "4 /5" }}>exemple@domaine.ma</section>
                        <section style={{gridRow : "7 /8", gridColumn: "2 /3", fontWeight:"bold" }}>Telephone</section>
                        <section style={{gridRow : "7 /8", gridColumn: "3 /4" }}>:</section>
                        <section style={{gridRow : "7 /8", gridColumn: "4 /5" }}>xxxxxxxxx</section>
                        <img style={PHOTO_PROFILE} src={default_profile_image} alt="photo_profile"/>
                    </div>
                    <hr />
                    <div>
                        <p>Education : </p>
                        <div>

                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </React.StrictMode>
    );
}

const CARTE_IDENTITE = {
    borderRadius: "10px",
    padding: "5px 0px",
    display: "grid",
    gridTemplateColumns: "1fr 15% 2% 50% 200px 1fr",
    gridTemplateRows: "1fr 14% 14% 14% 14% 14% 14% 1fr",
}

const PHOTO_PROFILE = {
    width : "150px",
    margin : "auto",
    gridRow : "2 /7",
    gridColumn : "5/ 6",
    border: "2px solid black",
    borderRadius :" 100%"
}
export default Apercus;