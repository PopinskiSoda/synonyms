import React from 'react';
import { Card } from './Card';
import { Modal } from './Modal';
import { useSelector } from 'react-redux';
import { Button } from './Button';

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