import React, {useContext, useState} from 'react';
import {EtudesContext} from "../profile";
import {ADDCREER} from "./AddCareer";
import BlockEtude from "./etudes/blockEtude";
import AjoutFormationModal from "./experiences/AjoutFormationModal";

function CarriereEtudes() {
    const [addEtude, setEtude] = useState(false)
    const {etudes, setEtudes} = useContext(EtudesContext)
    const [etudesData, setData] = useState([
        {
            etablissement : "Universite Ibn Zohr",
            imageEtablissemebt : "https://lh3.googleusercontent.com/fife/APg5EOY3yRTUZBxP-DcfCEcbItN36WE5VAA0ipYS5j2HuvnYlWUJqtLmSwFSqmcWcJwF70pe0biykIFokixGoO99Gsb8ILNzxGcukiQiS3pcVChWkgX0EUlbvfZCZ1JCDgczVAi5-wBGHQN6GYre8-54R9opWK05urNLEDNHQsIzldDYfv5dIsfvRnuBrY5jsvW5sbmssa5lteTunbR_CdbkNETbvM3ruYOH2REugZoYAQq9LWhjhl7sLpbpJyyyg0-Z6Q6gQ33D4DP9WuTVj43BSCSb3Iv7hMrvV6jPVKCnxq9vSXBmhAVHIYfEsPP7gBwxnN_FFwCobNXSf-W8v6XRFjgRC_lo1iqzrfpRGA_-AQM7Y02KooCr4rnRjlqDs9iKidADMCxB8WR9TvkdWHuahq2dctXzb6z5eECiQg_enrl_xZ9aFCjmvZLCS0P6O5KnNDRrDapxjruq3vH0KUcT1SEFiG1Qr86zBFbqf1VFW9T0Tofu-Qv5IYXrQf9AWOnjoOQWMGu3m3e3FPgicRPph5ECeZID64MJHALIqILorZD42HJ-pxK01-rtbshQE97g5fwrqnDWX5_LD1Di30sMoKm-Z_BvuzCLXBBUTunDnMWbpa7rfGmFfEtw8M1xxeQCRntPZurfzD_i03wmfvG_0bnWYnkjPt2--qVPIcMm4mla8wCppulRn1UQN5puGj2kKLW6dcRZKaPp0kYT-bdkQUTXcaGGiINywFz5TRVAUdKNO2-_QlZXM3tXYKZnRyxi1_U5EPKCf6DquPhfJPcRD7mQY0KzifEKKihdLwG6lGQL8rt-Yv_zHy2F4bAWMeqjjwqPu9kB0c0SfTcyVTAAIxtog67i3ICkVFqq3cokaSnuCcHbe65YfeAeNOYLPOL1CWmU-p1nJo7WSA9zZ8oRMNlFNJj_pdL3AZfGGvLzu_rSiN0jbr6rCci6-xvk9yzAnhpQp1_KE3gYD_1QL9u6xFbkhmXXWUvuBw9lDYlAq0PWaRkqyZoikr6fdV7fYMULt_0_DyZwz10n4xQ2RrspDV1UDrYW93Z5zVKsuIUJGHI7XRwpQzBQMDPBLO6Vq5bJD10z3w7zqiPcHPy02bp1wYeICYalsQGCOL1tEAQTOIAIh4VbaPsS2OJG6gZnpHyanLlhPA6EPFeMFsWX93zHT7FblMdo4koPiV_yvYt_OoAwAoMubH9hiNf1-gt4ualzuv3UiwkRzQK8y9BZ1zfemG7vr2C2kAbVt1--__iID3I_UnrdG_Xd3I_w22_0NzMJ-KumkOfdRCJSAiAWz4yS3Jl8fiCxLpetOcOhlcsPcVUk5GGNenDrv74T7TiMdLVOVilRvAmBkleOjyiBlokurNTJP-rmEf92LG0MSKdsNLEGO7df8NZlyQz6OtoY59aKdQDobnrjkOhnxK0UQWsB6QaKv8s1u_EIjPksFY63eJFlflq8v3sQ5WjvWhtu36dhWTtQBugGIIMyAnii4jFXWAiA4dYDgLGHOaPwSb_fb8sejuBIP7hW8WBSRit6r5RTuOUbIbnn0NaObo3WIbGN0THlTELysR1zU2bfJqkOoWUFpVdJ0gSB-RcevTtoubfx6d0DHib7=w2000-h1730",
            diplome : "Licence",
            branche : "genie logiciel",
            dateObtention : "Septembre 2021 - Juin 2022",
            isLocked : true
        },
        {
            etablissement : "Universite Ibn Zohr",
            imageEtablissemebt : "https://lh3.googleusercontent.com/fife/APg5EOY3yRTUZBxP-DcfCEcbItN36WE5VAA0ipYS5j2HuvnYlWUJqtLmSwFSqmcWcJwF70pe0biykIFokixGoO99Gsb8ILNzxGcukiQiS3pcVChWkgX0EUlbvfZCZ1JCDgczVAi5-wBGHQN6GYre8-54R9opWK05urNLEDNHQsIzldDYfv5dIsfvRnuBrY5jsvW5sbmssa5lteTunbR_CdbkNETbvM3ruYOH2REugZoYAQq9LWhjhl7sLpbpJyyyg0-Z6Q6gQ33D4DP9WuTVj43BSCSb3Iv7hMrvV6jPVKCnxq9vSXBmhAVHIYfEsPP7gBwxnN_FFwCobNXSf-W8v6XRFjgRC_lo1iqzrfpRGA_-AQM7Y02KooCr4rnRjlqDs9iKidADMCxB8WR9TvkdWHuahq2dctXzb6z5eECiQg_enrl_xZ9aFCjmvZLCS0P6O5KnNDRrDapxjruq3vH0KUcT1SEFiG1Qr86zBFbqf1VFW9T0Tofu-Qv5IYXrQf9AWOnjoOQWMGu3m3e3FPgicRPph5ECeZID64MJHALIqILorZD42HJ-pxK01-rtbshQE97g5fwrqnDWX5_LD1Di30sMoKm-Z_BvuzCLXBBUTunDnMWbpa7rfGmFfEtw8M1xxeQCRntPZurfzD_i03wmfvG_0bnWYnkjPt2--qVPIcMm4mla8wCppulRn1UQN5puGj2kKLW6dcRZKaPp0kYT-bdkQUTXcaGGiINywFz5TRVAUdKNO2-_QlZXM3tXYKZnRyxi1_U5EPKCf6DquPhfJPcRD7mQY0KzifEKKihdLwG6lGQL8rt-Yv_zHy2F4bAWMeqjjwqPu9kB0c0SfTcyVTAAIxtog67i3ICkVFqq3cokaSnuCcHbe65YfeAeNOYLPOL1CWmU-p1nJo7WSA9zZ8oRMNlFNJj_pdL3AZfGGvLzu_rSiN0jbr6rCci6-xvk9yzAnhpQp1_KE3gYD_1QL9u6xFbkhmXXWUvuBw9lDYlAq0PWaRkqyZoikr6fdV7fYMULt_0_DyZwz10n4xQ2RrspDV1UDrYW93Z5zVKsuIUJGHI7XRwpQzBQMDPBLO6Vq5bJD10z3w7zqiPcHPy02bp1wYeICYalsQGCOL1tEAQTOIAIh4VbaPsS2OJG6gZnpHyanLlhPA6EPFeMFsWX93zHT7FblMdo4koPiV_yvYt_OoAwAoMubH9hiNf1-gt4ualzuv3UiwkRzQK8y9BZ1zfemG7vr2C2kAbVt1--__iID3I_UnrdG_Xd3I_w22_0NzMJ-KumkOfdRCJSAiAWz4yS3Jl8fiCxLpetOcOhlcsPcVUk5GGNenDrv74T7TiMdLVOVilRvAmBkleOjyiBlokurNTJP-rmEf92LG0MSKdsNLEGO7df8NZlyQz6OtoY59aKdQDobnrjkOhnxK0UQWsB6QaKv8s1u_EIjPksFY63eJFlflq8v3sQ5WjvWhtu36dhWTtQBugGIIMyAnii4jFXWAiA4dYDgLGHOaPwSb_fb8sejuBIP7hW8WBSRit6r5RTuOUbIbnn0NaObo3WIbGN0THlTELysR1zU2bfJqkOoWUFpVdJ0gSB-RcevTtoubfx6d0DHib7=w2000-h1730",
            diplome : "Licence",
            branche : "genie logiciel",
            dateObtention : "Septembre 2021 - Juin 2022",
            isLocked : false
        },
    ])
    return (
        <React.StrictMode>
            <div style={BlockEtudes}>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding : "0px 17px"
                }}>
                    <div style={{
                        margin : "10px 0px",
                        fontSize : "1.7em"
                    }}><b>Education</b></div>
                    <div>
                        <a href="#" onClick={()=>setEtude(true)}><img style={{width : "20px"}} src="https://lh3.googleusercontent.com/fife/APg5EOZo7nVSIhDSkLeP0ZezzhTsINrC6HR355jnBy7MapFygKcPWMByweo3yTPWqVfzxoD-Oo5qKO5GS57UziLR3CpKQRgyeAfP6iKBh-eBgezJNnnktjkh7xuN0y8fsgF-faIdrV5ICF7pT2sG2V0fwBzOGxVNUQFvVOd1VBI7LOyr7XDPijDHO2IrP7hhxlEVu2yPBxDKq2aTQAThDwY3QnJswlGI163X5m-leD15ER4Kf0DVIkHwQwkVfdcgjR0QuK26VLnHJOy8ex0EEwxe9D6ZajTEPmcbYplgEuO-KajohpLAdDZNfQTgExaW2HlmcFT-46pRrgva_OPkJZYrvklQJ4BwTYH9BEMCFYdmU3jJrua7Z20qeE8JXvJToYPTqj5p0-LlzuOasvEIrOWLi3s3xAkOu-dYLtKPe-IXicEEVTpHk6vA0ijWH1mNipgpzFQvW9sc89Qa-FViFyUGYQ4w21i9MiQOxFnx8x_x_cDGi5Uf00FOQA6y8mlfSx59egiGnONVxEA1WvIZVe2E_42jFo-8trw3foA_y7hMR9BbefY5XQc_o9GvpjL8pZesg5xcDTiXpSF6aGJf8hyaGR-FY7gUHRMs_g4VoUOKkv_Imq_geafZsye1KzJuS-a59LBezD2Sa-1aFEsutsDiDOSuhzq4WcNCtGU9QR3N5X67PjVffkDdCR7FPrvr3hkqkrxxXs-qeUxxk8ZO_jOoombUozrz9mkYclDIZUEh5ZeiHZ6lGQnfX69Yo1VPGaa6U4gwl--xjGJWQzpVu6ntiL3hNH_KiZNK6vzc1na_7M8YhQXagTpendDh9qyY0epvSD2XI8MMFWtwJ5biXOBvdxtcooPeEYmbQvhUw_oF4HXKk0C2zsZMUAx2qYuWUd9wT4bS7z0YbBwcr_SyGldXUa7CmVLmlOxgWhtlWqIzDPRuDuBQCZC50PbrJrouwAquuJ3kZfWeyGJUvd6je_GKhb2h_7KpNyij4OSIDNmcM_xZbrKy-7nPaTkObChOZziKaHzpRYeaz_qgJ0mcvZI0r-M5-GCrBGMVJ5IoIhm6wfodmXsebRjUM8fY77AroYQDtSh3ezxd215TvGHsumqzQ2MCWWt0sfdv5e1KknkeHWPvhrBV0US7ky5JTavhLKYzhTQ-UkSvK29GqNI5O9J0cddYt8UKlKbQvOrKU9bqBiynfSeb2DCNGVO_c_tc-DIb6t69kUKW4lSySCjq38eGPcbQA77kVQ7kmw7N3hRLYuJ9XGXNbvxWGvYCGDUaTJZ6TmjhOcK2ee0ROaamrekX1S-MuB8o3LvgjanNoPv6PWRJcefEI_br28I_k6mcuXK852jjn7wEGgpEUo5c3zT678zpivbre5VI4GjnOEpVnk-11GgXQ4_a-0i0X03zUGhwkWAGziOG9w6t7_n2GIGke8y4regLpvGaGP1aJZC8oExllpN-v3w9zNOump8xE1PDLbu6wS9dcOVMYRdGko5A4ts-mGViYzOTjFmQ4qtNAyugp0dTnHa1vbD7hox0seGp7Roni65rxN7Ql84nQwyHtxqXXSM5trG_owN6x8PbNIbgQey3efSxCw9l38NNTfuo-1i-A7S0=w1866-h916" alt="Ajouter"/></a>
                        <a href="#"><img style={{width : "20px", marginLeft: "20px"}} src="https://lh3.googleusercontent.com/fife/APg5EOb0P1ZouQ4rNqzE83ILgilcu1jP1MmEba8DAfCnUm_LIOiCWd5WeY8XkOzLkopIEKrROYoiAjAZJbbWyr5K0ibUyGhxAUrjWtJV0W-7Jy3KqQjp77qIbF3YR6cW2BWftTETD1ZS08-5yg2I9LQkE_emYwSiAjUzyyjuPMZJKa8esb_O38D7PiepWLK0JaTOPamtpxvg8fFJomPS1xHHPapSkcwRxa3NA17iwgECSaQX-eWuR-FjkKpfo7s-Im-Na5rR_mZBulJMq_cmLvs_FX8uMJeKqyxlZ57Zq0W0iyvuXo3DugPiZJjGymXmu4INaP9BBORwUkZJDTuvOSwS8nQ5Wk__OyrqOEulw6foapt3Yo7ZEAJyM6EG-j2HOCw6lh8hvzydwtzjaxKWI_wWnHI6ZoXXOQEo9Zqr7xdFSilvclu_8-gObIhknSaf920tzkFqb-XqXpozWpIKKUMBiTZjzC0DuSpfUCsAptGqznVHTyl7AZFPcO9bqWgKcIkRkGYZbfMTClr5ucVvI99e1z-9GgqS-yy9Ze21l-xZzxj928NtMAWB_l32uYpZQnE-YmNxaVfR9AKVv9dw44QFxQ7HU7DSU56VS-2v9EBFlii96yXmG32kClx61MCyaakotdrRfm0SAfBZXRmeaDtV9Zhw3xAtNZMz1FCfmcpfMPMJuIRaVMyjMgnG1bDdJabsAx6tbRPAUQJUJFTcx3G92bK1x7WlGCf5kUKQ8KzAs4neoCnGcig51mXTLnFnZe06E2I_Of6WoQUEMMkfgMXCvMytJhYizd7agKq7XLoSWnosXEOKJfW6OXRkjXIr35qnYSm0ghlbJlyj-5L-P0xHTwDeL1ucfIAVLZ3pf8-q-DuChSeqgqAFr1vfq_RibwzD9IrihPMMZmSeTnoZZiBith-elyRrfPvEdATe9AL9nM8uZnPu-OCSXTlNHaSA0DmKZisKCoRnACwa4vePFcl_3P3pj96eEZQi41q1aPXngKDkVwp8ELadr__fq_ARgaJKKdTw_3jHbEUYqcw5bGs-ixhfjXstnCakuwOobJClppR5njZzMyTKN7FqHaxESK3dEA35bKj2ewy5RVtkmpIf8zG_U91ZNa1LZ4phzQsAcEgfuPwDJ0_pNm8rX5lPluUJjpkgW9j5XHuNWJDHgcM8lyu3zx-u8XcIa9Ds4MO1Dv0dy0Uss-3Cy0cOzKT1i_Qeta3_Vxfh8dlkrucVtMjX7aN6pGF5xyNjkkSNEhtJofFD5jSpl6kEvlhIkQMGqcg7NNRxKBdN1T7ma8Q1ZgzVO6XWUZZFFsvCWE2pFPlzQd_UJqX5tSGN8s8W8Io4u1go4uJd-M2KV7lCBGIb9s-xBIr4wCyZZjQGFu-JLiX34Xz7U9LY-CCg6hTvJtk4pTzuMG7ioYH5yGfLaNTbUaU3LxrF6LGYGkeipKzxqEH-CxnuymF2Ny-uYSCIJi_EOxwO7wla-z4-7PiafURw1SVobpd41zvaokmbg2Z3OlIfd8NFNITYe_2iRXL_GEd_a-bh6wPF_q2SEEgJ6Uerv-D_47Gl5bXMu5Z-wsUBQ7gFc1B0A0M6exNj4J90kr8M8NcYfij8sKyW=w1918-h1660" alt="edit"/></a>
                    </div>
                </div>
                {
                    etudesData.map((d)=>(
                            <div><BlockEtude dataE={d} /><br/></div>
                        )
                    )
                }
                {
                    addEtude ? <AjoutFormationModal setEtude={setEtude} setData={setData} /> : ''
                }
            </div>
        </React.StrictMode>
    );
}

//Styles Carriere d'etudes
const BlockEtudes ={
    display: "flex",
    marginBottom : "45px",
    flexDirection : "column",
    alignContent : "center",
    padding: "10px 20px 0px",
    border: "2px solid #707070",
    boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.1)"
}
export default CarriereEtudes;