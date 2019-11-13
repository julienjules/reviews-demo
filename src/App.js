import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Container, Divider, Header } from 'semantic-ui-react';
import { withFirebase } from './api/Firebase';
import './App.css';
import ReviewsList from './components/ReviewsList/ReviewsList';
import ReviewsStatistics from './components/ReviewsStatistics/ReviewsStatistics';
import SubmitReview from './components/SubmitReview/SubmitReview';

class App extends Component {

  state = { nb_reviews: 0, rating: "0", reviews: [], statistics: false }

  constructor(props) {
    super(props)

    this.props.firebase.statistics().onSnapshot((doc) => {
      const { nb_reviews, rating } = doc.data()
      this.setState({ nb_reviews: nb_reviews, rating: rating })
    });

    this.props.firebase.reviews().orderBy('date', 'desc').onSnapshot((querySnapshot) => {
      var reviews = [];
      querySnapshot.forEach(function (doc) {
        reviews.push(doc.data());
      });
      this.setState({ reviews: reviews })
    })

    this.props.firebase.remoteConfig.fetchAndActivate()
      .then(() => {
        this.setState({ statistics: this.props.firebase.remoteConfig.getValue("statistics").asBoolean() })
      })
      .catch((error) => {
        console.log(error)
      })

  }

  handleFormSubmit = (obj) => {
    this.props.firebase.addReview(obj)
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
