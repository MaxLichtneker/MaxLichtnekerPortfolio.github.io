import '../style/ProjectDescription.css';

interface DescriptionProperties{
    imageName: string;
    projectName: string;
    projectDescription: string;
    projectYear:string;
    projectSoftware:string;
    projectLength:string;
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
            <h1 className='description-header'>{props.projectName}</h1>
            <p className='p1'>{props.projectDescription}</p>
        </div>
    </div>
}
//Overgrown was a game I made at school with a group of 4 I really hope this appears below the image now
export default ProjectDescription;