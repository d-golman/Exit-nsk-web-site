import React, { useEffect, useState } from 'react'
import { getCeleb, getCelebsServices, postHoliday } from '../../services/rest'
import Error from '../../errorBoundries/error'
import Base from '../base/base'
import { connect } from 'react-redux'
import './celebPage.sass'
import ParticlesComponent from '../../particles/particlesComponent'

const CelebPage = ({ match, contacts }) => {

    const id = match.params.id

    const [celeb, setCeleb] = useState(null)
    const [events, setEvents] = useState(null)

    useEffect(() => {
        getCeleb(id)
            .then(res => setCeleb(res))
        getCelebsServices()
            .then(res => setEvents(res))
    }, [id])


    return (
        <Base>
            <Error>
                <ParticlesComponent />
                {celeb && contacts && events &&
                    <Celeb celeb={celeb} contacts={contacts} events={events} />}
                <Book></Book>
            </Error>
        </Base>
    )
}

const Celeb = ({ celeb, contacts, events }) => {
    const { id, name, image } = celeb
    const { address, phone } = contacts
    return (
        <section className='celebration' id='celebration' >
            <div className="celebration-header">
                {/* <div className="quest-header-name">
                    <h1>{name}</h1>
                    <Link className='back a-btn' to='/'><i className="fas fa-chevron-circle-left"></i></Link>
                </div> */}
                <div className="celebration-header-info">
                    <div className="container">
                        <div className="name">
                            <h1>{name} в "выХод"</h1>
                        </div>

                    </div>
                </div>
                <img src={image} alt={name} />
            </div>
            <div className="celebration-about">
                <div className="container">
                    <div className="flex-block">
                        <div className="description">
                            <h3>Мы предлагаем:</h3>
                            <ul>
                                <li>
                                    <p>классные квесты для участников мероприятия;</p>
                                </li>
                                <li>
                                    <p>уютную гостевую зону для компании от 6 до 25 человек;</p>
                                </li>
                                <li>
                                    <p>колонки и ноутбук, чтобы вы могли включить любимую музыку и видео;</p>
                                </li>
                                <li>
                                    <p>праздничную атмосферу: украсим помещение для вашей вечеринки.</p>
                                </li>
                            </ul>
                            <h3>Дополнительно можно:</h3>
                            <ul>
                                <li>
                                    <p>организовать фуршет (вы также можете принести еду и напитки с собой);</p>
                                </li>
                                <li>
                                    <p>устроить фотосессию;</p>
                                </li>
                                <li>
                                    <p>пригласить ведущего, диджея или музыкантов;</p>
                                </li>
                                <li>
                                    <p>провести командные игры;</p>
                                </li>
                                <li>
                                    <p>реализовать другие ваши идеи и желания.</p>
                                </li>
                            </ul>

                            <h3>Цена вопроса:</h3>
                            <p>Стоимость складывается из цены квестов (как в расписании на сайте), аренды гостевой зоны (1000 руб./час) и дополнительных услуг, которые вы выберете (гонорар фотографа, фуршет и др.).</p>
                        </div>
                        <div className="contacts">
                            <h3>Контакты</h3>
                            <p className="adress">{address}</p>
                            <a href={`tel:${phone}`} className="phone">{phone}</a>
                        </div>
                    </div>
                    {id !== 3 && <div className="events">
                        <h3>Мероприятия для детей</h3>
                        {events.map((event, index) => {
                            return <div key={index} className='events-event'>
                                <h4>{event.name} - {event.price} руб.</h4>
                                <p>{event.description}</p>
                            </div>
                        })}
                    </div>}
                </div>
            </div>
        </section>
    )
}

const Book = () => {

    const submitForm = (e) => {
        e.preventDefault()
        postHoliday(e.target)
            .then(res => {
                document.querySelector('form').childNodes.forEach(input => {
                    input.value = ''
                    if (input.type === 'submit') {
                        input.value = res['message']
                        setTimeout(() => {
                            input.value = 'Отправить'
                        }, 5000)
                    }
                })
            })
    }


    return (
        <div className="celebration-booking">
            <h3>Задать вопрос и заказать мероприятие</h3>
            <form onSubmit={submitForm} className='celebration-booking-form'>
                <input required id='name' type="name" name="name" placeholder='Имя' />
                <input required id='phone' type="tel" name="phone" placeholder='Телефон' />
                <textarea id='comment' type="text" name="comment" placeholder='Комментарий' rows='3'></textarea>
                <input type="submit" value="Отправить" />
            </form>
        </div>
    )

}


const mapDispatchToProps = {
}

const mapStateToProps = (state) => ({
    contacts: state.contacts
})


export default connect(mapStateToProps, mapDispatchToProps)(CelebPage)
