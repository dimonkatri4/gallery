import React from 'react';
import {ImageListItem} from "@mui/material";
import {useAppDispatch} from "../hooks/redux";
import { setSelectedImage, toggleIsOpenImage } from '../store/imagesSlice';

interface Props {
    src: string
    id: string
}

const ImageItem = ({src, id}: Props) => {

    const dispatch = useAppDispatch()

    const openImage = (id: string) => {
        dispatch(setSelectedImage(id))
        dispatch(toggleIsOpenImage(true))
    }


    return (
        <>
            <ImageListItem key={src} onClick={() => openImage(id)}>
                <img
                    src={src}
                    alt={'name'}
                    style={
                        {
                            borderRadius: '5px',
                            boxShadow: '5px 5px 5px #cfd8dc'
                        }
                    }/>
            </ImageListItem>
        </>
    );
};

export default ImageItem;