import React from 'react';
import {
    Card,
    CardBody,
    CardFooter,
    CardHeader, CardSubtitle,CardTitle,CardText,Button,Container
} from 'reactstrap';



export default function SingleCourse({course}) {
  console.log(course);
  return (
    <>
    <Card className='text-center'>
        <CardBody>
            <CardSubtitle className='font-weight-bold'>{course.title}</CardSubtitle>
            <CardText>{course.text}</CardText>
            <Container className='text-center'>
                <Button  color='danger my-5'>Delete</Button>
                <Button color='warning ml-3'>Update</Button>
            </Container>
        </CardBody>
    </Card>
    </>
  )
}
