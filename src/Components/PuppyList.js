import React, { useState } from "react";
import {
  Segment, Item
} from "semantic-ui-react";
import PuppyItem from "./PuppyItem";

function PuppyList(props) {

  const puppies = props.puppies;



  return (
    <Segment.Group raised>
      <Segment>Search Bar</Segment>
      <Segment>
        <Item.Group relaxed divided>
          {puppies.map(puppy => {
            return (
              <PuppyItem puppy={puppy} />
            );
          })}
        </Item.Group>
      </Segment>
    </Segment.Group>
  );
}

export default PuppyList;