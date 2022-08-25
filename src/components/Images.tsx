import React, {ChangeEvent, useEffect} from 'react';
import {fetchImagesList} from "../services/imagesThunk";
import {useAppDispatch} from "../hooks/redux";
import {useSelector} from "react-redux";
import {getCurrentPage, getImagesList, getPageSize} from "../store/selectors/imagesSelectors";
import ImageItem from "./ImageItem";
import {ImageList, Pagination} from "@mui/material";
import { setCurrentPage } from '../store/imagesSlice';
import {getPageCount} from "../store/selectors/paginationSelectors";

const Images = () => {

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
            <ImageList variant="woven"
                       cols={4}
                       rowHeight={180}
                       gap={10}
            >
                {imagesList.map(i => <ImageItem src={i.urls.small} key={i.id} id={i.id}/>)}
            </ImageList>
            <Pagination
                onChange={handleChangePage}
                page={currentPage}
                count={pageCount}
                size='medium'
                sx={{display: 'flex', justifyContent: 'center', m: '2rem'}}
            />
        </div>
    );
};

export default Images;