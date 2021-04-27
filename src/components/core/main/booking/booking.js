import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { isMobile } from '../../../services/services'
import Error from '../../errorBoundries/error'
import BookingModal from '../../bookingModal/bookingModal'
import './booking.sass'



function Booking({ quests, afterFunc }) {

    return (
        <Error>
            <section id="booking">
                <h2>Расписание</h2>
                <div className="container">
                    <Schedule quests={quests} afterFunc={afterFunc} />
                </div>
            </section>
        </Error>
    )
}

const Schedule = ({ quests, afterFunc }) => {
    const times = {}

    const [date, setDate] = useState(new Date().toISOString().substring(0, 10))
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


    quests.forEach(quest => {
        times[`${quest.id}`] = {
            'name': quest.name,
            'times': quest.times
        }
    }

    )

    const schedule = []

    const ScheduleItems = (quest) => {
        const { id, name, times } = quest
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


    for (const id in times) {
        schedule.push(
            <div key={id} className="schedule-row">
                <h3>{times[id]['name']}</h3>
                <ScheduleItems id={id} name={times[id]['name']} times={times[id]['times'][date]} />
            </div>
        )

    }

    const today = new Date()
    const month = new Date()
    month.setMonth(month.getMonth() + 1)
    return (

        <div className="booking">
            {showModal && modalData && <BookingModal closeFunc={closeModal} afterFunc={afterFunc} quest={modalData} />}

            <input className='date-input'
                type="date" name="date" id="date"
                min={today.toISOString().substring(0, 10)}
                max={month.toISOString().substring(0, 10)}
                defaultValue={today.toISOString().substring(0, 10)}
                onInput={(e) => setDate(e.target.value)} />
            {schedule}
        </div>
    )
}





const mapDispatchToProps = {
}

const mapStateToProps = (state) => ({
    quests: state.quests
})


export default connect(mapStateToProps, mapDispatchToProps)(Booking)
