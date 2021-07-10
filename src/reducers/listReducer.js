import {
    ADD_SYNONYM,
    CLEAR_SYNONYMS,
    DELETE_SYNONYM,
    EDIT_SYNONYM,
    SET_IS_EDITING,
    SET_SYNONYM_FOR_DELETE
} from '../constants/actionTypes';

const localStorage = window.localStorage;

const cards = JSON.parse(localStorage.getItem('cards') || '[]')

const initState = {
    synonymToDeleteId: null,
    cards: cards,
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

        case CLEAR_SYNONYMS:
            return {
                ...state,
                cards: [],
            }

        default:
            return state;
    }
}