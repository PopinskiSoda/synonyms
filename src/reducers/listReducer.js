import { EDIT_SYNONYM } from '../constants/actionTypes';

const initState = {
    cards: [
        {
            id: 1, text: 'Процент',
        },
        {
            id: 2, text: 'Золотая',
        },
        {
            id: 3, text: 'Премиум',
        },
        {
            id: 4, text: 'Кредит',
        },
    ]
}

export const listReducer = (state = initState, action) => {
    switch (action.type) {
        case EDIT_SYNONYM:
            return {
                ...state,
                cards: state.cards.map((card) => (
                    (card.id === action.id)
                        ? { ...card, text: action.text }
                        : card
                ))
            };

        default:
            return state;
    }
}