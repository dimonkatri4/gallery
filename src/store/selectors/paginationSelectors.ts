import { createSelector } from "@reduxjs/toolkit";
import {getPageSize, getTotalCountImages} from "./imagesSelectors";

export const getPageCount = createSelector(
    getTotalCountImages, getPageSize,
    (totalCountImages, pageSize) => {
        if (totalCountImages !== null)
            return Math.ceil(totalCountImages / pageSize)
    }
)