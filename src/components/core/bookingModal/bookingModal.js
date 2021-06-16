import React, { useState } from 'react'
import { postOrder } from '../../services/rest'
import Error from '../../errorBoundries/error'
import './bookingModal.sass'

const BookingModal = ({ quest, afterFunc, closeFunc }) => {
    const { id, name, price, date, time } = quest

    const questData = {
        id: id,
        date: date,
        time: time,
        price: price
    }
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        comment: ''
    })
    const [message, setMessage] = useState(null)

    const submit = (e) => {
        e.preventDefault()
        postOrder(Object.assign(questData, formData))
            .then(res => {
                setMessage(res.message)
                afterFunc()
                setTimeout(closeFunc, 7000)
            })
            .catch(res =>
                setMessage(res)
            )
    }

    const changeData = (e) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }


    const options = { month: 'long', day: 'numeric' }
    return (
        <Error>
            <div className="overlay-booking">
                <div className="modal-booking">
                    <p>Вы бронируете</p>
                    <p><b>{name}</b></p>
                    <p>Игра состоится {new Date(date).toLocaleDateString("ru-RU", options)} в {time}</p>
                    <p>Цена {price} руб.</p>
                    <form onInput={changeData} onSubmit={submit} >
                        {!message ?
                            <>
                                <input type="name" name="name" placeholder='Имя' required />
                                <input type="tel" name="phone" pattern="^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$" placeholder='Номер телефона' required />
                                <input type="text" name="comment" placeholder='Комментарий' />
                                <input className='btn' type="submit" value="Забронировать" />
                                <div className="checkbox">
                                    <input type="checkbox" defaultChecked required /><p>Я соглашаюсь с правилами и даю согласие на обработку персональных данных</p>
                                </div>
                            </>
                            :
                            <h1>{message}</h1>}
                    </form>
                </div>
            </div>
        </Error>
    )
}


export default BookingModal
