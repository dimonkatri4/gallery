import React from 'react';

interface Props {
    src: string
}

const ImageItem = ({src}: Props) => {
    return (
        <div>
            <img src={src}/>
        </div>
    );
};

export default ImageItem;