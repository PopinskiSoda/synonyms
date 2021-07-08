import './App.css';
import React, { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { Confirm } from './components/Confirm';
import { SynonymsModal } from './components/SynonymsModal';
import { useDispatch } from 'react-redux';
import { SET_SYNONYM_FOR_DELETE } from './constants/actionTypes';

function App() {
    const synonymToDeleteId = useSelector((state) => state.synonymToDeleteId);
    const dispatch = useDispatch();
    const [isModalOpened, setIsModalOpened] = useState(true);

    const handleCloseSynonymsModal = useCallback(() => {
        setIsModalOpened(false)
    }, []);

    const handleCloseConfirm = useCallback(() => {
        dispatch({
            type: SET_SYNONYM_FOR_DELETE,
            id: null,
        })
    })

    return (
        <div className="App">
            {
                isModalOpened && !synonymToDeleteId && (
                    <SynonymsModal onClose={handleCloseSynonymsModal}/>
                )
            }
            {synonymToDeleteId && (
                <Confirm
                    synonymToDeleteId={synonymToDeleteId}
                    onClose={handleCloseConfirm}
                />
            )}
        </div>
    );
}

export default App;
