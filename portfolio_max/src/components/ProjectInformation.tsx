import { text } from "stream/consumers";
import NavBar from "../components/NavBar";
import '../style/ProjectInformation.css'
import { line } from "motion/react-client";

interface DescriptionProperties{
    projectClip:string,
    projectHeader:string,
    LearnText:string[],
    changeText:string[],

}

function ProjectInformation(props:DescriptionProperties){
    return(
        <div className="page">
            <NavBar/>
            <div className="video-Container">
                <iframe className="video" src={props.projectClip} title="YouTube video player" allow="accelerometer; autoplay = true; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;fullscreen;" frameBorder={0}></iframe>
                <div className="information-Container">
                     <h1 className="Header">{props.projectHeader}</h1>
                     <div style={{textAlign:'start'}}>
                        <p className="p1" style={{fontWeight:"bold"}}> What did I learn:</p>
                        {props.LearnText.map((line, idx)=>(
                            <p key={idx} className="p1">{line}</p>
                        ))}
                        <p className="p1"  style={{fontWeight:"bold"}}> What would I change:</p>
                        {props.changeText.map((line, idx)=>(
                            <p key={idx} className="p1">{line}</p>
                        ))}
                     </div>
        
                </div>
            </div>
        </div>
    );
}

export default ProjectInformation;