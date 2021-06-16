const initialState = {
    quests: [],
    contacts: [],
    celebs: [],
    error: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOAD_QUESTS':
            return {
                ...state,
                quests: action.payload
            }
        case 'LOAD_CELEBS':
            return {
                ...state,
                celebs: action.payload
            }
        case 'LOAD_CONTACTS':
            return {
                ...state,
                contacts: action.payload
            }
        default:
            return state
    }
}

export default reducer