import React, { useState, useEffect } from 'react';
import axios from "axios";
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

  // Menu page
  let activeItem = 'puppies';

  // Initialize the list of puppies
  const [puppies, setPuppies] = useState(DUMMY_DATA);
  // Initialize currently selected puppy for editing
  const [selectedPuppy, setSelectedPuppy] = useState(DUMMY_DATA[0]);

  // // Function that makes api request
  // const FetchPuppyList = async () => {
  //   const puppyListData = await axios.get("http://localhost:3000/puppies/");
  //   console.log(puppyListData);
  //   return puppyListData;
  // }

  // // Pull Puppy list from the server
  // useEffect(() => {
  //   // Make API call
  //   const puppyListData = FetchPuppyList();
  //   // Update puppies hook
  //   setPuppies(puppyListData);

  // }, [])

  const handleItemClick = () => {
    console.log("Menu item clicked");
  }

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
      <Grid padded columns={2} style={{ minHeight: '90vh' }}>
        <Grid.Row>
          {/* List Panel */}
          <Grid.Column width={8}>
            <PuppyList setSelectedPuppy={setSelectedPuppy} puppies={puppies} />
          </Grid.Column>

          {/* Edit and Add Panels */}
          <Grid.Column width={8}>
            <Segment raised>
              <Header as="h3">Edit Puppy Info</Header>
              <EditPuppy selectedPuppy={selectedPuppy} />
            </Segment>
            <Segment raised>
              <Header as="h3">Add New Puppy</Header>
              <AddPuppy puppyList={puppies} addPuppyHandler={setPuppies} />
            </Segment>
          </Grid.Column>
        </Grid.Row>


      </Grid>
    </div>
  );
}

export default App;
