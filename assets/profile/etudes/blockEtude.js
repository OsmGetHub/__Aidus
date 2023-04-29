import React from 'react'
export default function BlockEtude({dataE}){
    return(
        <div style={
            {
                border : "1px solid black",
                display : "grid",
                gridTemplateColumns : "70px 20px 1fr",
                backgroundImage : (dataE.isLocked) ? `url(${lock})` : "",
                backgroundRepeat : "no-repeat",
                backgroundPosition : "97% 12%",
                backgroundSize : "25px",
                padding : "15px 13px",
                boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.2)"
            }
        }>
            <img style={{gridColumn: "1 / 2", width : "70px", border:"2px solid black"}} src={dataE.imageEtablissemebt} alt="image d'etablissment"/>
             <div style={{
                 gridColumn: "3 / 4",
                 display: "flex",
                 flexDirection : "column",
                 padding : "5px 0px"
            }} >
                <div style={{
                    fontSize : "1.3em",
                    marginBottom : "5px"
                }}><b>{dataE.etablissement}</b></div>
                <div><span>{dataE.diplome}, </span><span>{dataE.branche}</span></div>
                <div style={{ color : "#808080" }}>{dataE.dateObtention}</div>
            </div>
        </div>
    );
}
const lock = "https://lh3.googleusercontent.com/fife/APg5EOa7OixvLL7qqoT_ixNAlKZZtkWY5C2VMSQ7UNY7ZmVMoCShcXZ60V4U3Muaj_gB79oD-HiIqNWy4r3KtV0XB4XjW1tLBhXCtK3v-FbWbuZww568VbohCx7ykWkxgcq4UCCs0BTFJAjqnDQKB5AStHM-leKNs11_ACWrQOLqQ_KHhYhInrcbVxQQ6NA0xCTTE_yKanc23DG7KV84rGuINSZPqwCojEWHxxYMCEsGND4in00UUrfH8GIqisOCS-srg9FGSUb8iMcLCVGT9SrO-uRXzpubTyvXt7XUpcjLldG4bOkVMEkfIhkE45QBhe902s7BmAnVbk3fC7L0WpPR3kDhPnVlS5ab_fDBmEhHJefYYuifaTWANhU31HkLu9Ae82pyUZ_EjJSI9_V7sfsiVYHFrqgQWV7fa3rXkNWJqPb8lAzegIDaMa4ZSI-BdlGoxlfpIKHFuQ2SEhX3MtDSfANMpUbKTztKxElOXEzBazo4ACXYf_QsUHqYD27qcIdlWu2r30n5ySZ_S3wqAK9BwGy5ddQrMXcbxvNcdKPlmQelLpvI6cdUagRyRWB0qs8mZ7AfHSju1Cfgs17pMLgM9KpSaVpCwx8VVXqdbpSDjSw3FrlgSr9DF-2n6dFh1itEcnSaixIAp5O9isenZ6xsEmiskg3zXdToC0RsXXrNMzXxRYJOkKPD5_dFJ9Vo9MECKBx2R-IDbTre6hhotQkmXZjS2evlmiAvYhEetqMK_hauy2biYvD4Pkt_iFkkmI1Mxs6vKZw5DTtfR0U9OXk_5weYcLD6aHsNlbXKA-uh4w3qIHuVP5wenlxRByyR4Rd-eUcvXKjExJ88-WL8HjfY0WpCuSHlgttKqOLY-A1mgXzlNa1g4Fm_h-eLCYpq8WoeCqmF6r_3PeoNBPs5Pn8SOY1NHf3IYkRVDDfDGge7TFUled_9Uc7J8bmSn-AsdFqdqrnaTXmgTp1JcfUOomGNTmqDFVT-Cv9lFSk_Us8sve8L9oiVcN_FUWZxYsh19doYVDmhw_xcpG9rdHfTH06hm2sF0kiBnFVgCpX57CG7yRZuHYiaZpoetsoSIn_vmPcisv1AO0liiCDt-YjFFrUPgKHXz6O6jfGq1Piavgz6aYT_nOyyno7nvicRodo6hvCvfPuiA69DGK3QfnD9W6b93zV0Bd1Ce4VTiqqcgCmkNhjcMGi2HEy1iMoVL8Tk4s2aEXjEF4WGP-ocVbGIsHWDpk4V2I4dcAYPxL_fhH36Qwpmp-8YOFaG81JLvwPXkZawF6frl9VxQBlxvaUXkerQsxTlbPA6D45YrjqVYQEKqTG7q04Z9SlJIdEFkBDIN64th5QcJap5S1OIWJnv4QYlKp_zGIkol4rm5Sft7X2H0PFSjF4YlWpdHEb9S-gKAQJvUAj_bym9SJTMCNURDMNXnpZP7rPuIyX2i6ZyGvKL2pLH4Wp9puzc1FG78WVao_DnPZVuDgSFWs1wvekAnxWrxb37FHT3kY91GeU3l-PqpFm7UPPS84hlAFqntpsqnkdnkec8MpixW9l85hFlyl3m7UJ93Hq_pG3NarJ4EsV4Br6nzQxmvUEEcHUHzo2g_4yeE2Sdtxsi=w628-h470-p-k-nu"
//Styles block des etudes

