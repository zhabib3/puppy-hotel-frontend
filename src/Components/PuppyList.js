import React, { useState } from "react";
import {
  Segment, Item, Header
} from "semantic-ui-react";
import PuppyItem from "./PuppyItem";

function PuppyList() {

  return (
    <Segment.Group raised>
      <Segment><Header as="h3" content="List of Puppers" /></Segment>
      <Segment>
        <Item.Group relaxed divided>
          <PuppyItem />
        </Item.Group>
      </Segment>
    </Segment.Group>
  );
}

export default PuppyList;