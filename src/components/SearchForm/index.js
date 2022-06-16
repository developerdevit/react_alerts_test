import React from "react";
import {Button, Form, FormGroup, Input, Label} from "reactstrap";
import CustomAlert from "../CustomAlert";


function SearchForm() {
  return (
    <div className="form">
      <CustomAlert local color={"warning"}>I am a local warning alert which closes automatically</CustomAlert>
      <Form inline>
        <FormGroup>
          <Input id="search" placeholder="Search" />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    </div>
  )
}

export default SearchForm