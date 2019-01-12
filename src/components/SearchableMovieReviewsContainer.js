import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
                 + `api-key=${NYT_API_KEY}&query=`
// https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=<search-term>

// Code SearchableMovieReviewsContainer Here ok

class SearchableMovieReviewsContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      reviews: [],
      searchTerm: ''
    }
  }

  handleSubmit = event => {
    event.preventDefault()

    fetch(URL.concat(this.state.searchTerm))
      .then(r => r.json())
      .then(d => this.setState({reviews: d.results}))
  }

  handleInput = event => this.setState({ searchTerm: event.target.value });


  render() {
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={ this.handleSubmit }>
          <label htmlFor='search-input'>Search Movie Reviews </label>
          <input onChange={ this.handleInput } />
          <button type="submit">Submit</button>
        </form>
        { this.state.reviews.length > 0 && <h2>Movie Review By Search:</h2> }
        <MovieReviews reviews={ this.state.reviews } />
      </div>
    )
  }
}

export default SearchableMovieReviewsContainer
