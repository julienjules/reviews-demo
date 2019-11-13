import React, { Component } from 'react';
import { Item } from 'semantic-ui-react';
import ReviewsListItem from '../ReviewsList/ReviewListItem';

class ReviewsList extends Component {

    render() {
        return (
            <Item.Group>
            {
                this.props.items.map(function(item, index) {
                    return <ReviewsListItem key={index} data={item} />
                })
            }
            </Item.Group>
        )
    }
}

export default ReviewsList;

