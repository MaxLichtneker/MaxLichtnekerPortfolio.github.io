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
        <ProjectDescription imageName='../Assets/malaga_Jam/FixMyTattoo_Gif_1.gif' projectName='a.s.r VR BURNOUT EXPERIENCE' projectDescription='I made a game for a.s.r I was lead developer, teaching 3 others how to use Unity while building improtant game systems like the day and night cycle and game manager'/>
        <ProjectDescription imageName='../Assets/malaga_Jam/FixMyTattoo_Gif_1.gif' projectName='OVERGROWN' projectDescription='Overgrown was a game I made at school with a group of 4 I really hope this appears below the image now'/>
        <ProjectDescription imageName='../Assets/malaga_Jam/FixMyTattoo_Gif_1.gif' projectName='SWITCH' projectDescription='A multiplayer pvp game I made during my time at Grey Games'/>
      </div>
    </div>
  );
}

export default App;
