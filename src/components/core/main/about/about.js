import React from 'react'
import './about.sass'

const About = () => {

    const scrollTo = (id) => {
        window.scrollTo(0,
            document.querySelector(id).offsetTop - 100
        )
    }

    const aboutText =
        <>
            <h2>Реалити-Квест «выХод» - развлечение нового поколения!</h2>
            <p><b>Реалити-квест</b> – это игра, в которую вы попадаете на строго отведённое время. За это время вам необходимо решить ряд задач, найти выход, выбраться, спасти мир или выжить самим.</p>
            <p><b>Квесты «Выход» в Новосибирске</b> – очень популярный вид развлечений, здесь вы можете получить заряд ярких эмоций и почувствовать себя героями различных событий.</p>
            <p><b>Полное погружение в историю.</b> Вам необходимо ненадолго забыть про реальность и представить себя героем выбранной истории, а таинственная атмосфера, качественные спецэффекты и звуковое сопровождение вам в этом помогут. Если вы до сих пор решаете, стоит ли прийти на наши квесты в реальности - <span onClick={() => scrollTo('#reviews')}>прочитайте отзывы наших посетителей.</span></p>
        </>

    return (
        <section id='about'>
            <div className="container">
                {aboutText}
            </div>
        </section>
    )
}

export default About
