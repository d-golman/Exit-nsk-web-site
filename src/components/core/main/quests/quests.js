import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Error from '../../../errorBoundries/error'
import './quests.sass'

const Quests = ({ quests }) => {

    const peopleRender = (count, className) => {
        const people = []
        if (count > 5) {
            return (
                <>
                    <i className={`far fa-user ${className}`}></i>
                    <span>...</span>
                    <i className={`far fa-user ${className}`}></i>
                </>
            )
        }
        for (let i = 0; i < count; i++) {
            people.push(
                <i key={i} className={`far fa-user ${className}`}></i>
            )
        }
        return people
    }

    const QuestCard = (quest) => {
        const { id, name, length, people, images } = quest.quest
        return (
            <Link to={`/quests/${id}`} className="quest-card" style={{ backgroundImage: `url(${images.preview})` }}>
                <div className="quest-card-info">
                    <div className="name">
                        <h3>{name}</h3>
                    </div>
                    <div className="info">
                        <div className="people">
                            <i className={`far fa-user man`}></i>
                            <p>{people[0]} - {people[1]} игрока</p>
                        </div>
                        <div className="length">
                            <i className="far fa-clock"></i>
                            <p>{length} мин</p>
                        </div>
                    </div>
                    <div className="more">
                        <p className="btn btn-red">Подробнее</p>
                    </div>

                </div>
            </Link>
        )

    }


    return (
        <Error>
            <section id='quests'>
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
    quests: state.quests
})


export default connect(mapStateToProps, mapDispatchToProps)(Quests)
