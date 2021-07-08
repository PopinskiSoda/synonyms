import React from 'react';
import { Modal } from './Modal';

export const Confirm = ({onClose, synonymToDeleteId}) => {
    return (
        <Modal
            title={'Подтверждение действия'}
            onClose={onClose}
        >
            {`Подтвердите удаление синонима «${synonymToDeleteId}»`}
        </Modal>
    )
}