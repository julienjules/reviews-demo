import React, { Component } from 'react';
import { Button, Form, Rating } from 'semantic-ui-react';

class SubmitReview extends Component {

    state = {
        firstName: "",
        lastName: "",
        testimonial: "",
        rating: 0, 
        date: null
    }

    onFormSubmit = (event) => {
        event.preventDefault()
        const obj = this.state
        obj.date = new Date()
        this.setState({
            firstName: "",
            lastName: "",
            testimonial: "",
            rating: 0, 
            date: null
        })
        this.props.onFormSubmit(obj)
    }

    render() {
        return (
            <Form onSubmit={this.onFormSubmit}>
                <Form.Field>
                    <label>Note</label>
                    <Rating
                        maxRating={5}
                        rating={this.state.rating}
                        icon='star'
                        size='massive'
                        className="centered"
                        onRate={(e, { rating }) => this.setState({ rating: rating })} 
                        />
                </Form.Field>
                <Form.Field>
                    <label>First Name</label>
                    <input
                        placeholder='First Name'
                        value={this.state.firstName}
                        onChange={e => this.setState({ firstName: e.target.value })} 
                        required
                        />
                </Form.Field>
                <Form.Field>
                    <label>Last Name</label>
                    <input
                        placeholder='Last Name'
                        value={this.state.lastName}
                        onChange={e => this.setState({ lastName: e.target.value })} 
                        required
                        />
                </Form.Field>
                <Form.TextArea
                    label='About'
                    placeholder='Tell us more about you...'
                    value={this.state.testimonial}
                    onChange={e => this.setState({ testimonial: e.target.value })} 
                    required
                    />
                <Button type='submit'>Submit</Button>
            </Form>
        )
    }
}

export default SubmitReview;

