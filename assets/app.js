import React from 'react';
import OffresEmploi from "./offres_emploi";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import OffresStage from "./offres_stage";
import OffresFormation from "./offres_formation";
import Profile from './profile';
import AddPost from "./ajouterOffres/addPost";
import Apercus from './profile/apercus'

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<OffresEmploi />} />
                <Route path="/offreStage" element={<OffresStage />} />
                <Route path="/offreEmploi" element={<OffresEmploi />} />
                <Route path="/offreFormation" element={<OffresFormation />} />
                <Route path="/Profile" element={<Profile />} />
                <Route path="/ajouterOffre" element={<AddPost />} />
                <Route path="/apercus" element={<Apercus />} />
            </Routes>
        </BrowserRouter>
    );
}