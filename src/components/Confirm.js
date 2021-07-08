import React from 'react';
import { Modal } from './Modal';
import { Button } from './Button';
import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import { DELETE_SYNONYM } from '../constants/actionTypes';

export const Confirm = ({onClose, synonymToDeleteId}) => {
    const dispatch = useDispatch()
    const synonymText = useSelector(state => state.cards.find((item) => item.id === synonymToDeleteId)).text
    const handleDelete = useCallback(() => {
        dispatch({
            type: DELETE_SYNONYM,
            id: synonymToDeleteId,
        })
        onClose();
    }, [synonymToDeleteId])

    return (
        <Modal
            title={'Подтверждение действия'}
            onClose={onClose}
            size='small'
            controls={
                <>
                    <Button
                        text='удалить синоним'
                        type='danger'
                        onClick={handleDelete}
                    />
                    <Button
                        text='отменить действие'
                        type='main'
                        onClick={onClose}
                    />
                </>
            }
        >
            {`Подтвердите удаление синонима «${synonymText}»`}
        </Modal>
    )
}