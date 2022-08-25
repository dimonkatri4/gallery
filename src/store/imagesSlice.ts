import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ImageType} from '../types/ImageTypes';

const initialState = {
    images: [] as ImageType[],
    currentPage: 1,
    pageSize: 20,
    totalCountImages: 0,
    isFetching: false,
    selectedImage: null as null | ImageType,
    isOpenImage: false
};

export const imagesSlice = createSlice({
    name: 'images',
    initialState,
    reducers: {
        setImagesList: (state, action: PayloadAction<ImageType[]>) => {
            state.images = action.payload
        },
        setTotalCountImages: (state, action: PayloadAction<number>) => {
            state.totalCountImages = action.payload
        },
        toggleIsFetching: (state, action: PayloadAction<boolean>) => {
            state.isFetching = action.payload
        },
        setCurrentPage: (state, action: PayloadAction<number>) => {
            state.currentPage = action.payload
        },
        toggleIsOpenImage: (state, action: PayloadAction<boolean>) => {
            state.isOpenImage = action.payload
        },
        setSelectedImage: (state, action: PayloadAction<string | null>) => {
            action.payload !== null ?
                state.selectedImage = state.images.filter(i => i.id === action.payload)[0] :
                state.selectedImage = null
        }
    },
});

export default imagesSlice.reducer;

export const {
    setImagesList,
    setTotalCountImages,
    toggleIsFetching,
    setCurrentPage,
    toggleIsOpenImage,
    setSelectedImage
} = imagesSlice.actions
