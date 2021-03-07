import React from 'react'
import { connect } from 'react-redux'
import './contacts.sass'
const Contacts = ({ contacts }) => {
    const { phone, address } = contacts
    return (
        <section id='contacts'>
            <h2>Контакты</h2>
            <div className="container">
                <div className="info">
                    <p>Адрес: {address}</p>
                    <p>Телефон: {phone}</p>
                </div>
                <div className="map">
                    <iframe title='yandex-map' src="https://yandex.ru/map-widget/v1/?um=constructor%3A2c0da84b870453e6e78f9997e986b2914cc18155e5706ad24641564275523d60&amp;source=constructor" width="100%" height="100%" frameBorder="0"></iframe>                </div>
            </div>
        </section>
    )
}

const mapStateToProps = (state) => ({
    contacts: state.contacts
})

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(Contacts)