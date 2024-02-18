import React, { useEffect, useState } from 'react';
import './App.scss';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MenuIcon from '@mui/icons-material/Menu';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import profileImage from './assets/profile.png'
import skill1 from './assets/java.png'
import skill2 from './assets/reactjs.png'
import skill3 from './assets/html.png'
import skill4 from './assets/sql.png'
import skill5 from './assets/python.png'
import skill6 from './assets/js.png'
import resume from './assets/Sarvesh-resume.pdf'
import GitHubIcon from '@mui/icons-material/GitHub';



function App() {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resume;
    link.download = 'sarvesh-resume.pdf'; 
    link.click();
  };
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
          <a href='#about'>About</a>
          <a href='#skills'>Skills</a>
          <a href='#projects'>Projects</a>
          <a href='#education'>Education</a>
          <a href='#contact'>Contact</a>
        </div>
      </header>

      <section className='home' id='home'>
        <div className='home-content'>
        <div className='social-media'>
            <a href='https://www.linkedin.com/in/sarveshd7/'><div className='icon'><LinkedInIcon style={{fontSize:"40"}} /></div></a>
            <a href='https://github.com/Sarveshdongare2705'><div className='icon'><GitHubIcon style={{fontSize:"40"}} /></div></a>
            <a href='https://api.whatsapp.com/send/?phone=%2B919969148611&text&type=phone_number&app_absent=0'><div className='icon'><WhatsAppIcon style={{fontSize:"40"}} /></div></a>
            <a href='https://www.instagram.com/sarveshdongare2003?igsh=MXJnc3FqaWwxcXFnbw=='><div className='icon'><InstagramIcon style={{fontSize:"40"}}/></div></a>
            <a href='https://x.com/sarvesh75844742?t=EotKkP2atlyWH5gt6x4QLw&s=09'><div className='icon'><XIcon style={{fontSize:"40"}}/></div></a>
            <a href='https://www.facebook.com/profile.php?id=100089568395703&mibextid=ZbWKwL'><div className='icon'><FacebookOutlinedIcon style={{fontSize:"40"}}/></div></a>
          </div>
          <div className='name'>
            <h1>Hi, Myself</h1>
            <h2>Sarvesh Dongare</h2>
            <h3>And, I'm a <div>{text}</div></h3>
            <button onClick={handleDownload}>Download CV</button>
          </div>
        </div>
        <div className='image'>
          <img src={profileImage}></img>
        </div>
      </section>

      <section className='about' id='about'>
        <div className='about-content'>
          <h2 className='heading'>About <span>Me</span></h2>
          <h3>Computer Engineer</h3>
<p>
  Greetings! I am a dedicated computer engineering enthusiast, driven by a passion for technology and innovation. My journey in computer engineering has been a thrilling exploration of the intricate world of hardware and software integration. Let me share with you my experiences as a student, developer, and engineer.
</p>
<p>
  Currently enrolled in a computer engineering program, my academic journey has equipped me with a robust foundation in computer science and engineering fundamentals. From understanding algorithms and data structures to delving into system architecture, I have gained a comprehensive knowledge of the technological landscape.
</p>

          <h3>Frontend Developer</h3>
          <p>
          I have a keen interest in frontend development and UI/UX design. I find joy in crafting seamless and visually appealing user interfaces while diving into the intricate world of code to bring ideas to life. Let me take you on a journey into my world as a student, developer, and designer.
          Currently pursuing my degree in computer engineering, I am equipped with a strong foundation in computer science and engineering principles. From algorithms and data structures to system architecture, my academic journey has provided me with a comprehensive understanding of the technological landscape.
          </p>
        </div>
      </section>


      <section className='skills' id='skills'>
        <div className='skills-content'>
        <h2 className='heading'> My <span>Skills</span></h2>
        <div className='grid'>
          <div className='container'>
            <div className='image'>
              <img src={skill2}></img>
            </div>
            <h3 className='heading'>React JS</h3>
            <p>Developed dynamic and responsive user interfaces using React.js, leveraging component-based architecture to enhance user experiences in web applications.</p>
          </div>
          <div className='container'>
            <div className='image'>
              <img src={skill3}></img>
            </div>
            <h3 className='heading'>HTML5 , CSS</h3>
            <p>Proficient in crafting well-structured and visually appealing web pages with HTML and CSS, ensuring a seamless and engaging user interface.</p>
          </div>
          <div className='container'>
            <div className='image'>
              <img src={skill6}></img>
            </div>
            <h3 className='heading'>Javascript</h3>
            <p>Applied JavaScript to create interactive and feature-rich web applications, implementing client-side scripting for enhanced user interactivity.</p>
          </div>
          <div className='container'>
            <div className='image'>
              <img src={skill1}></img>
            </div>
            <h3 className='heading'>Java</h3>
            <p>Demonstrated proficiency in Java programming, tackling algorithmic challenges and building robust applications that showcase strong problem-solving skills.</p>
          </div>
          <div className='container'>
            <div className='image'>
              <img src={skill5}></img>
            </div>
            <h3 className='heading'>Python</h3>
            <p>Utilized Python for data analysis and warehouse management, employing powerful libraries like Pandas and NumPy to extract valuable insights from diverse datasets</p>
          </div>
          <div className='container'>
            <div className='image'>
              <img src={skill4}></img>
            </div>
            <h3 className='heading'>SQL</h3>
            <p>Implemented efficient database solutions using SQL, ensuring data integrity and facilitating seamless interaction with databases in web applications.</p>
          </div>
        </div>
        </div>
      </section>


      <section className='skills' id='projects'>
        <div className='skills-content'>
        <h2 className='heading'> My <span>Projects</span></h2>
        <div className='grid'>
          <a className='container' id='travelix' href='https://github.com/Sarveshdongare2705/Travelix'>
            <h3 className='heading'>Travelix Website</h3>
            <p>HTML5,CSS,JS,API,PHP</p>
            <span>SignUp,Login using Session in PHP,Booking,Reviews,Rating Functionaltiy</span>
          </a>
          <a className='container' id='weatherly' href=''>
            <h3 className='heading'>Weatherly</h3>
            <p>ReactJs,CSS,OpenWeatherAPI</p>
            <span>Display weather information , user can search for city or else check current location weather implemented by geolocation.</span>
          </a>
          <a className='container' id='tourworld' href='https://github.com/aniketgit2110/Tour-Sentiments'>
            <h3 className='heading'>TourWorld</h3>
            <p>ReactJS,Python,Django,Mongodb,API</p>
            <span>Recommend tour based on user's interests and plan each day of user in his/her tour</span>
          </a>
        </div>
        </div>
      </section>

      <section className='skills' id='education'>
        <div className='skills-content'>
        <h2 className='heading'> My <span>Education</span></h2>
        <div className='grid'>
          <div className='container'>
            <h1>91.80%</h1>
            <p>SSC(10th Std)</p>
            <span style={{padding:"20px"}}>Shivner Vidya Mandir High School,Sakinaka,Mumbai-400072</span>
          </div>
          <div className='container'>
            <h1>95.50%</h1>
            <p>HSC(12th Std)</p>
            <span style={{padding:"20px"}}>Ramniranjan Jhujhunwala College,Ghatkopar,Mumbai-400072</span>
          </div>
          <div className='container'>
            <h1>9.98 cgpa</h1>
            <p>BE-Computer Engineering(3rd year)</p>
            <span style={{padding:"20px"}}>VESIT,Chembur,Mumbai-400074</span>
          </div>
        </div>
        </div>
      </section>
      <section className='skills' id='contact'>
        <div className='skills-content'>
        <h2 className='heading'> Contact <span>Details</span></h2>
        <div className='detail'>
          <h4 className=''>Gmail</h4>
          <a href="mailto:sarveshsdongare@gmail.com" class="val">sarveshsdongare@gmail.com</a>
        </div>
        <div className='detail'>
          <h4 className=''>Mobile</h4>
          <a href="tel:+9969148611" class="val">9969148611</a>
        </div>
        </div>
      </section>
    </div>
  );
}

export default App;
