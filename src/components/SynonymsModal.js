import React from 'react';
import { Card } from './Card';
import { Modal } from './Modal';
import { useSelector } from 'react-redux';
import { Button } from './Button';
import information from '../icons/information.svg'
import './SynonymsModal/index.scss'

export const SynonymsModal = ({onClose}) => {
    const cards = useSelector(state => state.cards);

    return (
        <Modal
            title='Редактирование группы синонимов поисковых фраз'
            onClose={onClose}
            controls={
                <>
                    <Button text='сохранить изменения' type='success'/>
                    <Button text='очистить синонимы' type='danger'/>
                </>
            }
        >
            <div className='SynonymsModal__information'>
                <div className='SynonymsModal__information-text'>
                    Синонимы
                </div>
                <img src={information}/>
            </div>
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