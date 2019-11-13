import React, { Component } from 'react';
import { Container, Statistic, Rating } from 'semantic-ui-react';

class ReviewsStatistics extends Component {

    style = {
        container: {
            marginTop: '3em',
            marginBottom: '2em',
            textAlign: 'center'
        }
    }

    render() {
        const {nb_reviews, rating} = this.props;
        return (
            <Container style={this.style.container}>
                <Statistic>
                    <Statistic.Value>{nb_reviews}</Statistic.Value>
                    <Statistic.Label>Reviews</Statistic.Label>
                </Statistic>
                <br />
                <Statistic>
                    <Statistic.Value>{rating}/5</Statistic.Value>
                    <Rating maxRating={5} rating={rating} icon='star' size='massive' className="centered" />
                </Statistic>
            </Container>
        )
    }
}

export default ReviewsStatistics;

