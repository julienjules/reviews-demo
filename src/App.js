import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Button, Container, Header, Rating, Divider, Form, Item, Statistic } from 'semantic-ui-react';
import './App.css';

function App() {

  const style = {
    container1: {
      marginTop: '3em',
      marginBottom: '2em',
      textAlign: 'center',
    },
    container2: {
      marginTop: '1em',
      marginBottom: '2em',
      textAlign: 'center',
    }
  }

  return (
    <div className="App">
      <Container style={style.container1}>
        <Header as='h1' content='Reviews' />
      </Container>
      <Container textAlign='center' style={style.container2}>
        <Rating maxRating={5} defaultRating={0} icon='star' size='massive' className="centered" />
      </Container>
      <Container>
        <Form>
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
        <Divider />
      </Container>

      <Container style={style.container1}>
        <Statistic>
          <Statistic.Value>122</Statistic.Value>
          <Statistic.Label>Avis</Statistic.Label>
        </Statistic>
      </Container>
      <Container style={style.container1}>
        <Statistic>
          <Statistic.Value>4.75/5</Statistic.Value>
          <Rating maxRating={5} defaultRating={4} icon='star' size='massive' className="centered" />
        </Statistic>
        <Divider />
      </Container>

      <Container style={style.container1}>
        <Header as='h1' content='Lastest reviews' textAlign='center' />
      </Container>

      <Container>
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
      </Container>
    </div>
  );
}

export default App;
