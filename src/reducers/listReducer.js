import {
    ADD_SYNONYM,
    DELETE_SYNONYM,
    EDIT_SYNONYM,
    SET_IS_EDITING,
    SET_SYNONYM_FOR_DELETE
} from '../constants/actionTypes';

const initState = {
    synonymToDeleteId: null,
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

        case SET_SYNONYM_FOR_DELETE:
            return {
                ...state,
                synonymToDeleteId: action.id,
            }

        case DELETE_SYNONYM:
            return {
                ...state,
                cards: state.cards.filter((card) => (
                    card.id !== action.id
                ))
            }

        case ADD_SYNONYM:
            return {
                ...state,
                cards: [action.payload, ...state.cards],
            }

        default:
            return state;
    }
}