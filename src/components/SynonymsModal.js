import React, { useCallback } from 'react';
import { Card } from './Card';
import { Modal } from './Modal';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from './Button';
import information from '../icons/information.svg'
import './SynonymsModal/index.scss'
import { AddForm } from './AddForm';
import { CLEAR_SYNONYMS } from '../constants/actionTypes';

export const SynonymsModal = ({onClose}) => {
    const cards = useSelector(state => state.cards);
    const isEditing = useSelector(state => state.cards.find((item) => item.isEditing))

    const localStorage = window.localStorage;
    const handleSave = useCallback(() => {
        localStorage.setItem('cards', JSON.stringify(cards))
    }, [cards])

    const dispatch = useDispatch();
    const handleClear = useCallback(() => {
        localStorage.setItem('cards', JSON.stringify([]))
        dispatch({
            type: CLEAR_SYNONYMS,
        })
    }, [])

    return (
        <Modal
            title='Редактирование группы синонимов поисковых фраз'
            onClose={onClose}
            controls={
                <>
                    <Button
                        text='сохранить изменения'
                        type='success'
                        onClick={handleSave}
                    />
                    <Button
                        text='очистить синонимы'
                        type='danger'
                        onClick={handleClear}
                    />
                </>
            }
        >
            <div className='SynonymsModal__information'>
                <div className='SynonymsModal__information-text'>
                    Синонимы
                </div>
                <img src={information}/>
            </div>
            {!isEditing && <AddForm/>}
            {cards.map((card) => (
                <Card
                    key={card.id}
                    id={card.id}
                    text={card.text}
                    isEditing={card.isEditing}
                />
            ))}
        </Modal>
    )
}