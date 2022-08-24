import React, {useEffect} from 'react';
import {fetchImagesList} from "../services/imagesThunk";
import {useAppDispatch} from "../hooks/redux";
import {useSelector} from "react-redux";
import {getCurrentPage, getImagesList, getPageSize} from "../store/selectors/imagesSelectors";
import ImageItem from "./ImageItem";

const ImagesList = () => {

    const dispatch = useAppDispatch()
    const currentPage = useSelector(getCurrentPage)
    const pageSize = useSelector(getPageSize)
    const imagesList = useSelector(getImagesList)

    useEffect(() => {
        dispatch(fetchImagesList(currentPage, pageSize))
    }, [])

    return (
        <div>
            {imagesList.map(i => <ImageItem src={i.urls.regular} key={i.id}/>)}
        </div>
    );
};

export default ImagesList;