import React from 'react';
import {
  Item, Button
} from "semantic-ui-react";

export default function PuppyItem() {

  return (
    <Item>
      <Item.Image size='tiny' src='' />

      <Item.Content>
        <Item.Header>Header</Item.Header>
        <Item.Meta>
          <span>Breed</span>
        </Item.Meta>
        <Item.Description>Age in months</Item.Description>
        <Item.Extra>
          <Button labelPosition="left" icon="edit" floated="right" content="Edit" />
          <Button color="red" labelPosition="left" icon="delete" floated="right" content="Delete" />
        </Item.Extra>
      </Item.Content>
    </Item>
  );
}