import {EDIT_SYNONYM, SET_IS_EDITING} from '../constants/actionTypes';

const initState = {
    cards: [
        {
            id: 1,
            text: 'Процент',
            isEditing: false,
        },
        {
            id: 2,
            text: 'Золотая',
            isEditing: false,
        },
        {
            id: 3,
            text: 'Премиум',
            isEditing: false,
        },
        {
            id: 4,
            text: 'Кредит',
            isEditing: false,
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

        case SET_IS_EDITING:
            return {
                ...state,
                cards: state.cards.map((card) => (
                    (card.id === action.id)
                        ? {...card, isEditing: action.isEditing}
                        : card
                ))
            }

        default:
            return state;
    }
}