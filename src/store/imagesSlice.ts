import { createSlice } from '@reduxjs/toolkit';
import { ImageTypes } from '../types/ImageTypes';

const initialState = {
    images: [] as ImageTypes[],
    currentPage: 1,
    pageSize: 20,
    totalImages: 0
};

export const imagesSlice = createSlice({
    name: 'images',
    initialState,
    reducers: {
        setImagesList: (state, action) => {
            state.images = action.payload
        },
        setTotalImages: (state, action) => {
            state.totalImages = action.payload
        }
    },
});

export default imagesSlice.reducer;

export const {setImagesList, setTotalImages} = imagesSlice.actions
