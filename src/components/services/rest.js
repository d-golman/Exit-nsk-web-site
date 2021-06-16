import { API } from "./variables"


export const getQuests = () => {
    return fetch(`${API}/quests`)
        .then(res => res.json())
}

export const getQuest = (id) => {
    return fetch(`${API}/quests/${id}`)
        .then(res => res.json())
}

export const getCelebs = () => {
    return fetch(`${API}/holidays`)
        .then(res => res.json())
}
export const getCelebsServices = () => {
    return fetch(`${API}/holidays_services`)
        .then(res => res.json())
}
export const getCeleb = (id) => {
    return fetch(`${API}/holidays/${id}`)
        .then(res => res.json())
}

export const getContacts = () => {
    return fetch(`${API}/contacts`)
        .then(res => res.json())
}

export const getReviews = (id) => {
    if (!id) {
        return fetch(`${API}/reviews`)
            .then(res => res.json())
    } else {
        return fetch(`${API}/reviews/${id}`)
            .then(res => res.json())
    }

}

export const postOrder = (data) => {
    const formData = new FormData()
    for (const name in data) {
        formData.append(name, data[name])
    }
    formData.append('source', window.localStorage.getItem('utm_source'))
    return fetch(`${API}/order`, {
        method: 'POST',
        body: formData
    })
        .then(res => res.json())
}

export const postHoliday = (data) => {
    const formData = new FormData(data)
    return fetch(`${API}/holiday_order`, {
        method: 'POST',
        body: formData
    })
        .then(res => res.json())
}