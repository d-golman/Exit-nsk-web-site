import { API } from "./variables"


export const getQuests = () => {
    return fetch(`${API}/quests`)
        .then(res => res.json())
}

export const getQuest = (id) => {
    return fetch(`${API}/quests/${id}`)
        .then(res => res.json())
}

export const getContacts = () => {
    return fetch(`${API}/contacts`)
        .then(res => res.json())
}

export const postOrder = (data) => {
    const formData = new FormData()
    for (const name in data) {
        formData.append(name, data[name])
    }
    formData.append('source', 'Сайт')
    return fetch(`${API}/order`, {
        method: 'POST',
        body: formData
    })
        .then(res => res.json())
}