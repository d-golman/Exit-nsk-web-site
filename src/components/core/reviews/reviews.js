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

    const ReviewBlock = ({ item }) => {
        const { name_room, people_name, rating, image_review, review } = item
        const stars = []
        for (let i = 0; i < +rating; i++) {
            stars.push(<i key={i + Math.random()} className="fas fa-star"></i>)
        }
        for (let i = 0; i < 5 - rating; i++) {
            stars.push(<i key={i + Math.random()} className="far fa-star"></i>)
        }
        return <div className="review-block">
            <div className='data'>
                <img src={`${image_review}`} alt="" />
                <div className='data-info'>
                    <p className='review-block-name'>{people_name}</p>
                    <p className='review-block-quest'>{name_room}</p>
                    <p className='review-block-rating'>{stars}</p>
                </div>
            </div>
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
                            return <ReviewBlock key={index} item={item} />
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
