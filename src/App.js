import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Container, Divider, Header } from 'semantic-ui-react';
import './App.css';
import ReviewsList from './components/ReviewsList/ReviewsList';
import ReviewsStatistics from './components/ReviewsStatistics/ReviewsStatistics';
import SubmitReview from './components/SubmitReview/SubmitReview';

function App() {

  const style = {
    container: {
      marginTop: '3em',
      marginBottom: '2em',
    }
  }

  return (
    <Container style={style.container}>
      <Header as='h1' content='Hey submit your review!' textAlign='center' />
      <SubmitReview />
      <Divider />
      <ReviewsStatistics />
      <Divider />
      <Header as='h1' content='Lastest reviews' textAlign='center' />
      <ReviewsList />
    </Container>
  );
}

export default App;
