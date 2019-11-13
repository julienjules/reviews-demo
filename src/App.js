import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Container, Divider, Header } from 'semantic-ui-react';
import { withFirebase } from './api/Firebase';
import './App.css';
import ReviewsList from './components/ReviewsList/ReviewsList';
import ReviewsStatistics from './components/ReviewsStatistics/ReviewsStatistics';
import SubmitReview from './components/SubmitReview/SubmitReview';

class App extends Component {

  state = {
    nb_reviews: 0,
    rating: "0",
    reviews: [{ firstName: "Julien", lastName: "Robidet", testimonial: "Hello", rating: 5, }]
  }

  constructor(props) {
    super(props)
  }

  handleFormSubmit = (obj) => {
    console.log(obj)
  }

  render() {
    const style = {
      container: {
        marginTop: '3em',
        marginBottom: '2em',
      }
    }

    const { nb_reviews, rating, reviews, statistics } = this.state

    return (
      <Container style={style.container} >
        <Header as='h1' content='Hey submit your review!' textAlign='center' />
        <SubmitReview onFormSubmit={this.handleFormSubmit} />
        <Divider />
        {statistics &&
          <div>
            <ReviewsStatistics nb_reviews={nb_reviews} rating={rating} />
            <Divider />
          </div>
        }
        <Header as='h1' content='Latest reviews' textAlign='center' />
        <ReviewsList items={reviews} />
      </Container>
    )
  }
}

export default withFirebase(App);
