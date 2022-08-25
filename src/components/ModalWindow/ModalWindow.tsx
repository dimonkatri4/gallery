import React, {ReactElement} from "react";
import style from "./modalWindow.module.css"
import {setSelectedImage, toggleIsOpenImage} from "../../store/imagesSlice"
import {useAppDispatch} from "../../hooks/redux";
import {useSelector} from "react-redux";
import {getIsOpenImage} from "../../store/selectors/imagesSelectors";

interface Props {
    children: ReactElement | null
}

function ModalWindow({children}: Props) {

    const dispatch = useAppDispatch()
    const isOpenPhoto = useSelector(getIsOpenImage)

    const closePhoto = () => {
        dispatch(toggleIsOpenImage(false))
        dispatch(setSelectedImage(null))
    }

    return <div className={isOpenPhoto ? `${style.modal} ${style.modal_active} content` : `${style.modal}`}
                onClick={closePhoto}>
        <div className={isOpenPhoto ? `${style.modal_content} ${style.content_active}` : `${style.modal_content}`}
             onClick={(e) => e.stopPropagation()}>
            {children}
        </div>

    </div>
}

export default ModalWindow