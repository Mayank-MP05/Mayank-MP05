import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import MayankImg from "./linked-in-dp-gray-bg.png";
function Introcard() {
  return (
    <div className='w-100 d-flex'>
      <Card style={{ width: "40%" }} className='left-card no-border m-auto'>
        <Card.Img variant='top' src={MayankImg} className='mayank-img' />
        <Card.Body>
          <Card.Title>Mayank Pachpande</Card.Title>
          <Card.Text>Software Development Engineer</Card.Text>
          <Link to='/projects'>
            <Button variant='primary'>Projects</Button>
          </Link>
        </Card.Body>
      </Card>
      <Card
        style={{ width: "40%" }}
        className='m-auto no-border d-flex justify-content-center'>
        <p>- Loves JavaScript♥</p>
        <p>- Interested in Full Stack Developement and Full Stack</p>
        <p>- Worked mostly on Web Dev and Machine Learning Projects</p>
        <p>- Hobbies - Coding,Video Editing,Memes</p>
      </Card>
    </div>
  );
}

export default Introcard;
