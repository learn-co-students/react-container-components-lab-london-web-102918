// Code MovieReviews Here
import React, { Component } from 'react'

const MovieReviews = props => {
  return (
    <div className="review-list">
      {props.reviews.map(review => (
        <div className="review">
          <h2>{review.display_title}</h2>
          <p>
            {review.byline}: <a href={review.link.url}>{review.headline}</a>
          </p>
        </div>
      ))}
    </div>
  )
}

export default MovieReviews
