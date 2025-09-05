import '../App.css';
import Message from '../components/Message';
import NavBar from '../components/NavBar';
import ProjectDescription from '../components/ProjectDescription';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <video className='video-style' src={require("../assets/blockIt.mp4")} autoPlay muted loop></video>
      <h1>Projects</h1>
      <div className='Description-style'>
        <ProjectDescription imageName={require('../assets/a.s.rProject/a.s.r_Burnout_VR.gif')} projectName='A.S.R VR BURNOUT EXPERIENCE' projectDescription='I made a game for a.s.r I was lead developer, teaching 3 others how to use Unity while building improtant game systems like the day and night cycle and game manager' projectYear='2025' projectSoftware='Unity' projectLength='6 months'/>
        <ProjectDescription imageName={require('../assets/volcano_Fest/Volcano_Fest_Clip (1).gif')} projectName='VOLCANO FEST' projectDescription='' projectYear='2025' projectSoftware='Unity' projectLength='6 months'/>
        <ProjectDescription imageName={require('../assets/switch_Project/Switchgameplay.gif')} projectName='SWITCH' projectDescription='A multiplayer pvp game I made during my time at Grey Games' projectYear='2020-2021' projectSoftware='Unreal Engine' projectLength='1 Year'/>
        <ProjectDescription imageName={require('../assets/itchio_Game/Overgrown_Clip.gif')} projectName='OVERGROWN' projectDescription='Overgrown was a game I made at school with a group of 4 I really hope this appears below the image now' projectYear='2020' projectSoftware='Unity' projectLength='6 months'/>
      </div>
      <h1>Game Jams</h1>
      <div className='Description-style'>
        <ProjectDescription imageName={require('../assets/malaga_Jam/FixMyTattoo_Gif_1.gif')} projectName='MALAGA JAM' projectDescription='' projectYear='2020' projectSoftware='Unity' projectLength='3 days'/>
        <ProjectDescription imageName={require('../assets/egg_Game_Jam/Egg_Game_Jam_clip.gif')} projectName='SCHOOL GAME JAM THEME EGG' projectDescription='' projectYear='2025' projectSoftware='Unreal Engine' projectLength='1 week'/>
      </div>
      <h1>Web Development</h1>
        <div className='Description-style'>
          <ProjectDescription imageName={require('../assets/portfolio_Clips/Gabriella_Portfolio_Clip.gif')} projectName='Portfolio Gabriella Lichtneker' projectDescription='' projectYear='2024' projectSoftware='HTML-CSS' projectLength='2 weeks'/>
          <ProjectDescription imageName={require('../assets/portfolio_Clips/Anne_portfolio_Clip.gif')} projectName='Portfolio Anne Roos Leeuwis' projectDescription='' projectYear='2024' projectSoftware='HTML-CSS' projectLength='2 weeks'/>
        </div>
      <h1>About me</h1> 
    </div>
  );
}

export default App;