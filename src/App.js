import React from 'react';
import {
  Grid,
  Container,
  Image,
  Menu,
  Segment,
  Header
} from "semantic-ui-react";

function App() {

  let activeItem = 'puppies';

  const handleItemClick = () => {
    console.log("Menu item clicked");
  }

  return (
    <div style={{backgroundColor: '#b9f6ca' }}>
      {/* Nav */}
      <Segment inverted style={{ borderRadius: 0 }}>
        <Menu inverted pointing secondary>

          {/* Header */}
          <Header
            textAlign="center"
            as="h1"
            style={{color: "#fff"}}
          >
          <Image circular src="/images/french poodle.png" /> Puppy Hotel
          </Header>

          <Menu.Menu position='right'>
            <Menu.Item
              name='Puppies'
              active={activeItem === 'puppies'}
              onClick={handleItemClick}
            />
            <Menu.Item
              name='Rooms'
              active={activeItem === 'rooms'}
              onClick={handleItemClick}
            />

          </Menu.Menu>

        </Menu>
      </Segment>

      {/* Body */}
      <Grid padded columns={2} style={{ minHeight: '90vh', backgoundColor: '#ffcdd2' }}>
        {/* List */}
        <Grid.Column width={10}>
          <Segment raised>
            List
          </Segment>

        </Grid.Column>
        {/* Edit Item */}
        <Grid.Column width={6}>
        <Segment raised>
            Edit
          </Segment>
        </Grid.Column>
      </Grid>
    </div>
  );
}

export default App;
