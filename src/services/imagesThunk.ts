import { getPageOfImages } from "../api/imageApi";
import { setImagesList, setTotalCountImages, toggleIsFetching } from "../store/imagesSlice";
import {AppDispatch} from "../store/store";


export const fetchImagesList = (currentPage = 1, pageSize: number) => async (dispatch: AppDispatch) => {
    try {
        dispatch(toggleIsFetching(true))
        const data = await getPageOfImages(pageSize, currentPage)
        dispatch(toggleIsFetching(false))
        const totalCountImages = Number(data.headers['x-total'])
        dispatch(setImagesList(data.data))
        dispatch(setTotalCountImages(totalCountImages))
    } catch (e) {
        console.log(e)
        alert('Error. Reload the page.')
    }
}