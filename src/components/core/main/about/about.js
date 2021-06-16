import React, { useState } from 'react'
import './about.sass'

const About = () => {

    const [show, setShow] = useState(false)

    const scrollTo = (id) => {
        window.scrollTo(0,
            document.querySelector(id).offsetTop - 100
        )
    }

    const aboutText =
        <div className='aboutText'>
            <p><b>Реалити-квест</b> – это игра, в которую вы попадаете на строго отведённое время. За это время вам необходимо решить ряд задач, найти выход, выбраться, спасти мир или выжить самим.</p>
            <p><b>Квесты «Выход» в Новосибирске</b> – очень популярный вид развлечений, здесь вы можете получить заряд ярких эмоций и почувствовать себя героями различных событий.</p>
            <p><b>Полное погружение в историю.</b> Вам необходимо ненадолго забыть про реальность и представить себя героем выбранной истории, а таинственная атмосфера, качественные спецэффекты и звуковое сопровождение вам в этом помогут. Если вы до сих пор решаете, стоит ли прийти на наши квесты в реальности - <span onClick={() => scrollTo('#reviews')}>прочитайте отзывы наших посетителей.</span></p>
        </div>

    const showToggle =
        <button onClick={() => {
            document.querySelector('.aboutText').style.maxHeight = !show ? document.querySelector('.aboutText').scrollHeight + 'px' : null
            setShow(show => !show)
        }} className='btn btn-blue'>
            Подробнее о квестах
        </button>

    return (
        <section id='about'>
            <div className="container">
                <h2>Квесты в реальности «выХод»</h2>
                {showToggle}
                {aboutText}
            </div>
        </section>
    )
}

export default About
