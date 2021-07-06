import './App.css';
import { Modal } from './components/Modal.js';
import { useCallback, useState } from 'react';

function App() {
    const [isModalOpened, setIsModalOpened] = useState(true);

    const handleClose = useCallback(() => {
        setIsModalOpened(false)
    }, []);

    return (
    <div className="App">
        {
            isModalOpened && (
                <Modal
                    onClose={handleClose}
                />
            )
        }
    </div>
    );
}

export default App;
