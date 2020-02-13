import React, { useState } from 'react';
import {
  Grid,
  Image,
  Menu,
  Segment,
  Header
} from "semantic-ui-react";

import PuppyList from './Components/PuppyList';
import EditPuppy from './Components/EditPuppy';
import AddPuppy from './Components/AddPuppy';

const DUMMY_DATA = [
  {
    id: 1,
    name: 'Rover',
    breed: 'Corgi',
    age: 5
  },
  {
    id: 2,
    name: 'Bubbles',
    breed: 'golden-retriever',
    age: 2
  },
  {
    id: 3,
    name: 'Sonic',
    breed: 'bulldog',
    age: 3
  },
  {
    id: 4,
    name: 'Rufus',
    breed: 'greyhound',
    age: 1
  },
  {
    id: 5,
    name: 'Acorn',
    breed: 'chihuahua',
    age: 4.5
  },
];


function App() {

  // Menu page selector
  let activeItem = 'puppies';

  // TODO: Initialize the list of puppies

  return (
    <div style={{ backgroundColor: '#79dce8' }}>
      {/* Nav */}
      <Segment inverted style={{ borderRadius: 0 }}>
        <Menu inverted pointing secondary>

          {/* Header */}
          <Header
            textAlign="center"
            as="h1"
            style={{ color: "#fff" }}
          >
            <Image circular src="/images/french-poodle.png" /> Puppy Hotel
          </Header>

          <Menu.Menu position='right'>
            <Menu.Item
              name='Puppies'
              active={activeItem === 'puppies'}
            />
            <Menu.Item
              name='Rooms'
              active={activeItem === 'rooms'}
            />

          </Menu.Menu>

        </Menu>
      </Segment>

      {/* Body Page */}
      <Grid padded columns={2} style={{ minHeight: '90vh' }}>
        <Grid.Row>
          {/* List Panel */}
          <Grid.Column width={8}>
            <PuppyList />
          </Grid.Column>

          {/* Edit and Add Panels */}
          <Grid.Column width={8}>
            {/* Edit Component */}
            <Segment raised>
              <Header as="h3">Edit Puppy Info</Header>
              <EditPuppy />
            </Segment>

            {/* Add Component */}
            <Segment raised>
              <Header as="h3">Add New Puppy</Header>
              <AddPuppy/>
            </Segment>
          </Grid.Column>
        </Grid.Row>


      </Grid>
    </div>
  );
}

export default App;
