import React from 'react'
import { Button, Card, Container, Form, FormGroup, Input, Label } from 'reactstrap'

function AddCourse() {
  return (
    <>
    <h1 className='text-center my-3'>Fill Course Details</h1>
    <Card>
    <Form>
        <FormGroup>
            <Label for='cid'>Course Id</Label>
            <Input type='text'placeholder='Enter here' name='cid'id='cid'></Input>
        </FormGroup>
        <FormGroup>
            <Label for='title'>Title</Label>
            <Input type='text'placeholder='Enter here' name='title'id='title'></Input>
        </FormGroup>
        <FormGroup>
            <Label for='desc'>Description</Label>
            <Input type='textarea'placeholder='Enter here' name='desc'id='desc' style={{height:100}}></Input>
        </FormGroup>
        <Container className='text-center'>
            <Button color='success'>Add Course</Button>
            <Button color="warning ml-3">Clear</Button>
        </Container>
    </Form>
    </Card>

    </>
  )
}

export default AddCourse