import '../App.css';
import Message from '../components/Message';
import NavBar from '../components/NavBar';
import ProjectDescription from '../components/ProjectDescription';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <video className='video-style' src={require("../assets/blockIt.mp4")} autoPlay muted loop></video>
      <h1>PROJECTS</h1>
      <div className='Description-style'>
        <ProjectDescription imageName={require('../assets/a.s.rProject/a.s.r_Burnout_VR.gif')} projectName='A.S.R VR BURNOUT EXPERIENCE' projectDescription='I made a game for a.s.r I was lead developer, teaching 3 others how to use Unity while building improtant game systems like the day and night cycle and game manager' projectYear='2025' projectSoftware='Unity' projectLength='6 months'/>
        <ProjectDescription imageName={require('../assets/volcano_Fest/Volcano_Fest_Clip (1).gif')} projectName='VOLCANO FEST' projectDescription='' projectYear='2025' projectSoftware='Unity' projectLength='6 months'/>
        <ProjectDescription imageName={require('../assets/switch_Project/Switchgameplay.gif')} projectName='SWITCH' projectDescription='A player vs player game I made during my internship at Grey Games. I worked as a solo developer using this project to learn Unreal engine 4 and Blueprints.' projectYear='2020-2021' projectSoftware='Unreal Engine - Blueprints' projectLength='1 Year'/>
        <ProjectDescription imageName={require('../assets/itchio_Game/Overgrown_Clip.gif')} projectName='OVERGROWN' projectDescription='Overgrown was a school project which was made with the purpose of uploading it onto itch.io' projectYear='2020' projectSoftware='Unity' projectLength='3 months'/>
      </div>
      <h1>GAME JAMS</h1>
      <div className='Description-style'>
        <ProjectDescription imageName={require('../assets/malaga_Jam/FixMyTattoo_Gif_1.gif')} projectName='MALAGA JAM' projectDescription='' projectYear='2020' projectSoftware='Unity' projectLength='3 days'/>
        <ProjectDescription imageName={require('../assets/egg_Game_Jam/Egg_Game_Jam_clip.gif')} projectName='SCHOOL GAME JAM THEME EGG' projectDescription='' projectYear='2025' projectSoftware='Unreal Engine - C++' projectLength='1 week'/>
      </div>
      <h1>WEB DEVELOPMENT</h1>
        <div className='Description-style'>
          <ProjectDescription imageName={require('../assets/portfolio_Clips/Gabriella_Portfolio_Clip.gif')} projectName='Portfolio Gabriella Lichtneker' projectDescription='' projectYear='2024' projectSoftware='HTML-CSS' projectLength='2 weeks'/>
          <ProjectDescription imageName={require('../assets/portfolio_Clips/Anne_portfolio_Clip.gif')} projectName='Portfolio Anne Roos Leeuwis' projectDescription='' projectYear='2024' projectSoftware='HTML-CSS' projectLength='2 weeks'/>
        </div>
      <h1>About me</h1> 
    </div>
  );
}

export default App;