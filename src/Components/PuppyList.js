import React from "react";
import {
  Segment
} from "semantic-ui-react";

const DUMMY_DATA = [
  {
    name: 'Rover',
    breed: 'Corgi',
    age: 5
  },
  {
    name: 'Rover',
    breed: 'Corgi',
    age: 5
  },
  {
    name: 'Rover',
    breed: 'Corgi',
    age: 5
  },
  {
    name: 'Rover',
    breed: 'Corgi',
    age: 5
  },
  {
    name: 'Rover',
    breed: 'Corgi',
    age: 5
  },
];

function PuppyList() {
  return (
    <Segment raised>
      List of puppies
    </Segment>
  );
}

export default PuppyList;