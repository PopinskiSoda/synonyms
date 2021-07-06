import './App.css';
import { Modal } from './components/Modal.js';
import React, { useCallback, useState } from 'react';
import { Card } from './components/Card';
import { useSelector } from 'react-redux';
import { Confirm } from './components/Confirm';

function App() {
    const cards = useSelector(state => state.cards);
    const synonymToDelete = useSelector((state) => state.synonymToDelete)

    const [isModalOpened, setIsModalOpened] = useState(true);

    const handleCloseList = useCallback(() => {
        setIsModalOpened(false)
    }, []);

    return (
        <div className="App">
            {
                isModalOpened && !synonymToDelete && (
                    <Modal
                        header={'Редактирование группы синонимов поисковых фраз'}
                        onClose={handleCloseList}
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
            {synonymToDelete && (
                <Confirm synonymToDelete={synonymToDelete}/>
            )}
        </div>
    );
}

export default App;
