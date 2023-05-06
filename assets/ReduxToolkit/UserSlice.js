import {createSlice} from "@reduxjs/toolkit";

export const UserSlice = createSlice({
    name : 'user',
    initialState : {
        cne : {
            value : 'D133515005',
            isVisible : false,
            isLocked : true
        },
        cni : {
            value : 'JT101634',
            isVisible : false,
            isLocked : true
        },
        nom : {
            value : '',
            isVisible : true,
            isLocked : false
        },
        prenom : {
            value : '',
            isVisible : true,
            isLocked : false
        },
        sexe : {
            value : '',
            isVisible : true,
            isLocked : false
        },
        date : {
            value : new Date('2022-03-25'),
            isVisible : true,
            isLocked : false
        },
        naissance : {
            value : new Date('2001-11-05'),
            isVisible : false,
            isLocked : true
        },
        adresse : {
            value : '59 HAY AL FARAH III',
            isVisible : true,
            isLocked : false
        },
        ville : {
            value : 'AGADIR',
            isVisible : true,
            isLocked : false
        },
        telephone : {
            value : '+212 630330357',
            isVisible : true,
            isLocked : false
        },
        email : {
            value : 'elfilaoussama@gmail.com',
            isVisible : true,
            isLocked : false
        },
        type : {
            value : 'ROLE_ETUDIANT',
            isVisible : true,
            isLocked : false
        },
    },
    reducers : {
        setCne : (state, action) => {
            state.cne = action.payload
        },
        setCni : (state, action) => {
            state.cni = action.payload
        },
        setNom : (state, action) => {
            state.nom = action.payload
        },
        setPrenom : (state, action) => {
            state.prenom = action.payload
        },
        setSexe : (state, action) => {
            state.sexe = action.payload
        },
        setDate : (state, action) => {
            state.date = action.payload
        },
        setNaissance : (state, action) => {
            state.naissance = action.payload
        },
        setAdresse : (state, action) => {
            state.adresse = action.payload
        },
        setVille : (state, action) => {
            state.ville = action.payload
        },
        setTelephone : (state, action) => {
            state.telephone = action.payload
        },
        setEmail : (state, action) => {
            state.email = action.payload
        },
        setType : (state, action) => {
            state.type = action.payload
        }
    }
})

export const {

    setCne,

    setCni,

    setAdresse,

    setDate,

    setEmail,

    setNaissance,

    setVille,

    setTelephone,

    setNom,

    setPrenom,

    setSexe,

    setType

} = UserSlice.actions;
export default UserSlice.reducer