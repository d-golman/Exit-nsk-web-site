import React from 'react'

import './footer.sass'
const Footer = ({ contacts }) => {
    const { vkontakte, instagram, phone } = contacts
    return (
        <footer>
            <div className="container">
                <div className="contacts">
                    <a className='a-btn a-btn-white' href={instagram}><i className="fab fa-instagram"></i></a>
                    <a className='a-btn a-btn-white' href={vkontakte}><i className="fab fa-vk"></i></a>
                </div>
                <a href={`tel:${phone}`}>{phone}</a>
                <p>© Copyright 2020 выХод</p>
                <p onClick={() => { window.scrollTo(0, 0) }} className="to-header a-btn a-btn-white"><i className="fas fa-arrow-up"></i></p>
            </div>
        </footer>
    )
}

export default Footer
