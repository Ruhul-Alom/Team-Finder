
import React from 'react'
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {FaArrowRight} from "react-icons/fa";

 const Leauges = (props) => {

    const{idLeague,strLeague,strSport,strFanart1}=props.leauge;
    return (
     
        <Col  sm={6}  md={6} lg={4} style={{marginBottom:"10px"}} >
    <Card>
  <Card.Img variant="top" src={strFanart1}/>
  <Card.Body>
    <Card.Title>{strLeague}</Card.Title>
    <Card.Text>
    {strSport}
    </Card.Text>
    <Button variant="primary"><Link style={{color:'white'}} to={`/leauge/${idLeague}`}>Explore <FaArrowRight/>  </Link></Button>
  </Card.Body>
</Card>

</Col>

    )
}

export default Leauges
