import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Error from '../../errorBoundries/error'
import './quests.sass'

const Quests = ({ quests, contacts }) => {

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

    const QuestCard = (quest) => {
        const { id, name, length, people, images } = quest.quest
        const { phone, address } = contacts
        return (
            <Link to={`/quests/${id}`} className="quest-card" style={{ backgroundImage: `url(${images.preview})` }}>
                <div className="quest-card-info">
                    <div className="name">
                        <h3>{name}</h3>
                    </div>
                    <div className="contacts">
                        <p className="adress">{address}</p>
                        <p className="phone">{phone}</p>
                    </div>
                    <div className="info">
                        <div className="people">
                            {peopleRender(people[0], 'man man-white')}
                            {peopleRender(people[1] - people[0], 'man man-grey')}
                            <p>{people[0]} - {people[1]} человека</p>
                        </div>
                        <div className="length">
                            <i className="far fa-clock"></i>
                            <p>{length} мин</p>
                        </div>
                    </div>
                </div>
            </Link>
        )

    }


    return (
        <Error>
            <section id='quests'>
                <h2>Квесты</h2>
                <div className="container">
                    {quests.map((quest, index) => <QuestCard key={index} quest={quest} />)}
                </div>
            </section>
        </Error>
    )
}

const mapDispatchToProps = {
}

const mapStateToProps = (state) => ({
    quests: state.quests,
    contacts: state.contacts
})


export default connect(mapStateToProps, mapDispatchToProps)(Quests)
