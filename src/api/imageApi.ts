import { instance } from './baseApi';
import { ImageType } from '../types/ImageTypes';

export const getPageOfImages = async (pageSize: number, currentPage: number) => {
    const response = await instance.get<ImageType[]>(
        `photos?page=${currentPage}&per_page=${pageSize}`
    );
    return response;
};
