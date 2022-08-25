import {RootState} from "../store";

export const getImagesList = (state: RootState) => state.images.images
export const getCurrentPage = (state: RootState) => state.images.currentPage
export const getPageSize = (state: RootState) => state.images.pageSize
export const getTotalCountImages = (state: RootState) => state.images.totalCountImages
export const getIsFetching = (state: RootState) => state.images.isFetching
export const getIsOpenImage = (state: RootState) => state.images.isOpenImage
export const getSelectedImage = (state: RootState) => state.images.selectedImage