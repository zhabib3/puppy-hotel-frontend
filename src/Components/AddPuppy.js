import React, { useState } from 'react';
import {
  Form,
  Button
} from "semantic-ui-react";

export default function AddPuppy(props) {

  const addPuppyHandler = props.addPuppyHandler;
  const puppyList = props.puppyList;

  // State hooks to track each form field
  const [puppyData, setPuppyData] = useState({
    id: 55,
    name: "Ralph",
    breed: "greyhound",
    age: 2
  });

  // Function called when Add button is clicked
  const onAddButton = (event) => {
    const updatedList = puppyList.concat(puppyData);
    addPuppyHandler(updatedList);
  }

  // Function called when a form field is changed
  const onFormInputChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    setPuppyData({ ...puppyData, [name]: value });
  }

  return (
    <Form>
      <Form.Input
        placeholder=''
        label="Name"
        name='name'
        value={puppyData.name}
        onChange={onFormInputChange}
      />

      <Form.Input
        placeholder=''
        label="Breed"
        name='breed'
        value={puppyData.breed}
        onChange={onFormInputChange}
      />

      <Form.Input
        placeholder=''
        label="Age"
        name='age'
        value={puppyData.age}
        onChange={onFormInputChange}
      />

      <Button primary onClick={onAddButton}>Create New Puppy</Button>
    </Form>
  )
}
