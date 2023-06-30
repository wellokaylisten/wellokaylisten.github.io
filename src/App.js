import './App.css';
import *  as React from 'react';
import  Container from '@mui/material/Container';
import Typewriter from "typewriter-effect";
import Box from '@mui/material/Box';


import { styled } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";


function Welcome() {

    return(

            <div className='websiteHeader'>
            <Typewriter
 
                onInit={(typewriter) => {
                    typewriter
                        .typeString("hi, my name is ishrat!<br/>")
                        .pauseFor(1500)
                        .typeString("i'm <b>an ux/ui designer</b>")
                                .pauseFor(500)
                        .deleteChars(18)
                        .pauseFor(1000)
                        .typeString("<b>a front-end developer</b>")
                                .pauseFor(500)
                        .deleteChars(21)
                        .pauseFor(1000)
                        .typeString("<b>an aspiring game developer</b>")
                                .pauseFor(500)
                        .deleteChars(26)
                        .pauseFor(1000)
                        .typeString("<b>an experiential designer!</b>")
                        .start();
                }}
            />
        </div>
    
        )

}

function About() { 
    return(<div style={{color: 'white'}}>About heh</div>)
}

function Project() { 
    return(<div style={{color: 'white'}}>Project heh</div>)
}

function Contact(){
        return(<div style={{color: 'white'}}>Contact heh</div>)

}

export default function App () { 

    const [value, setValue] = React.useState(0);
    const handleChange = (event) => {
        setValue(event)
    }

    

   return(

    <Container  maxWidth="xl">


        <div className='centered-element'>
        
    {value === 0 ? <Welcome/> : value === 1 ? <About/> : value=== 2 ? <Project/> : <Contact/> } 


        <div style={{position: 'absolute', bottom: '10%', width: '100%', color: 'white'}}>

        

        </div></div>


    </Container>
    
    
   )
}