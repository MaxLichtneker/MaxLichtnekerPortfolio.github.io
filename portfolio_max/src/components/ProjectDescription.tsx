import '../style/ProjectDescription.css';
import testImage from '../assets/malaga_Jam/MalagaJam_Gif_2.gif'

function ProjectDescription(){
    return <div className='ProjectDescription-style'>
    <img className='description-gif-syle' src={testImage}/>
    <p>hello this is test text to see where it will appear</p>
    </div>
}

export default ProjectDescription;