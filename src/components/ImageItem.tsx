import React from 'react';
import {ImageListItem, ImageListItemBar} from "@mui/material";
import {useAppDispatch} from "../hooks/redux";
import {setSelectedImage, toggleIsOpenImage} from '../store/imagesSlice';

interface Props {
    src: string
    id: string
    description: string | null
    author: string
}

const ImageItem = ({src, id, description, author}: Props) => {

    const dispatch = useAppDispatch()

    const openImage = (id: string) => {
        dispatch(setSelectedImage(id))
        dispatch(toggleIsOpenImage(true))
    }

    const altDescription = description !== null ? description : `photo by ${author}`

    return (
        <>
            <ImageListItem key={src} onClick={() => openImage(id)}>
                <img
                    src={src}
                    alt={altDescription}
                    title={altDescription}
                    style={
                        {
                            borderRadius: '5px',
                            boxShadow: '5px 5px 5px #cfd8dc',
                            cursor: 'pointer'
                        }
                    }/>
                <ImageListItemBar
                    title={description}
                    subtitle={<div>by: {author}</div>}
                    position="bottom"
                />
            </ImageListItem>
        </>
    );
};

export default ImageItem;