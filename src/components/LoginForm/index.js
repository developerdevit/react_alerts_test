import React from "react";
import {Button, Form, FormGroup, Input, Label} from "reactstrap";
import CustomAlert from "../CustomAlert";


function LoginForm() {
  return (
    <div className="form">
      <CustomAlert local color={"success"}>I am a local success alert which closes automatically</CustomAlert>
      <Form inline>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input id="email" />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input id="password" />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    </div>
  )
}

export default LoginForm