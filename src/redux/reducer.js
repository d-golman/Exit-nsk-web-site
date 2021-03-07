const initialState = {
    quests: [],
    contacts: [],
    error:false
}

const reducer = (state = initialState, action)=>{
    switch (action.type){
        case 'LOAD_QUESTS': 
        return{
            ...state,
            quests: action.payload
        }
        case 'LOAD_CONTACTS': 
        return{
            ...state,
            contacts: action.payload
        }
        default:
            return state
    }
}

export default reducer