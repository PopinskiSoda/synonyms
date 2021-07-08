import React from 'react';
import { Card } from './Card';
import { Modal } from './Modal';
import { useSelector } from 'react-redux';

export const SynonymsModal = ({onClose}) => {
    const cards = useSelector(state => state.cards);

    return (
        <Modal
            title='Редактирование группы синонимов поисковых фраз'
            onClose={onClose}
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