import React from 'react';
import { Input } from './Input';
import { useDispatch } from 'react-redux';
import { useState, useCallback } from 'react';
import {
    EDIT_SYNONYM,
    SET_IS_EDITING,
    SET_SYNONYM_FOR_DELETE,
} from '../constants/actionTypes';
import './Card/index.scss'
import pencil from '../icons/pencil.svg'
import bucket from '../icons/bucket.svg'

export const Card = ({id, text, isEditing}) => {
    const dispatch = useDispatch()
    const [currentText, setCurrentText] = useState(text);

    const handleChange = useCallback((event) => {
        setCurrentText(event.target.value);
    }, [])

    const handleSave = useCallback(() => {
        dispatch({
            type: EDIT_SYNONYM,
            id: id,
            text: currentText,
        });
        dispatch({
            type: SET_IS_EDITING,
            id: id,
            isEditing: false,
        });
    }, [id, currentText])

    const handleEdit = useCallback(() => {
        dispatch({
            type: SET_IS_EDITING,
            id: id,
            isEditing: true,
        });
    }, [id])

    const handleCancel = useCallback(() => {
        dispatch({
            type: SET_IS_EDITING,
            id: id,
            isEditing: false,
        });
        setCurrentText(text)
    }, [id])

    const handleDelete = useCallback(() => {
        // dispatch({
        //     type: DELETE_SYNONYM,
        //     id: id,
        // })
        dispatch({
            type: SET_SYNONYM_FOR_DELETE,
            id: id,
        })
    }, [id])

    return (
        <div className='Card'>
            {isEditing
                ? (
                    <>
                        <Input
                            value={currentText}
                            onChange={handleChange}
                        />
                        <button onClick={handleSave}>
                            save
                        </button>
                        <button
                            onClick={handleCancel}
                        >
                            cancel
                        </button>
                    </>
                )
                : (
                    <>
                        {text}
                        <button
                            className='Card__button Card__button--edit'
                            onClick={handleEdit}
                        >
                            <img src={pencil}/>
                        </button>
                        <button
                            className='Card__button'
                            onClick={handleDelete}
                        >
                            <img src={bucket}/>
                        </button>
                    </>
                )}
        </div>
    )
}