import React, {ChangeEvent, useEffect} from 'react';
import {fetchImagesList} from "../services/imagesThunk";
import {useAppDispatch} from "../hooks/redux";
import {useSelector} from "react-redux";
import {getCurrentPage, getImagesList, getPageSize} from "../store/selectors/imagesSelectors";
import ImageItem from "./ImageItem";
import {Pagination} from "@mui/material";
import { setCurrentPage } from '../store/imagesSlice';
import {getPageCount} from "../store/selectors/paginationSelectors";

const ImagesList = () => {

    const dispatch = useAppDispatch()
    const currentPage = useSelector(getCurrentPage)
    const pageSize = useSelector(getPageSize)
    const imagesList = useSelector(getImagesList)
    const pageCount = useSelector(getPageCount)

    useEffect(() => {
        dispatch(fetchImagesList(currentPage, pageSize))
    }, [currentPage])

    const handleChangePage = (event:ChangeEvent<unknown>, value: number): void => {
        dispatch(setCurrentPage(value))
    };

    return (
        <div>
            <div style={{display: 'flex',flexWrap: 'wrap', justifyContent: 'center'}}>
                {imagesList.map(i => <ImageItem src={i.urls.small} key={i.id}/>)}
            </div>
            <Pagination
                onChange={handleChangePage}
                page={currentPage}
                count={pageCount}
                size='large'
            />
        </div>
    );
};

export default ImagesList;