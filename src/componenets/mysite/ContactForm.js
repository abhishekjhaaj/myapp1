import React, { useEffect, useState } from 'react'
//import { toast } from 'react-toastify'
import { Button, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap'

function ContactForm() {
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    //const [address,setAddress]=useState('')
    const [phone,setPhone]=useState();
    const [subject,setSubject]=useState();

    const [errMessage,setErrMessage]=useState([])
    useEffect(()=>{
    //   toast.error('Name is required');
    
      console.log(setName(name));
    },[name])
    const formSubmit=(e)=>{
        alert('Hello'+name)
      e.preventDefault();
    }
  return (
    <> {errMessage}
    <Form onSubmit={formSubmit}>
  <Row>
  <Col md={6}>
      <FormGroup>
        
        <Label for="exampleName">
          Name
        </Label>
        <Input
          id="name"
          name="name"
          value={name}
          placeholder="Enter Name here"
          type="text"
          onChange={(e)=>setName(e.target.value)}
        />
      </FormGroup>
    </Col>
    <Col md={6}>
      <FormGroup>
        <Label for="exampleEmail">
          Email
        </Label>
        <Input
          id="email"
          name="email"
          value={email}
          placeholder="Enter Email here"
          type="email"
          onChange={(e)=>setEmail(e.target.value)}
        />
      </FormGroup>
    </Col>
   
  </Row>
  <Row>
    <Col md={6}>
    <FormGroup>
    <Label for="exampleSubject">
      Subject
    </Label>
    <Input
      id="exampleSubject"
      name="subject"
      value={subject}
      placeholder="Enter Subject here"
      onChange={(e)=>setSubject(e.target.value)}
    />
  </FormGroup>
    </Col>
    <Col md={6}>
    <FormGroup>
    <Label for="examplePhone">
      Address
    </Label>
    <Input
      id="phone"
      name="phone"
      value={phone}
      placeholder="Enter Phone Number here"
      onChange={(e)=>setPhone(e.target.value)}

    />
  </FormGroup>
    </Col>
  </Row>
  
 
 
  
  <Button >
    Submit
  </Button>
</Form>
    </>
  )
}

export default ContactForm