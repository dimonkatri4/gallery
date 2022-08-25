import React from 'react';
import '../App.css';
import Images from './Images';
import { Container } from '@mui/material';
import Header from './Header';
import ModalWindow from './ModalWindow/ModalWindow';
import { useSelector } from 'react-redux';
import { getSelectedImage } from '../store/selectors/imagesSelectors';

function App() {
    const openedImage = useSelector(getSelectedImage);

    return (
        <>
            <Header />
            <Container sx={{ mt: '2rem' }}>
                <Images />
            </Container>
            <ModalWindow>
                <div>
                    {openedImage !== null && (
                        <img
                            src={openedImage.urls.regular}
                            alt={
                                openedImage.description !== null
                                    ? openedImage.description
                                    : openedImage.user.name
                            }
                            style={{ height: '40rem' }}
                        />
                    )}
                </div>
            </ModalWindow>
        </>
    );
}

export default App;
