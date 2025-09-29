import '../style/HomePage.css'
import NavBar from '../components/NavBar';
import ProjectDescription from '../components/ProjectDescription';
import { FaUnity } from "react-icons/fa";
import { SiUnrealengine } from "react-icons/si";
import { DiVisualstudio } from "react-icons/di";
import { SiJetbrains } from "react-icons/si";
import { PiFileCSharp } from "react-icons/pi";
import { CgCPlusPlus } from "react-icons/cg";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { SiBlender } from "react-icons/si";
import { SiAutodeskmaya } from "react-icons/si";
import { FiFigma } from "react-icons/fi";
import { appendFile } from 'fs';

function HomePage(){
    return(
      <div className="App">
      <NavBar></NavBar>
      <video className='video-style' src={require("../assets/blockIt.mp4")} autoPlay muted loop></video>
      <h1 id='Projects'>PROJECTS</h1>
      <div className='Description-style'>
        <ProjectDescription imageName={require('../assets/a.s.rProject/a.s.r_Burnout_VR.gif')} projectName='A.S.R VR BURNOUT EXPERIENCE' projectLink='/asrburnout' projectDescription='I made a game for a.s.r I was lead developer, teaching 3 others how to use Unity while building important game systems like the day and night cycle and game manager' projectYear='2025' projectSoftware='Unity' projectLength='6 months'/>
        <ProjectDescription imageName={require('../assets/volcano_Fest/Volcano_Fest_Clip (1).gif')} projectName='VOLCANO FEST'  projectLink='/' projectDescription='' projectYear='2025' projectSoftware='Unity' projectLength='6 months'/>
        <ProjectDescription imageName={require('../assets/switch_Project/Switchgameplay.gif')} projectName='SWITCH' projectLink='/switch' projectDescription=' Switch is a game I worked on during my internship at GreyGames. I got the time and space to work on a new project that was to be a first person shooter with the twist that the player could manipulate the environment to their advantage.' projectYear='2020-2021' projectSoftware='Unreal Engine - Blueprints' projectLength='1 Year'/>
        <ProjectDescription imageName={require('../assets/itchio_Game/Overgrown_Clip.gif')} projectName='OVERGROWN' projectLink='/overgrown' projectDescription='For this school project I worked with 3 others to make a game that we would publish on Itch.io. I worked on the plant growth mechanics and collecting mechanics as well as adding animations to the player and the enemy character' projectYear='2020' projectSoftware='Unity' projectLength='3 months'/>
      </div>
      <h1>GAME JAMS</h1>
      <div className='Description-style'>
        <ProjectDescription imageName={require('../assets/malaga_Jam/FixMyTattoo_Gif_1.gif')} projectName='MALAGA JAM' projectLink='/' projectDescription='Whilst on an educational school trip which only a select few students were chosen for, I participated in the global game jam in Malaga Spain. We had 3 days to make and develop a game with the theme repair.' projectYear='2020' projectSoftware='Unity' projectLength='3 days'/>
        <ProjectDescription imageName={require('../assets/egg_Game_Jam/Egg_Game_Jam_clip.gif')} projectName='SCHOOL GAME JAM THEME EGG' projectLink='/gamejamegg' projectDescription='' projectYear='2025' projectSoftware='Unreal Engine - C++' projectLength='1 week'/>
      </div>
      <h1 id='WebDev'>WEB DEVELOPMENT</h1>
        <div className='Description-style'>
          <ProjectDescription imageName={require('../assets/portfolio_Clips/Gabriella_Portfolio_Clip.gif')} projectName='Portfolio Gabriella Lichtneker' projectLink='https://gabriellalichtneker.com' projectDescription='' projectYear='2024' projectSoftware='HTML-CSS' projectLength='2 weeks'/>
          <ProjectDescription imageName={require('../assets/portfolio_Clips/Anne_portfolio_Clip.gif')} projectName='Portfolio Anne Roos Leeuwis' projectLink='https://anneroosportfolio.nl/index.html' projectDescription='' projectYear='2024' projectSoftware='HTML-CSS' projectLength='2 weeks'/>
        </div>
      <h1 id='About'>ABOUT ME</h1> 
      <div className='About-me-style'>
        <img src={require('../assets/Max_Photo.png')} className='Image-style'/>
        <div className='Information-skills'>
          <p className='p1 aboutDiscription-style'> I live in the Netherlands and am currently studying software development at Hogeschool Utrecht. Ever since I first started playing video games, 
          I’ve been curious about how they’re made and what goes on behind the scenes. 
          So it’s really cool to now be working on and making my own games, while teaming up with some great people. 
          I mainly program, but enjoy 3-D modeling and game design, as well as solving problems and coming up with ways to fix them. 
          When I’m not playing or working on games, I play guitar and paint like Bob Ross – but not at the same time!
          </p>
          <h1 style={{textAlign:"start"}}>SKILLS</h1>
          <div style={{textAlign:'left'}}>
            <p className='p1'>GAME ENGINES & IDES</p>
            <div className='Icon-list'>
              <FaUnity/>
              <SiUnrealengine/>
              <DiVisualstudio />
              <SiJetbrains />
            </div>
            <p className='p1'>PROGRAMMING LANGUAGES & TOOLS</p>
            <div className='Icon-list'>
              <PiFileCSharp/>
              <CgCPlusPlus/>
              <FaHtml5/>
              <FaCss3Alt/>
              <FaReact />
              <IoLogoJavascript />
              <SiTypescript />
              <FaGithub />
            </div>
            <p className='p1'>OTHER PROGRAMS</p>
            <div style={{paddingBottom:"20px"}} className='Icon-list'>
              <SiBlender />
              <SiAutodeskmaya />
              <FiFigma />
            </div>
          </div>
        </div>
      </div>
      </div>
    );
}

export default HomePage;