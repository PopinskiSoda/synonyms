import React from 'react';
import './Modal/index.scss';
import { Card } from './Card';
import { useSelector } from 'react-redux';

export const Modal = () => {
    const cards = useSelector(state => state.cards);

    return (
        <div className='Modal'>
            <div>
                {cards.map((card) => (
                    <Card
                        key={card.id}
                        id={card.id}
                        text={card.text}
                        isEditing={card.isEditing}
                    />
                ))}
            </div>
        </div>
    );
}