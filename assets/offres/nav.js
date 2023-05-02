import React, {useContext, useEffect} from 'react'
import shark from '../data/shark.png'
import profile from '../data/default.jpg'
import click from '../data/arrow.png'
import {Link} from "react-router-dom";
import {GolbalData} from "../app";
import {useDispatch} from "react-redux";
import {setLogin} from "../ReduxToolkit/LoginSlice";
import Cookies from 'js-cookie'
import {store} from "../ReduxToolkit/store";

function Nav(){
    const dispatch = store.dispatch;
    function logout(){
        window.location.href = "http://127.0.0.1:8000/logout";
        Cookies.remove('currentUser')
    }
    const userData = useContext(GolbalData);
    return(
        <React.StrictMode>
            <div style={{
                width: "99vw",
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
                            <span>{userData.nom} {userData.prenom}</span>
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
                                    (userData.type_utilisateur === "L") ? <Link to={"/ajouterOffre"}><li style={POSTING_ELEGIBILITY}>Ajouter une offre</li></Link> : ''
                                }
                                <li style={{
                                    margin: "0px",
                                    borderBottom: "1px solid #707070",
                                    padding: "15px 10px",
                                    backgroundImage: 'url("https://lh3.googleusercontent.com/fife/APg5EOb6JdQ2yr6dsXRflZEekG0Vs7GOqUpaLtM1fVfBYYqC-OIEtXiED8zsWbb9ExBwCgIoWRKbnjgrP4IpYt0kvObx46ofAUtyqZrfpAGLbYDYwhMImOfTuGRFI3pw3Ur_GxXAiStrKww6uo_cDWn-AJKTFIGecZkFMGwwBJpSX01TI_HvL-eIfjT719xLv_9I-fmXGqL8H_NzYTNyH1vvHnPFEE3OUVSw3_GNt12DjbvYNiijJ7qsBKhbusYNFSd-koZxIAKJXt8dzSdszXyTojGr9K7y7HulSlKF4mojdFzXkvuLjRLfqZ3rqLzErWclrd3y9QclvgS_qzJm9Jh8pZtI6YjrQ_J8wpbLqkw0JrQh5hal10Jzd5FCG4MBrebFemVukQbUBetiWwIsb12hEdwBJyijoeceNQ--KYDJFZqEiCmVWgXHhYaAwuQ6pCBq4GyxqS5Cem2oflW4_kQ4eGzlXehpCw3MQKbGV2fyx0RM7W4_CR4jdap7c4OmMoysjjMIscuK0ruZWXF0aKiKA3UzoeBkoR3d9mNP8cOrgQdt60rEQQ3G59yEzPu1ofVIsT0-KmWK2UZpNdzG76-zJIcXVEUTA2TVs2VuDMey0x0gZD75ixxXorq2svRwfQPvvd5zHDiUeWrcCZbvaxhpHY9kCvFV-WMYTLAelArcEiGc3iDaVdmwp8TFzWTLVJWWmXqCmSNcLfH3UTsJ3Xch0ctuyga74iSox84Wra3lQYNXVXyfUCDiVYanCEHToKPrwkavIlhv_gJGy42qSFdaIFW7TiStR5kpE5MWVMbcT6Y8zJ33zUpEUxenXErcZqkhShaZ3z120u9YhZEtOVPexMs5aHWIR7fAOT0F_Vqbg06f8fZG9dchnPhwv72TiwngVeyVGTY74uIpym42_-vQU2s1BuTAmbSLHvI-HfansMpqxT8x9spiddIwbJOWVhH-HmdpVNTNdg72uwnhRhE__ylTQ8kZKJc6qswndl-HlvL6b9qJ0rUkxTuFT0DniWsHbNmGvRu4IAXtYOYYAV68REg_UA5rqNfd0TLldkMJWLx9l02PUgXm20ESJ606zOEy-U1TOrHbyDwJK0bcjyNBucnA09dJ1IB8L7RV0QP5ecCE7DqMlvcCIKngTZQyqlDROyGDdxUMexTS4M7n7QY3GmvEdIpaLpHN9Freu8cq14ivhFe5Fj8A-baZRKKtb4P14mvC0xRtkjUsftceKlK6aOddG7uSLyJqEFMfgFxM2Fy967lo5YVPOer7wMcpaRFtSJODRz7lAsTDqyJNdrLlVR2Dr0Ty-V3W4rLf5-hYom259LjMpjnJvACAJKuGZejkZuTw4kj9PlzV2CYC4IPoO-5JOVSiu7p-6JK8zsh49SWWPpR0K1vwYC6xsYJn6c_w-WGEvRqIl6UoJ2wkAjGOIszPo7HP4QPiNQqrCY9zrnxOfKZ0TRjguuWkR6A1jUpnq03hTtqQAnSPi47_BbcUebyua_42qnQZE1iztal6e3gZAGEZxgvxoSB_m0GCPhkP8N73UrRQ6igZpdKhhjlmIjbQaVIblgnrMakUPHOwfm5TGz7206mKrUVYloMxuAd951A3k2vG=w1866-h916")',
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
                                    backgroundImage: 'url("https://lh3.googleusercontent.com/fife/APg5EOY9GBQqm76Aj_EzqK4emmkWmrQnd7BkbUegwwJg-kKz9KKDx2nJBV1zZc6Netww6mSFC_DKgYQK6Eyw__Tv2oHkH-mtOKyY2LJCa6deyxSYM1ow1d2mM0LUPCFi5zFHIAKNasiupbgsZ1zdDFV4DrlZqjkIsuh0CvYTG4oF-rpjazhjgIdWqW_dp32gv-mqxl0JUFH1uBpDYTymdK_taUtPRYmPMJAGqEqUclxK-6lvbLjCKlWXhatUNbs20lDJdRd50YYhSQHLVwNTodqK7d3gev9q2LYNH10NezD8qvRkpZyRZf8VARU_Uwuw_asY7LH5kh62k3jeWQXLysL_h6nmkhICp9yJUvimmM9hysMdH3EUrtTCHxdvCKsi5GpghKGakVbus4u0gr09GCaHmbWQymq5p75UYohovq_gVyaZ9zaI4M-Zj7MVYRHDf9fhMeVmvjGNMEiBZ5Mvqs_Eb5OJTroA4MIB5IZHFo1V8FJPjUJ3SFt3iOfUzHax6EuolIOPzT0InbraHKL00C_05-AzMaXSoaIbGT_laNQo59mx8614HTx6KiJ8PmB1xSpW5VkwxW7VtY_2ZXcuHgb2ojl1I-w7tCxQnBtTNI-Ua6mJiAbjPbivS10SxTKigDYHvmedTRTsGVw0rWcX_9TRCUE-h0_uIywHrm740g8mNiZ6w_-yvlk3bE3zIVB7Jo45ea3ArVeARy8zrzV03rhix2FJ8vCNs-OUnXmo9xQMUdUwuIjwA2mdH3ifkcrqLnOzUi16aKWtZwseV9wBV-8zw-SRBRq_uzBGnJUt2J8HADmR5uQ9h-g1LA3ccJgAh-ax4anrg8AD1fd2jcJB8EAgvENw1KflDkyIaKUMscfpx4f7RGELCXuJzhIFSKA3wmOiXHDqgZIjqDZQtGQmhD5TNm9doWaMnS90nCEuyZZJLX7m7CQNKsz7VEGzX895RwBsls7Zfzmm1u7qbNaxDbaaNdcdSvHL5nMFPhFFd5qKH-5zKL-NH0P8j9AOPRXtKboscgTVOzY-zRDl9wUSfsp8j0YGHI7VycF4f3HwQR68anLAvgfi-OVKd_Z8Vq0XAp1xUYnIS5WfmyZjY91LwELfPdgjBKMy_s9pnfI5C6pBhde27jJ9ublKQtujzsuTxycO5CeLt5oocW5xK68fZV2JzMetD7ajIQIupGljgCG2mdWm6wrh-DqWj7JavoBCyli0srqXwEmyihcrYCfdrxQPA0KGxma7iIOUyqhMNeizI6MWzLTZLMvG-Dgu2-vGdpEcjuuf5EFsS9vhfkFt49SyZCvX9yuefcqXjHCFKRCkVrYKbPPOU5p7n2mYdHLRRONW5Cj1S5BhIejK3q_zNexhHF7-Ip1SE7KWYFJ399lbzM0YFmWLcIrDXrcQjsQL40mp2UPkpG8mTLCWhwvf-of_EqardxotOwQbqyt1kHdx2xuR3YiggoFf39dKEVCsmf6t_0aOgY2eZrZhPZOoQbte_scDQVGd3odqzOSkH1LwJh9uGBvd9nnyo5AAbBnYJwjF8m7lVCvsoKtgEEPCgfPlIrRNwTQIuuzzfB1tKEmbmQmlAmG07IHnmSDyV5pPF802C0fj9IpE=w1866-h916")',
                                    backgroundSize: "20px",
                                    backgroundPosition: "10px center",
                                    backgroundRepeat: "no-repeat",
                                    paddingLeft: "45px"

                                }}>Parametres</li>
                                <li style={{
                                    borderBottom : "0px",
                                    margin: "0px",
                                    padding: "15px 10px",
                                    backgroundImage: 'url("https://lh3.googleusercontent.com/fife/APg5EOYIKF9ikgZWlwLBuZi39SmBCg2onXY4N6sxkzLsD8TMV-AjG8qlPy9yWgraGDP-1sudQl6Ey3Bzz22udBQI55u159orcJsr7oa0kbvgBWLidUegXRXQmtTstY5fo12dt64wBW17jF3NHQEPyCbVe63xk5p1uLD9ZmtBKEZ8iZzSyHetpcCP1hGwe5IS4S2ploRII_E4Sp48DblXtpCoEWMGnpfCjgo0rPwodchBeUQqVF16IFytslFY_4BOCTj2ZPBAPHbjGPBeq1xcdgQu0pBQDRzsrWnJzZdCP8KRsZAWkEGiYIGORQja2JOZuDQF01QuRkkr_0TlPxS64ekLM-Xr1uxkz14Ih9V6iCDhyLtvy6K8J6S7x_OgyYxJQma74KHuGXaSwvMavY1aaG8uTNNbjCaVo9SHSmBucjzRAoyCYOySVSPIw_yjxOeJXRs6Dmyl_C-kR7ocYoBIKjOZr1uVKBvG3UdC35N7ezH4JLPRM10JoEWuzN44eqV21yUKhg_ZMl2HSZV9eTXu-nPnp3Xzw_STgY10KoEx3HeeFdOrGt_qVxINFx2MnS-38teFBQZ3nAxOfOZmTLLyRoznaavSFSG62QsWbIq-SN9MwEK-BDkuTWWpEI7MO8hBdkZWGJdFVPiplR3qdyxQaRscFR6lMNGtj8-MigJrqhp_jk3_jmXcO8jZakwd27uCWoASn5gy4WE0C4GpPFQVjWv1Hu0GbL9G0t7HEsnxHT9I6OFmxCG1cA2eT3D_A_1OwCXmQgAD5y1mJ7tLkUCvLuwH-72IxyuJHWtNQY1F3stVc3mStGzu9OzVb8BrEtS3Jn0JE3eK1b4cIXZb8w_ysFPQEDrvdGM2WswkdaHz9DnsyDqjFE1xkybjWBrr-ecvo4Gdbs_VJwTfUiha87dL0OERmzAoT5t6HjyHe_mgZH6T6dAW13h-jlbPl80hGXRGBiRC8E2IHSe_KD94Wcu6d5A8wkzdwhhawGFbyQWL_v3bRSTqpo3Ri9bC4mmnkXCVsjUXtBDmqzI0IA8rRJiY8vtATGjzdX8Sv_cZhkAEjpkZhx_MaXZsoWLwOx8Pxe1nwKI-trLICoiWqdAXqCGwAdfaKT7uX02kvKWW1Z6EGh2JJ5dOaOBjPMxgXcEGHavtkcCQK_wbVTYqRcEMjPGm_I2ZCrDwlsZKYpA-ao8wdrRIEvzW82yLoJRuv1hkr_ZELcVOaIRp_4GLLGB2k6KH7dTxZa0UdMVm2BZOWAEGoYgv3RFLqWyr54RDAjHfrarIq000gkx1tSiN6R1JevYsZAkMMioEaPw8Jsf_fuLSWHp_SNP7rL6NoABQ7LMbcEWH32QswyEKLT9vd2qY3DdG7qYQW2Lhuv89WIvtGudEg6ZojBKYj1BYUi1kU7LOdsSV4hBBbT2fwiU4vv8XkoVmA8U4C6wS6DppRwVXenvrd-06ZTqitxGoWEtlpzMdcZyKLGejf5MUcfHKZ2BiZ_WBSgQoPsikkuqT00YgCxE2YGJSDahIWqPeD2gm0wI3APTi2CzJm36Azo64MkY78o5NEw0IfrmNSuLBbHzSL8tA8jmmsg0gIjI7-kEnQvvJXxkBv0KvJ3T5KonN=w1866-h916")',
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
    backgroundImage: 'url("https://lh3.googleusercontent.com/fife/APg5EObzIyPUZwuPUzuc5BZw8unnIQMIG2FqwUq2eiucHHC030eoRBYQiL9l1dVduBXCSPlw5TfS0Wr-gKRr3rCkx8zIjgn-UmnSyH8pagkzzskey2q5Lv7Ka3R9giz0rtYB-n06fNTBAxBoFS26NLgzXrmrGx5kNlEuZbd4gwlJ5CsSpuWjhOuoJK-ii9o99mN6EiTEUSkmXoPfFcg_hM6brgNCOpMJqmN0EGWTH3kfGyZOaXCS8_zof9iHgS5E1-UMm-jkrYuZZ2Su4VoWQpPGBKk5WHC06L-Pd_vpGdkGBdatXdQfD5skhidzqQ8fzE3-0EAf6BviEgzb58E7h-_N87c-1svAeJZaAHDe8nOvhlWEdU64Qk_21EDzdQoRZ3ar29_bKJUe583gezMDlXydTe2Y8mnYVoXQnIgPnXoAEoXxDQPZVNxzBFg4B4L2t2CpIj0XPXenIkHWDqpBoK08aw9aeFWaLzNTrGDUeCYmBiTYr3u2On4I9yZPhQkFhvQvKHcXOh8Hy9nv-mBpp5_h_2OQTVXFPxr4ZqICaIUCh4cxWdrONP2V8ohGStRyruMUuUSiV6hwPOZaXv3gR_6cddEHqAccxCN8DX4yAd72uFW9px9B8JmoTekE7Dd3TUvWLrEnUd66osAeUxWKd0t7vrubsOr6Jf2zS0-zS47k6-rb-W_zThw7ZhFkQzFQIoyORk12G2mHFp_7j2D14dOFl_B6aSe3z25darTYkS-gwYVdQMBCQk1Gss2nOW4bxRq3lXLzsKPO9M-UG1pgpHjW1DnYe8va-QwCNvTKrFsjT-beBCgt-wbMhn_baQHdeC4CbYaIIBAI9T2qRcpIbQELHm5rdvR4c92_R-pGTpcFT2Y_4pah4_kc99PMptfwVE8miA5eQlgG-C585W4VENztMIeHPviUHIlsjpaX-zdyhAOs0NydFXfJpM9VyhuenRmOwmW39cfoym98p-J7eehdWqwP7RJCpnxUXXDo4Gv-QI8zFEJxWI4wb3FIuuO5ABAG8vl7TKB8bnTIfOn9Hq5WviXs6DFpyIMAtrFB4EEHoLdXb_tWCROpn2RKmkxuEO4bXLhZZmzcpjQ6RVbgz5YQ-kIpHFaNCKVfromF9eDc88FMu1f26oQMRJvxg_A9MyXE7LqFte8LxYPT4O7iNdKlwxlsVfY5rlbY1Ecn0ITV-XIHi3uJmV2mEX3KCl0nI-t7u-GIxvlJ7S7cBj_OaHmkEJhqf0u6GqUAsaugzwV9yGWkcUPqoaRNXOLzNbd2oKahTBgMgJD_pP2fW_r25huonvXpqmRwsnSqVPD4QRt9lnF4ekNjVQ8YZILHZSRNBQvitCkSsyqLnxbxHhdkEznCzz-0ZEwcNqbc6E5YzcbKeP_GRuczCvLRal3MjDRaCm5XYEzi4j2Lmz3dR0ZWHCePTao4c_FqrrPim25-QVCzaQUNEnk275BrdNMaH9DRV69VYLf0zJf4y3vls0mqXQJioCuEGD-mhiyFWTsahHu9OgV43L-m8-Yxh3BBEXCMit7mLGP9P4GHL1eKT3kwtB-ftvyjCWlQ2G0tf1i6PZsrFxBZDj03hHkLzuPghS4KZZFlnmYXnrGA=w1918-h1660")',
    backgroundSize: "20px",
    backgroundPosition: "10px center",
    backgroundRepeat: "no-repeat",
    paddingLeft: "45px"
}
export default Nav;