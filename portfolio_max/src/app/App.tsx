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
        <ProjectDescription/>
        <ProjectDescription/>
        <ProjectDescription/>
        <ProjectDescription/>
      </div>
    </div>
  );
}

export default App;
