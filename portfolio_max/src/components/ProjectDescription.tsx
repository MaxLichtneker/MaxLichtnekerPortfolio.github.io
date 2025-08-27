import '../style/ProjectDescription.css';
import testImage from '../assets/malaga_Jam/MalagaJam_Gif_2.gif'

interface DescriptionProperties{
    imageName: string;
    projectName: string;
    projectDescription: string;
}

function ProjectDescription(props:DescriptionProperties){
    return <div className='ProjectDescription-style'>
    <img className='description-gif-syle' src={props.imageName}/>
    <h1>{props.projectName}</h1>
    <p className='p1'>{props.projectDescription}</p>
    </div>
}
//Overgrown was a game I made at school with a group of 4 I really hope this appears below the image now
export default ProjectDescription;