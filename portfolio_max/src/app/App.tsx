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
        <ProjectDescription imageName={require('../assets/a.s.rProject/a.s.r_Burnout_VR.gif')} projectName='a.s.r VR BURNOUT EXPERIENCE' projectDescription='I made a game for a.s.r I was lead developer, teaching 3 others how to use Unity while building improtant game systems like the day and night cycle and game manager'/>
        <ProjectDescription imageName={require('../assets/volcano_Fest/Volcano_Fest_Clip (1).gif')} projectName='Volcano Fest' projectDescription=''/>
        <ProjectDescription imageName={require('../assets/switch_Project/Switchgameplay.gif')} projectName='SWITCH' projectDescription='A multiplayer pvp game I made during my time at Grey Games'/>
        <ProjectDescription imageName={require('../assets/itchio_Game/Overgrown_Clip.gif')} projectName='OVERGROWN' projectDescription='Overgrown was a game I made at school with a group of 4 I really hope this appears below the image now'/>
      </div>
      <h1>Game Jams</h1>
      <div className='Description-style'>
        <ProjectDescription imageName={require('../assets/malaga_Jam/FixMyTattoo_Gif_1.gif')} projectName='Malaga Jam' projectDescription=''/>
        <ProjectDescription imageName={require('../assets/egg_Game_Jam/Egg_Game_Jam_clip.gif')} projectName='School Game Jam theme EGG' projectDescription=''/>
      </div>
      <h1>Web Development</h1>
        <div className='Description-style'>
          <ProjectDescription imageName={require('../assets/portfolio_Clips/Gabriella_Portfolio_Clip.gif')} projectName='Portfolio Gabriella Lichtneker' projectDescription=''/>
          <ProjectDescription imageName={require('../assets/portfolio_Clips/Anne_portfolio_Clip.gif')} projectName='Portfolio Anne Roos Leeuwis' projectDescription=''/>
        </div>
      <h1>About me</h1> 
    </div>
  );
}

export default App;