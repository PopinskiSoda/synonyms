import React from 'react';
import { Modal } from './Modal';

export const Confirm = ({onClose, synonymToDelete}) => {
    return (
        <Modal
            header={'Подтверждение действия'}
            onClose={onClose}
        >
            {`Подтвердите удаление синонима «${synonymToDelete}»`}
        </Modal>
    )
}