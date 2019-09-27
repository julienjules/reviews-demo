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
        return (
            <Container style={this.style.container}>
                <Statistic>
                    <Statistic.Value>122</Statistic.Value>
                    <Statistic.Label>Avis</Statistic.Label>
                </Statistic>
                <br />
                <Statistic>
                    <Statistic.Value>4.75/5</Statistic.Value>
                    <Rating maxRating={5} defaultRating={4} icon='star' size='massive' className="centered" />
                </Statistic>
            </Container>
        )
    }
}

export default ReviewsStatistics;

