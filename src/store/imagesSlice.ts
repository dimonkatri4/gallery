import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    images: [],
};

export const imagesSlice = createSlice({
    name: 'images',
    initialState,
    reducers: {},
});

export default imagesSlice.reducer;
