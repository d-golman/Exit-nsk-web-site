import React, { useEffect, useState } from 'react'
import { HashLink as Link } from 'react-router-hash-link';
import { isMobile } from '../../../services/services'
import './navbar.sass'
const Navbar = ({ contacts }) => {
    const { vkontakte, instagram, phone } = contacts

    const [showPhone, setShowPhone] = useState(false)
    const [navbarClass, setnavbarClass] = useState('')
    const [mobileMenuClass, setMobileMenuClass] = useState('')

    // useEffect(() => {
    //     if (window.location.pathname !== '/') {
    //         setnavbarClass('darken')
    //     }
    //     else {
    //         window.addEventListener('scroll', changeClass)
    //     }
    //     return () => window.removeEventListener('scroll', changeClass)

    // }, [])

    const changeClass = () => {
        if (window.scrollY > 30) {
            setnavbarClass('darken')
        }
        else {
            setnavbarClass('')
        }
    }


    const togglePhone = (e) => {
        if (!isMobile.any()) {
            setShowPhone(prev => !prev)
        }
    }

    const togleMobileMenu = (e) => {
        if (mobileMenuClass === '') {
            setMobileMenuClass('shown')
        }
        else {
            setMobileMenuClass('')
        }
    }

    return (
        <nav className={`navbar darken ${navbarClass}`}>
            <div className="container">
                <Link className='nav-logo' to={'/'}> <img src={`${process.env.PUBLIC_URL}/img/logo.png`} alt="выХод" /> </Link>
                <div className='mobile-menu' onClick={togleMobileMenu}>
                    <div className='mobile-menu-line'></div>
                </div>
                <ul className={`contacts ${mobileMenuClass}`}>
                    <div className='links-1'>

                        <li><Link to={'/#quests'}>Квесты</Link></li>
                        <li><Link to={'/#celebrations'}>Праздники</Link></li>
                    </div>
                    <div className="links-2">
                        <li><a className='a-btn a-btn-white' href={instagram} target='blank'><i className="fab fa-instagram"></i></a></li>
                        <li><a className='a-btn a-btn-white' href={vkontakte} target='blank'><i className="fab fa-vk"></i></a></li>

                        {
                            isMobile.any() ? <li className='a-btn a-btn-white'><a href={`tel:${phone}`}><i className="fas fa-phone-square"></i></a></li>
                                :
                                <li><a className='a-btn a-btn-white' href={`tel:${phone}`}>{phone}</a></li>
                        }
                    </div>
                </ul>
            </div>
        </nav >
    )
}

export default Navbar
