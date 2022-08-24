import {instance} from "./baseApi";


export const getPageOfImages = (pageSize = 20, currentPage = 1) => {
    return instance.get(`photos?page=${currentPage}&per_page=${pageSize}`)
        .then((res) => res)
}
