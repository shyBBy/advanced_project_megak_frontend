import React, {useState} from 'react';
import {Header} from './components/Header/Header';
import {Map} from './components/Map/Map';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {SearchContext} from "./contexts/search.context";
import {Route, Routes} from "react-router-dom";
import {CreateAddFormForm} from "./components/CreateAdd/CreateAddForm";

export const App = () => {
    const [search, setSearch] = useState('');

    return (
        <>
            <SearchContext.Provider value={{search, setSearch}}>
                <Header/>
                <Routes>
                    <Route path="/" element={<Map/>}/>
                    <Route path="/add" element={<CreateAddFormForm/>}/>
                </Routes>
            </SearchContext.Provider>
        </>
    );
}

