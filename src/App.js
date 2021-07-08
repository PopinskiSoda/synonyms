import './App.css';
import React, { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { Confirm } from './components/Confirm';
import {SynonymsModal} from "./components/SynonymsModal";

function App() {
    const synonymToDeleteId = useSelector((state) => state.synonymToDeleteId)

    const [isModalOpened, setIsModalOpened] = useState(true);

    const handleCloseList = useCallback(() => {
        setIsModalOpened(false)
    }, []);

    return (
        <div className="App">
            {
                isModalOpened && !synonymToDeleteId && (
                    <SynonymsModal onClose={handleCloseList}/>
                )
            }
            {synonymToDeleteId && (
                <Confirm synonymToDeleteId={synonymToDeleteId}/>
            )}
        </div>
    );
}

export default App;
