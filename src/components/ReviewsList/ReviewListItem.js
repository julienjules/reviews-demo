import React, { Component } from 'react';
import { Rating, Item } from 'semantic-ui-react';

class ReviewsListItem extends Component {

    render() {
        const {firstName, lastName, rating, testimonial} = this.props.data;
        return (
            <Item>
                <Item.Image size='tiny' src='https://dummyimage.com/48' />
                <Item.Content>
                    <Item.Header as='a'>{firstName} {lastName}</Item.Header>
                    <Item.Description>
                        <Rating maxRating={5} rating={rating} icon='star' className="centered" />
                        <Item.Meta>“{testimonial}”</Item.Meta>
                    </Item.Description>
                </Item.Content>
            </Item>
        )
    }
}

export default ReviewsListItem;

