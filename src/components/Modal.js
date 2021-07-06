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
                    <Card text={card.text} />
                ))}
            </div>
        </div>
    );
}