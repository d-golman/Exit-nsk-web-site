import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import './celebrations.sass'

const Celebrations = ({ celebs }) => {


    const CelebrationCard = ({ props }) => {
        const { id, name, image } = props
        return (
            <Link to={`/celebs/${id}`} className="celeb-card" style={{ backgroundImage: `url(${image})` }}>
                <div className="celeb-card-info">
                    <div className="name">
                        <h3>{name}</h3>
                    </div>
                    <div className="info">
                    </div>
                    <div className="more">
                        <p className="btn btn-red">Подробнее</p>
                    </div>

                </div>
            </Link>
        )

    }

    return (
        <section id='celebrations'>
            <div className="container">
                <h2>"Выход" - это не только классные квесты, но и хорошее место для вашего праздника!</h2>
                <div className='celebs-block'>
                    {celebs && celebs.map((celeb, index) => {
                        return <CelebrationCard key={index} props={celeb} />
                    })}
                </div>
                <p>
                    «Выход" - не только квеструмы, но и полный комплекс услуг по проведению праздников. Гостей праздника ждет прохождение увлекательных квестов, которые помогут сплотить друзей, родственников или коллег. Полное погружение в сюжет квеста, решение сложных интересных головоломок, совместная работа команды на единый результат – все это позволит получить невероятный заряд положительных эмоций, сплотить гостей праздника и сделать его незабываемым.
                    <br />
                    В нашей гостевой зоне возможно организовать праздник по любому поводу – детский или взрослый день рождения, Новый год, корпоратив или профессиональный праздник, тематическая вечеринка и многое другое. Уютная гостевая зона готова разместить компанию из 6–25 человек. Помещение имеет всю необходимую мебель и оборудование для проведения вечеринок, индивидуально украшается к каждому мероприятию.
                </p>
            </div>

        </section>
    )
}

const mapStateToProps = (state) => ({
    celebs: state.celebs
})
const mapDispatchToProps = {}
export default connect(mapStateToProps, mapDispatchToProps)(Celebrations)
