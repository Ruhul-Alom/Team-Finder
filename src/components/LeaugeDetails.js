import React, { useEffect, useState } from 'react'
import { Row,Col } from 'react-bootstrap';
import { useParams } from 'react-router'
import Facebook from '../Photo/Facebook.png'
import Twitter from '../Photo/Twitter.png'
import YouTube from '../Photo/YouTube.png'
import male from '../Photo/male.png'
import female from '../Photo/female.png'
import {FaRegFlag} from "react-icons/fa";
import {RiFootballFill} from "react-icons/ri";
import {FiClock} from "react-icons/fi";
import {FaMars} from "react-icons/fa";




function LeaugeDetails() {
    const details={
        backgroundColor:'#0E0A2B',
        color:'white',
    }
   
    const{idLeague}=useParams();
    const [leauge,setLeauge]=useState({});
    useEffect(()=>{
        const url=(`https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`)
        fetch(url)
        .then(res=>res.json())
        .then(data=>setLeauge(data.leagues[0]))

    },[idLeague])
    return (
        <div>
         <Row>
             <Col>
         <img  style={{width:'100%',height:'300px'}} src={leauge.strFanart1} alt=""/>
         </Col>
         </Row>
         <div style={details}>
             <div style={{margin:'0 auto',width:'80%',padding:'20px 0'}}>
         <Row style={{backgroundColor:'#3A42FF',borderRadius:'20px',padding:'15px'}} >
             <Col  md={6}>
             <h2>  {leauge.strLeague}</h2>
        <h5><FiClock/> Staring Year: {leauge.intFormedYear}</h5>       
        <h5><RiFootballFill/> Sport Type {leauge.strSport}</h5> 
        <h5><FaRegFlag/>  Country:   {leauge.strCountry}</h5>
        <h5><FaMars/> Gender: {leauge.strGender}</h5> 
       
       
        </Col >
        <Col  md={6}>
            { (leauge.strGender==="Male")?
        <img style={{width:'100%',height:'200px'}} src={male} alt=""/>
        :
        <img style={{width:'100%',height:'200px'}} src={female} alt=""/>
            }
        </Col>
        </Row>
        <Row>
        <Col style={{marginTop:'20px'}}>
        <p> League Description {leauge.strDescriptionEN}</p>
        </Col>
        </Row>
        <Row style={{display:'flex',justifyContent: 'center', marginBottom:'30px'}}>
            
        <a style={{color:'white'}} href={leauge.strFacebook} > <img  style={{width:'50%',height:'20px'}} src={ Facebook} alt=""/> </a> 
        <a style={{color:'white'}} href={leauge.strTwitter}> <img  style={{width:'50%',height:'20px'}} src={Twitter} alt=""/>  </a> 
        <a style={{color:'white'}} href={leauge.strYoutube}> <img   style={{width:'50%',height:'20px'}} src={ YouTube} alt=""/> </a> 
     
        </Row>
        </div>
        </div>
        </div>
    )
}

export default LeaugeDetails
