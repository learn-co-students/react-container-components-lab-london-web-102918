import React, { Component } from 'react'
import 'isomorphic-fetch'
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0'
const URL =
  'https://api.nytimes.com/svc/movies/v2/reviews/search.json?' +
  `api-key=${NYT_API_KEY}`

// Code SearchableMovieReviewsContainer Here

class SearchableMovieReviewsContainer extends Component {
  constructor() {
    super()
    this.state = {
      reviews: [],
      searchTerm: '',
    }
  }

  handleFormSubmit = e => {
    e.preventDefault()
    fetch(`${URL}&query=${this.state.searchTerm}`)
      .then(response => response.json())
      .then(searchData => {
        this.setState({ reviews: searchData.results })
      })
  }
  handleChange = e => {
    this.setState({
      searchTerm: e.target.value,
    })
  }
  render() {
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleFormSubmit}>
          <input type="text" onChange={this.handleChange} />
          <button>Search</button>
        </form>
        {this.state.reviews.length > 0 && <h2> Search Results </h2>}
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}

export default SearchableMovieReviewsContainer
