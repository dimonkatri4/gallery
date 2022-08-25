import React from 'react';
import {ImageListItem} from "@mui/material";

interface Props {
    src: string
}

const ImageItem = ({src}: Props) => {
    return (
        <>
            <ImageListItem key={src}>
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