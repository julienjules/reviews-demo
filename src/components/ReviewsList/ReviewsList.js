import React, { Component } from 'react';
import { Rating, Item } from 'semantic-ui-react';

class ReviewsList extends Component {

    render() {
        return (
            <Item.Group>
                <Item>
                    <Item.Image size='tiny' src='https://dummyimage.com/48' />

                    <Item.Content>
                        <Item.Header as='a'>John Doe</Item.Header>
                        <Item.Description>
                            <Rating maxRating={5} defaultRating={4} icon='star' className="centered" />
                            <Item.Meta>“Description”</Item.Meta>
                        </Item.Description>
                    </Item.Content>
                </Item>
                <Item>
                    <Item.Image size='tiny' src='https://dummyimage.com/48' />

                    <Item.Content>
                        <Item.Header as='a'>John Doe</Item.Header>
                        <Item.Description>
                            <Rating maxRating={5} defaultRating={4} icon='star' className="centered" />
                            <Item.Meta>“Description”</Item.Meta>
                        </Item.Description>
                    </Item.Content>
                </Item>
            </Item.Group>
        )
    }
}

export default ReviewsList;

