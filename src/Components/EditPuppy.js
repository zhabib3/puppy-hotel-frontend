import React from 'react'
import {
  Form,
  Button
} from "semantic-ui-react";

export default function EditPuppy(props) {

  const puppyInfo = props.selectedPuppy;

  return (
    <Form>
      <Form.Field>
        <label>Name</label>
        <input placeholder={puppyInfo.name} />
      </Form.Field>
      <Form.Field>
        <label>Breed</label>
        <input placeholder={puppyInfo.breed} />
      </Form.Field>
      <Form.Field>
        <label>Age (in months)</label>
        <input placeholder={puppyInfo.age} />
      </Form.Field>

      <Button secondary type='submit'>Change Puppy Info</Button>
    </Form>
  )
}
