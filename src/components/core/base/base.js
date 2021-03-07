import React, { useEffect } from 'react'
import Navbar from './navbar/navbar'
import Footer from './footer/footer'
import { loadContacts } from '../../../redux/actions'
import './base.sass'
import { connect } from 'react-redux'
import { getContacts } from '../../services/rest'
const Base = ({ loadContacts, contacts, children }) => {

    useEffect(() => {
        getContacts()
            .then(res => loadContacts(res))
    }, [loadContacts])

    return (
        <div className="base">
            <div></div>
            <Navbar contacts={contacts} />
            {children}
            <Footer contacts={contacts} />
        </div>
    )
}

const mapStateToProps = (state) => ({
    contacts: state.contacts
})

const mapDispatchToProps = {
    loadContacts,
}

export default connect(mapStateToProps, mapDispatchToProps)(Base)
