export const loadQuests = (quests) =>{
    return {
        type:'LOAD_QUESTS',
        payload:quests
    }    
}

export const loadContacts = (contacts) =>{
    return {
        type:'LOAD_CONTACTS',
        payload:contacts
    }    
}