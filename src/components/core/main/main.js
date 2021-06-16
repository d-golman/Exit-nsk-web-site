import React, { useEffect, useState } from 'react'
import Base from '../base/base'
import Booking from './booking/booking'
import Celebrations from './celebrations/celebrations'
import Contacts from './contacts/contacts'
import Reviews from '../reviews/reviews'
import Quests from './quests/quests'
import Numscroll from './numscroll/numscroll'
import Header from './header'
import About from './about/about'
import { loadQuests, loadCelebs } from '../../../redux/actions'
import { getQuests, getCelebs } from '../../services/rest'
import { connect } from 'react-redux'
import './main.sass'
import Error from '../../errorBoundries/error'
import ParticlesComponent from '../../particles/particlesComponent'

const Main = ({ loadQuests, loadCelebs }) => {

    useEffect(() => {
        getQuests()
            .then(res => loadQuests(res))
        getCelebs()
            .then(res => loadCelebs(res))
    }, [loadQuests, loadCelebs])

    // const afterFunc = () => {
    //     getQuests()
    //         .then(res => loadQuests(res))
    // }




    return (
        <Base>
            <ParticlesComponent />
            <Header />
            <About />
            <Error>
                <Quests />
                <Celebrations />
                {/* <Booking afterFunc={afterFunc} /> */}
                <Reviews />
                <Numscroll />
            </Error>
            <Contacts />
        </Base>
    )
}

const mapDispatchToProps = {
    loadQuests,
    loadCelebs
}

const mapStateToProps = () => ({
})


export default connect(mapStateToProps, mapDispatchToProps)(Main)
