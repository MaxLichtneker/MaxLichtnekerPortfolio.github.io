import { Link } from 'react-router-dom';
import '../style/ProjectDescription.css';

interface DescriptionProperties{
    imageName: string;
    projectName: string;
    projectDescription: string;
    projectYear:string;
    projectSoftware:string;
    projectLength:string;
    projectLink:string;
}

function ProjectDescription(props:DescriptionProperties){
    return <div className='ProjectDescription-style'>
    <img className='description-gif-syle' src={props.imageName}/>
        <div className='description-information'>
            <p>year: {props.projectYear}</p>
            <p>software: {props.projectSoftware}</p>
            <p>project length: {props.projectLength}</p>
        </div>
        <div className='description-text-box'>
           <Link style={{textDecoration:'none', color:'#EFA00B'}} to={props.projectLink}><h1 className='description-header'>{props.projectName} <span style={{marginLeft:'1rem'}}>&gt;</span></h1></Link>
            <p className='p1'>{props.projectDescription}</p>
        </div>
    </div>
}
export default ProjectDescription;