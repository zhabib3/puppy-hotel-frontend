import React from 'react';
import {
  Item, Button
} from "semantic-ui-react";

export default function PuppyItem(props) {
  const puppy = props.puppy;
  const setSelectedPuppy = props.setSelectedPuppy;

  // Function called when Edit button is clicked
  const onEditClick = () => {
    setSelectedPuppy(puppy);
  }

  return (
    <Item>
      <Item.Image size='tiny' src={`/images/${puppy.breed}.png`} />

      <Item.Content>
        <Item.Header>{puppy.name}</Item.Header>
        <Item.Meta>
          <span>{puppy.breed}</span>
        </Item.Meta>
        <Item.Description>{puppy.age} months old</Item.Description>
        <Item.Extra>
          <Button labelPosition="left" icon="edit" floated="right" content="Edit" onClick={onEditClick} />
          <Button color="red" labelPosition="left" icon="delete" floated="right" content="Delete" />
        </Item.Extra>
      </Item.Content>
    </Item>
  );
}