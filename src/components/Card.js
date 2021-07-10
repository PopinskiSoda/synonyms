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
import cross from '../icons/cross.svg'
import { Button } from './Button';

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
        dispatch({
            type: SET_SYNONYM_FOR_DELETE,
            id: id,
        })
    }, [id])

    return (
        <div className={`Card${isEditing ? ' Card--is-editing' : ''}`}>
            {isEditing
                ? (
                    <>
                        <Input
                            className='Card__input'
                            value={currentText}
                            onChange={handleChange}
                        />
                        <div className='Card__buttons-container'>
                            <Button
                                onClick={handleSave}
                                text='сохранить'
                                type='main-small-margin'
                            >
                            </Button>
                            <button
                                onClick={handleCancel}
                                className='Card__cross-button'
                            >
                                <img src={cross} />
                            </button>
                        </div>
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