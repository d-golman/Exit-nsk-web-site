import React, { useState, useEffect } from 'react'
import { getReviews } from '../../services/rest'
import './reviews.sass'

const Reviews = ({ id }) => {

    const [reviews, setReviews] = useState([])
    const [number, setNumber] = useState(0)

    useEffect(() => {
        getReviews(id || false)
            .then(res => setReviews(res))
    }, [id])

    const reviewBlock = (index, item) => {
        const { name_room, people_name, review } = item
        return <div key={index} className="review-block">
            <p className='review-block-name'>{people_name}</p>
            <p className='review-block-quest'>Квест - {name_room}</p>
            <p className='review-block-review'>{review}</p>
        </div>
    }


    return (
        <section id="reviews">
            <div className="container">
                <h2>Отзывы</h2>
                {reviews &&
                    <div className="reviews-blocks">
                        {reviews.slice(number, number + 3).map((item, index) => {
                            return reviewBlock(index, item)
                        })
                        }
                    </div>}
                <div className="arrows">
                    <i onClick={() => { if (number > 0) setNumber(number - 3) }} className={`fas fa-caret-square-left ${number === 0 && 'disable'}`} ></i>
                    <i onClick={() => { if (number < reviews.length - 3) setNumber(number + 3) }} className={`fas fa-caret-square-right ${number >= reviews.length - 3 && 'disable'}`}></i>
                </div>
            </div>
        </section>
    )
}

export default Reviews
