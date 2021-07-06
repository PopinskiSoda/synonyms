import React from 'react';
import { Input } from './Input';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import {
    DELETE_SYNONYM,
    EDIT_SYNONYM,
    SET_IS_EDITING
} from '../constants/actionTypes';

export const Card = ({id, text, isEditing}) => {
    const dispatch = useDispatch()
    const [currentText, setCurrentText] = useState(text);

    const handleChange = (event) => {
        setCurrentText(event.target.value);
    }

    const handleSave = () => {
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
    }

    const handleEdit = () => {
        dispatch({
            type: SET_IS_EDITING,
            id: id,
            isEditing: true,
        });
    }

    const handleCancel = () => {
        dispatch({
            type: SET_IS_EDITING,
            id: id,
            isEditing: false,
        });
        setCurrentText(text)
    }

    const handleDelete = () => {
        dispatch({
            type: DELETE_SYNONYM,
            id: id,
        })
    }

    return (
        <div>
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
                            onClick={handleEdit}
                        >
                            edit
                        </button>
                        <button
                            onClick={handleDelete}
                        >
                            delete
                        </button>
                    </>
                )}
        </div>
    )
}