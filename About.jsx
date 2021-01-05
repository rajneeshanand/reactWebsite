import React from 'react';
import ReactDOM from 'react-dom';
import { NavLink } from 'react-router-dom';
import web from "../src/images/im2.svg";
import Common from './Common';

const About=()=>{
    return(
        <>
       <Common 
       name='Welcome to About Page'
       imgsrc={web}
       visit="/Contact"
       btname="Contact Now"
       />
        </>

    );
}
export default About;