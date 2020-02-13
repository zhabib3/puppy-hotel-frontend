import React, { useState } from "react";
import {
  Segment, Item, Header
} from "semantic-ui-react";
import PuppyItem from "./PuppyItem";

function PuppyList(props) {

  const puppies = props.puppies;
  const setSelectedPuppy = props.setSelectedPuppy;


  return (
    <Segment.Group raised>
      <Segment><Header as="h3" content="List of Puppers" /></Segment>
      <Segment>
        <Item.Group relaxed divided>
          {puppies.map(puppy => {
            return (
              <PuppyItem setSelectedPuppy={setSelectedPuppy} puppy={puppy} />
            );
          })}
        </Item.Group>
      </Segment>
    </Segment.Group>
  );
}

export default PuppyList;