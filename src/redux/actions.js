export const loadQuests = (quests) => {
    return {
        type: 'LOAD_QUESTS',
        payload: quests
    }
}

export const loadCelebs = (celebs) => {
    return {
        type: 'LOAD_CELEBS',
        payload: celebs
    }
}

export const loadContacts = (contacts) => {
    return {
        type: 'LOAD_CONTACTS',
        payload: contacts
    }
}