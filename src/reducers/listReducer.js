const initState = {
    cards: [
        {
            text: 'Процент',
        },
        {
            text: 'Золотая',
        },
        {
            text: 'Премиум',
        },
        {
            text: 'Кредит',
        },
    ]
}

export const listReducer = (state = initState, action) => {
    switch (action.type) {
        case 'EDIT_CARD':
            return {
                ...state
            };

        default:
            return state;
    }
}