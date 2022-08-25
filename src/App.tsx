import React from 'react';
import './App.css';
import Images from "./components/Images";
import {Container} from "@mui/material";
import Header from './components/Header';
import ModalWindow from "./components/ModalWindow/ModalWindow";
import {useSelector} from "react-redux";
import {getSelectedImage} from "./store/selectors/imagesSelectors";

function App() {

    const openedImage = useSelector(getSelectedImage)

    return (
        <>
            <Header/>
            <Container sx={{mt: '2rem'}}>
                <Images/>
            </Container>
            <ModalWindow>
                <div>
                    {openedImage && <img src={openedImage.urls.regular} style={{height:'40rem'}}/>}
                </div>
            </ModalWindow>
        </>
    );
}

export default App;
