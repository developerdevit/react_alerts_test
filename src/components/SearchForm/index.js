import React from "react";
import {Button, Form, FormGroup, Input, Label} from "reactstrap";


function SearchForm() {
  return (
    <div className="form">
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