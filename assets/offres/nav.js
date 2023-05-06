import React, {useContext, useEffect} from 'react'
import shark from '../data/shark.png'
import profile from '../data/default.jpg'
import click from '../data/arrow.png'
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import Cookies from 'js-cookie'
import {store} from "../ReduxToolkit/store";
import {add, deconnexion, default_profile_image, sittings} from "../images";

function Nav(){
    const dispatch = store.dispatch;
    const {nom, prenom} = useSelector(state => state.UserData)

    function logout(){
        window.location.href = "http://127.0.0.1:8000/logout";
        Cookies.remove('currentUser')
    }
    return(
        <React.StrictMode>
            <div style={{
                width: "100vw",
                backgroundColor : "white"
            }}>
                <nav style={NAV}>
                    <div style={AIDUS}><Link style={{ color:"12549B"}} to={"/"}>
                        <span style={AIDUS_A}>A</span>idus</Link>
                    </div>
                    <ul className="links" style={OFFRES}>
                        <li><Link to={"/"} >Offres d'emploi</Link></li>
                        <li><Link to={"/offreStage"} >Offres de stage</Link></li>
                        <li><Link to={"/offreFormation"}>Offres de formation</Link></li>
                        <li><Link to={"/"}>Entreprise</Link></li>
                        <li><Link to={"/"}>Aides</Link></li>
                    </ul>
                    <div style={PROFILE_SHORTCUT}>
                        <a href="content" onClick={(event)=>{
                            event.preventDefault()
                            document.getElementById("hidden").style.visibility="visible"
                        }}
                           style={{
                               fontFamily: "Arial",
                               textDecoration: "none",
                               fontWeight: "bold"
                           }}
                        >
                            <span>{nom.value}  {prenom.value}</span>
                            <img src={click} alt="click"
                                 style={{
                                     width : "15px",
                                     marginLeft: "5px"
                                 }}
                            />
                        </a>
                        <img src={profile} alt="photo-profile"
                             style={{
                                 width: "50px",
                                 border: "2px solid black",
                                 borderRadius: "150px",
                                 marginLeft: "30px"
                             }}
                        />
                        <div id="hidden"
                             onMouseLeave={(event)=>{
                                 event.preventDefault()
                                 document.getElementById("hidden").style.visibility="hidden"
                             }}

                             style={{
                                 position: "absolute",
                                 top: "30px",
                                 right: "50px",
                                 visibility: "hidden"
                             }}
                        >
                            <img src={shark} alt="shark" style={{
                                width: "25px",
                                zIndex : "1",
                                marginBottom: "0px",
                                position: "relative",
                                left: "188px",
                                top: "35px"
                            }}/>
                            <ul style={HIDDEN_DETAILS}>
                                {
                                    (true) ? <Link to={"/ajouterOffre"}><li style={POSTING_ELEGIBILITY}>Ajouter une offre</li></Link> : ''
                                }
                                <li style={{
                                    margin: "0px",
                                    borderBottom: "1px solid #707070",
                                    padding: "15px 10px",
                                    backgroundImage: `url(${default_profile_image})`,
                                    backgroundSize: "20px",
                                    backgroundPosition: "10px center",
                                    backgroundRepeat: "no-repeat",
                                    paddingLeft: "45px"

                                }}
                                ><Link to={"/Profile"}>Profile</Link></li>
                                <li style={{

                                    margin: "0px",
                                    borderBottom: "1px solid #707070",
                                    padding: "15px 10px",
                                    backgroundImage: `url(${sittings})`,
                                    backgroundSize: "20px",
                                    backgroundPosition: "10px center",
                                    backgroundRepeat: "no-repeat",
                                    paddingLeft: "45px"

                                }}>Parametres</li>
                                <li style={{
                                    borderBottom : "0px",
                                    margin: "0px",
                                    padding: "15px 10px",
                                    backgroundImage: `url(${deconnexion})`,
                                    backgroundSize: "20px",
                                    backgroundPosition: "10px center",
                                    backgroundRepeat: "no-repeat",
                                    paddingLeft: "45px"

                                }}><a href="" onClick={logout}>Deconnexion</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </React.StrictMode>
    );
}

// styles de la barre de navigation
const AIDUS = {
    boxSizing: "border-box",
    fontSize: "40px",
    fontFamily: "Maiandra GD",
    color: "#12549B",
    marginLeft: "60px"
}

const AIDUS_A = {
    fontSize: "70px",
    fontFamily: "Lucida Handwriting",
    fontStyle: "italic"
}

const NAV = {
    height: "15%",
    flexGrow: "1",
    display: "flex",
    justifyContent: "space-between",
    padding: "0px",
    boxSizing: "border-box",
    boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.2)"
}

const OFFRES = {
    boxSizing: "border-box",
    listStyleType: "none",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    width: "40%",
    color: "#9D9D9D",
    fontFamily: "Arial"
}

const PROFILE_SHORTCUT = {
    display: "flex",
    alignItems: "center",
    position: "relative",
    marginRight: "25px",
}

const HIDDEN_DETAILS={
    position : "relative",
    zIndex : "2",
    boxSizing: "border-box",
    fontWeight: "bold",
    listStyleType: "none",
    border: "2px solid #12549B",
    color: "#9D9D9D",
    fontFamily: "Arial",
    padding: "0px",
    borderRadius: "15px",
    backgroundColor: "white",
    width: "250px",
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)"
}

const POSTING_ELEGIBILITY = {
    backgroundColor : "#12549B",
    borderTop: "0px",
    borderTopRightRadius : "10px",
    borderTopLeftRadius : "10px",
    color: "white",
    margin: "0px",
    borderBottom: "1px solid #707070",
    padding: "15px 10px",
    backgroundImage: `url(${add})`,
    backgroundSize: "20px",
    backgroundPosition: "10px center",
    backgroundRepeat: "no-repeat",
    paddingLeft: "45px"
}
export default Nav;