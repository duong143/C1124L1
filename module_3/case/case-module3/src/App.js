import React from "react";
import {Navigate, Route, Routes} from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import LoginPage from "./pages/Auth/LoginPage";
import TrackDetailPage from "./pages/track/TrackDetailPage";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/login"/>}/>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/home" element={<HomePage/>}/>
            <Route path="/track/:id" element={<TrackDetailPage/>}/>
        </Routes>
    );
}

export default App;
