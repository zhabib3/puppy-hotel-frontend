import React from 'react'
import {
  Form,
  Button
} from "semantic-ui-react";

export default function EditPuppy() {


  return (
    <Form>
      <Form.Field>
        <label>Name</label>
        <input placeholder='' />
      </Form.Field>
      <Form.Field>
        <label>Breed</label>
        <input placeholder='' />
      </Form.Field>
      <Form.Field>
        <label>Age (in months)</label>
        <input placeholder='' />
      </Form.Field>

      <Button secondary type='submit'>Change Puppy Info</Button>
    </Form>
  )
}
