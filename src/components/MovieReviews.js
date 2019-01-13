// Code MovieReviews Here
import React from 'react'

const MovieReviews = ({reviews}) =>
<div className="review-list">
  {reviews.map(review =><div className="review"><p>{review.byline}: {review.headline}</p>
    <p><a href={review.link.url}>{review.link.suggested_link_text}</a></p>
  </div>)}
</div>

export default MovieReviews