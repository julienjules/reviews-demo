import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Container, Divider, Header } from 'semantic-ui-react';
import './App.css';
import ReviewsList from './components/ReviewsList/ReviewsList';
import ReviewsStatistics from './components/ReviewsStatistics/ReviewsStatistics';
import SubmitReview from './components/SubmitReview/SubmitReview';
import { withFirebase } from './api/Firebase';

class App extends Component {

  state = { nb_reviews: 0, rating:"0" }

  constructor(props) {
    super(props)

    this.props.firebase.score().onSnapshot((doc) => {
      console.log(doc.data())
      const {nb_reviews, rating} = doc.data()
      this.setState({ nb_reviews: nb_reviews, rating: rating })
    });

  }

  handleFormSubmit = (obj) => {
    console.log("handleFormSubmit")
    console.log(obj)
    this.props.firebase.addReview(obj)
  }

  render() {

    const style = {
      container: {
        marginTop: '3em',
        marginBottom: '2em',
      }
    }

    const { nb_reviews, rating } = this.state

    return (
      <Container style={style.container} >
        <Header as='h1' content='Hey submit your review!' textAlign='center' />
        <SubmitReview onFormSubmit={this.handleFormSubmit} />
        <Divider />
        <ReviewsStatistics nb_reviews={nb_reviews} rating={rating} />
        <Divider />
        <Header as='h1' content='Lastest reviews' textAlign='center' />
        <ReviewsList />
      </Container>
    )
  }
}

export default withFirebase(App);
