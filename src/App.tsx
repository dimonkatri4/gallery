import React from 'react';
import './App.css';
import Images from "./components/Images";
import {Container} from "@mui/material";
import Header from './components/Header';

function App() {
    return (
        <>
            <Header />
            <Container sx={{mt: '2rem'}}>
                <Images/>
            </Container>
        </>
    );
}

export default App;
