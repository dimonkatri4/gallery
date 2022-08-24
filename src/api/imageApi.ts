import {instance} from "./baseApi";
import {ImageType} from "../types/ImageTypes";


export const getPageOfImages = (pageSize: number, currentPage: number) => {
    return instance.get<ImageType[]>(`photos?page=${currentPage}&per_page=${pageSize}`)
        .then((res) => res)
}
