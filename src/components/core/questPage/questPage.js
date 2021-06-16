import React, { useEffect, useState } from 'react'
import { getQuest } from '../../services/rest'
import Particles from '../../services/Particles'
import Error from '../../errorBoundries/error'
import Base from '../base/base'
import Reviews from '../reviews/reviews'
import './questPage.sass'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { isMobile } from '../../services/services'
import BookingModal from '../bookingModal/bookingModal'
import ParticlesComponent from '../../particles/particlesComponent'
const QuestPage = ({ match, contacts }) => {

    const id = match.params.id
    const [quest, setQuest] = useState(null)
    useEffect(() => {
        getQuest(id)
            .then(res => setQuest(res))
    }, [id])

    const afterFunc = () => {
        getQuest(id)
            .then(res => setQuest(res))
    }


    return (
        <Base>
            <Error>

                <ParticlesComponent />
                {quest &&
                    <QuestPart quest={quest} contacts={contacts} />
                }
                {quest &&
                    <BookingPart afterFunc={afterFunc} quest={quest} />
                }
                {quest &&
                    <Reviews id={quest.id} />
                }
            </Error>
        </Base>
    )
}

const QuestPart = ({ quest, contacts }) => {

    useEffect(() => {
        document.title = (quest['name'])
        return (() => document.title = 'Квесты в Новосибирске "ВЫХОД')
    },
        [])

    const { name, description, length, people, extra_price, age, images } = quest
    const { address, phone, rules } = contacts
    const range = (start, stop, step) =>
        Array.from({ length: (stop - start) / step + 1 }, (_, i) => {
            if (start + (i * step) !== stop)
                return `${start + (i * step)}, `
            else
                return `${start + (i * step)}`
        })
    const [showDescription, setShowDescription] = useState(true)

    const peopleRender = (count, className) => {
        const people = []
        if (count > 5) {
            return (
                <>
                    <i className={`fas fa-male ${className}`}></i>
                    <span>...</span>
                    <i className={`fas fa-male ${className}`}></i>
                </>
            )
        }
        for (let i = 0; i < count; i++) {
            people.push(
                <i key={i} className={`fas fa-male ${className}`}></i>
            )
        }
        return people
    }


    return (
        <div className="quest">
            <div className="quest-header">
                {/* <div className="quest-header-name">
                    <h1>{name}</h1>
                    <Link className='back a-btn' to='/'><i className="fas fa-chevron-circle-left"></i></Link>
                </div> */}
                <div className="quest-header-info">
                    <div className="container">
                        <div className="name">
                            <h1>{name}</h1>
                        </div>
                        <div className="properties">
                            <div className="age">
                                <p className='icon'>{age}+</p>
                                <p>Возраст</p>
                            </div>
                            <div className="people">
                                <div>
                                    {/* {peopleRender(people[0], 'man man-white')}
                                    {peopleRender(people[1] - people[0], 'man man-grey')} */}
                                    <i className="man far fa-user"></i>
                                </div>
                                <p>{people[0]} - {people[1]} игрока</p>
                            </div>
                            <div className="length">
                                <i className="far fa-clock icon"></i>
                                <p>{length} мин</p>
                            </div>
                            <div className='book'>
                                <a href="#booking">

                                    <p className='btn btn-red'><i className="far fa-edit"></i>Записаться на квест</p></a>
                                <Link className='btn btn-blue' to='/'><i className="far fa-arrow-alt-circle-left"></i>Выбрать другой</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <img src={images['main']} alt={name} />
            </div>
            <div className="quest-about">
                <div className="container">
                    <div className="description">
                        <h3 onClick={() => setShowDescription(true)} className={showDescription ? 'toggle active' : 'toggle'}>Описание</h3>
                        <h3 onClick={() => setShowDescription(false)} className={!showDescription ? 'toggle active' : 'toggle'}>Правила</h3>
                        {showDescription ?
                            <p dangerouslySetInnerHTML={{ __html: description }} ></p>
                            :
                            <p dangerouslySetInnerHTML={{ __html: rules }} ></p>
                        }
                        {people[2] !== 0 &&
                            <p><br />Доплата за {people[1] + 1} - {people[1] + people[2]} игрока - {extra_price} рублей с человека.</p>}

                    </div>
                    <div className="contacts">
                        <h3>Контакты</h3>
                        <p className="adress">{address}</p>
                        <a href={`tel:${phone}`} className="phone">{phone}</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

const BookingPart = ({ quest, afterFunc }) => {
    const [showDate, setDate] = useState(new Date())
    const { id, name, times } = quest
    const [showModal, setShowModal] = useState(false)
    const [modalData, setModalData] = useState(null)

    useEffect(() => {
        document.addEventListener('mousedown', modalListener)
        return (() => document.removeEventListener('mousedown', modalListener))
    }, [])

    const closeModal = () => {
        setShowModal(false)
        document.body.style.overflow = 'visible'
    }

    const modalListener = (e) => {
        if (e.target.classList.contains('overlay-booking')) {
            closeModal()
        }
    }

    const changeDate = (plus) => {
        const today = new Date()
        if (plus) {
            if (showDate < new Date(today.getTime() + 1000 * 60 * 60 * 24 * 21)) {
                setDate(prev => new Date(prev.getTime() + 1000 * 60 * 60 * 24 * 5))
            }
        }
        else if (showDate - 7 >= today) {
            setDate(prev => new Date(prev.getTime() - 1000 * 60 * 60 * 24 * 5))
        }
    }

    const schedule = []

    const ScheduleItems = ({ date, times }) => {
        const scheduleItems = []
        for (const time in times) {
            scheduleItems.push(
                <button key={time}
                    onMouseOver={e => {
                        if (!isMobile.any() && !times[time]['locked']) {
                            e.target.innerHTML = times[time]['price'] + 'р'
                        }
                    }}
                    onMouseOut={e => {
                        e.target.innerHTML = time
                    }}

                    onClick={e => {
                        e.preventDefault()
                        if (!e.target.classList.contains('true')) {
                            setModalData({ id: id, name: name, date: date, time: time, price: times[time]['price'] })
                            setShowModal(true)
                            document.body.style.overflow = 'hidden'
                        }
                    }} className={`btn schedule-item ${times[time]['locked']}`}>{time}</button>
            )
        }
        return scheduleItems
    }

    const dates = []
    for (let i = 0; i < 5; i++) {
        dates.push(new Date(showDate.getTime() + 1000 * 60 * 60 * 24 * i).toISOString().substring(0, 10))
    }

    for (let date in times) {
        if (dates.some(element => element === date)) {
            const options = { month: 'long', day: 'numeric', weekday: 'long' }
            schedule.push(
                <div key={date} className="schedule-row">
                    <h3>{new Date(date).toLocaleDateString("ru-RU", options)}</h3>
                    <ScheduleItems date={date} times={times[date]} />
                </div>
            )
        }
    }


    return (
        <section id="booking">
            {showModal && modalData && <BookingModal closeFunc={closeModal} afterFunc={afterFunc} quest={modalData} />}
            <div className="container quest-page">
                <h2>Бронировать</h2>
                <div className="booking">
                    {schedule}
                </div>
                <div className="arrows">
                    <i onClick={() => changeDate(false)} className="fas fa-caret-square-left"></i>
                    <i onClick={() => changeDate(true)} className="fas fa-caret-square-right"></i>
                </div>
            </div>
        </section>
    )


}




const mapDispatchToProps = {
}

const mapStateToProps = (state) => ({
    contacts: state.contacts
})


export default connect(mapStateToProps, mapDispatchToProps)(QuestPage)
