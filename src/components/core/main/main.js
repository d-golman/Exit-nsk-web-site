import React, { useEffect } from 'react'
import Base from '../base/base'
import Booking from './booking/booking'
import Contacts from './contacts/contacts'
import Reviews from '../reviews/reviews'
import Quests from './quests/quests'
import Header from './header'
import About from './about/about'
import { loadQuests } from '../../../redux/actions'
import { getQuests } from '../../services/rest'
import { connect } from 'react-redux'
import './main.sass'
import Error from '../errorBoundries/error'
const Main = ({ loadQuests }) => {

    useEffect(() => {
        getQuests()
            .then(res => loadQuests(res))
    }, [loadQuests])

    const afterFunc = () => {
        getQuests()
            .then(res => loadQuests(res))
    }


    return (
        <Base>
            <Header />
            <About />
            <Error>
                <Quests />
                <Booking afterFunc={afterFunc} />
                <Reviews />
            </Error>
            <Contacts />
        </Base>
    )
}

const mapDispatchToProps = {
    loadQuests
}

const mapStateToProps = () => ({
})


export default connect(mapStateToProps, mapDispatchToProps)(Main)
