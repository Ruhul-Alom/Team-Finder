
import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Leauges from '../components/Leauges';
import frontImage from '../Photo/footboll.jpg'


const Home = () => {
    const [leauges,setLeauge]=useState([]);
  useEffect(() => {
   fetch('https://www.thesportsdb.com/api/v1/json/1/all_leagues.php')
   .then(res=>res.json())
   .then(data=>setLeauge(data.leagues))
    
  }, [])
  
   
    return (
      <Container>
     <Row  style={{width:'103%',height:'300px',backgroundImage: `url(${frontImage})`,backgroundRepeat: 'no-repeat',backgroundSize:'cover',display:'flex',justifyContent: 'center', 
alignItems: 'center',color:'white'}}>
      
<h2 >Team Finder</h2>
     </Row>
        
      <Row style={{backgroundColor:'#3A42FF',padding:'15px'}}>    
          
     {
      
      leauges.map(leauge=><Leauges leauge={leauge}></Leauges>)
    
     }
     
     </Row> 
     </Container>
        
    )
}

export default Home
