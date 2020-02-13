import React, { useState } from 'react';
import {
  Form,
  Button
} from "semantic-ui-react";

export default function AddPuppy() {

  return (
    <Form>
      <Form.Input
        placeholder=''
        label="Name"
        name='name'
      />

      <Form.Input
        placeholder=''
        label="Breed"
        name='breed'
      />

      <Form.Input
        placeholder=''
        label="Age"
        name='age'
      />

      <Button primary>Create New Puppy</Button>
    </Form>
  )
}
