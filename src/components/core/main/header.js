import React from 'react'

const Header = () => {

    const scrollTo = (id) => {
        window.scrollTo(0,
            document.querySelector(id).offsetTop - 100
        )
    }
    return (<></>)
    return (
        <header className="main-header">
            <div className="background" />
            <div className="header-data">
                <h1>ВЫ<span>Х</span>ОД</h1>
                <p>Яркая легенда, локация с интересным антуражем и загадками на логику. Проверьте себя и друзей и попробуйте выбраться из команты за час.</p>
            </div>
            <div className="header-links">
                <div onClick={() => scrollTo('#quests')} className="item">
                    <img src={`${process.env.PUBLIC_URL}/img/location.png`} alt="" />
                    <p>Квесты</p>
                </div>
                {/* <a href='#' className="item">
                 <img src={`${process.env.PUBLIC_URL}/img/gift-card.png`} alt=""/>
                 <p>Сертификаты</p>
            </a> */}
                <div onClick={() => scrollTo('#booking')} className="item">
                    <img src={`${process.env.PUBLIC_URL}/img/calendar.png`} alt="" />
                    <p>Бронирование</p>
                </div>
            </div>
        </header>
    )
}

export default Header
