import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { isMobile } from '../../../services/services'
import './navbar.sass'
const Navbar = ({ contacts }) => {
    const { vkontakte, instagram, phone } = contacts

    const [showPhone, setShowPhone] = useState(false)
    const [navbarClass, setnavbarClass] = useState('')
    const [mobileMenuClass, setMobileMenuClass] = useState('')

    useEffect(() => {
        if (window.location.pathname !== '/') {
            setnavbarClass('darken')
        }
        else {
            window.addEventListener('scroll', changeClass)
        }
        return () => window.removeEventListener('scroll', changeClass)

    }, [])

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
            e.preventDefault()
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
        <nav className={`navbar ${navbarClass}`}>
            <div className="container">
                <Link className='nav-logo' to={'/'}> <img src={`${process.env.PUBLIC_URL}/img/logo.png`} alt="выХод" /> </Link>
                <ul className={`contacts ${mobileMenuClass}`}>
                    {showPhone && <li><p>{phone}</p></li>}
                    <li><a className='a-btn a-btn-white' onClick={togglePhone} href={`tel:${phone}`}><i className="fas fa-phone-square"></i></a></li>
                    <li><a className='a-btn a-btn-white' href={instagram} target='blank'><i className="fab fa-instagram"></i></a></li>
                    <li><a className='a-btn a-btn-white' href={vkontakte} target='blank'><i className="fab fa-vk"></i></a></li>
                </ul>
                <div className='mobile-menu' onClick={togleMobileMenu}>
                    <div className='mobile-menu-line'></div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
