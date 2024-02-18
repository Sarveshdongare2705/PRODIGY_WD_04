import React, { useEffect, useState } from 'react';
import './App.scss';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MenuIcon from '@mui/icons-material/Menu';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import profileImage from './assets/profile.png'



function App() {
  const [text , setText] = useState('');
  const [visible , setVisible] = useState(false);
  useEffect(()=>{
    const texts = [
      'Computer Engineer.',
      'Frontend Developer.',
      'UI/UX Designer.',
      'Web Developer.',
    ]
    let textsindex = 0;
    let charindex = 0;
    let typeTimer, backspaceTimer;

    const type = () =>{
      if(charindex <= texts[textsindex].length){
        setText(texts[textsindex].slice(0,charindex));
        charindex++;
        typeTimer = setTimeout(type, 100);
      }
      else{
        backspaceTimer = setTimeout(backspace, 1000);
      }
    }
    const backspace = ()  =>{
      if(charindex>0){
        setText(texts[textsindex].slice(0,charindex));
        charindex--;
        backspaceTimer = setTimeout(backspace, 50);
      }
      else{
        textsindex = (textsindex+1) % texts.length;
        typeTimer = setTimeout(type, 100);
      }
    }
    type();

    return () => {
      clearTimeout(typeTimer);
      clearTimeout(backspaceTimer);
    };
  } , []);

  const togglenavbar = () =>{
    setVisible(!visible);
  }
  return (
    <div className="App">
      <header className='header'>
        <a href='#' className='logo'>Portfolio.</a>
        <div  id='menu' onClick={togglenavbar}><MenuIcon style={{fontSize:"30"}} /></div>
        <div className={`navbar${visible? 'show' : ''}`}>
          <a href='Home' className='active'>Home</a>
          <a href='About'>About</a>
          <a href='Skills'>Skills</a>
          <a href='Projects'>Projects</a>
          <a href='Contact'>Contact</a>
        </div>
      </header>

      <section className='home' id='home'>
        <div className='home-content'>
        <div className='social-media'>
            <a href=''><div className='icon'><LinkedInIcon style={{fontSize:"40"}} /></div></a>
            <a href=''><div className='icon'><WhatsAppIcon style={{fontSize:"40"}} /></div></a>
            <a href=''><div className='icon'><InstagramIcon style={{fontSize:"40"}}/></div></a>
            <a href=''><div className='icon'><XIcon style={{fontSize:"40"}}/></div></a>
            <a href=''><div className='icon'><FacebookOutlinedIcon style={{fontSize:"40"}}/></div></a>
          </div>
          <div className='name'>
            <h1>Hi, Myself</h1>
            <h2>Sarvesh Dongare</h2>
            <h3>And, I'm a <div>{text}</div></h3>
          </div>
        </div>
        <div className='image'>
          <img src={profileImage}></img>
        </div>


      </section>
    </div>
  );
}

export default App;
