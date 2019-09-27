import React, { Component } from 'react';
import { Button, Form, Rating } from 'semantic-ui-react';

class SubmitReview extends Component {

    render() {
        return (
            <Form>
                <Form.Field>
                    <label>Note</label>
                    <Rating maxRating={5} defaultRating={0} icon='star' size='massive' className="centered" />
                </Form.Field>
                <Form.Field>
                    <label>First Name</label>
                    <input placeholder='First Name' />
                </Form.Field>
                <Form.Field>
                    <label>Last Name</label>
                    <input placeholder='Last Name' />
                </Form.Field>
                <Form.TextArea label='About' placeholder='Tell us more about you...' />
                <Button type='submit'>Submit</Button>
            </Form>
        )
    }
}

export default SubmitReview;

