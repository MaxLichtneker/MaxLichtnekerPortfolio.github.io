import { div } from "motion/react-client";
import ProjectInformation from "../components/ProjectInformation";
import '../style/AsrPage.css';

function AsrBurnout(){
    return(
        <div>
            <ProjectInformation projectClip="https://www.youtube.com/embed/DNXyi-Jt1kI?si=LyGyoauldr-x-M0k" projectHeader="a.s.r VR BURNOUT" LearnText=
            {[
            "- How to lead and teach others to use Unity and C#.", 
            "- Present to big groups of people.",
            "- Implementing feedback given by play tester.",
            "- Testing and figuring out what VR control schemes people prefer.",
            "- Building standalone VR projects.",
            "- Using unity's built in VR features"
            ]} 
            changeText=
            {[
            "- If we had more time I would prioritize more different events that could happen to discract and irritate the player.",
            "- More realistic voices to immers the player more."
            ]}
            />
            <div className="Picture-Gallery">
                <img src={require('../assets/a.s.rProject/Asr_Presentatie_img_1.jpg')} style={{width:'50%', margin:'5px'}}></img>
                <img src={require('../assets/a.s.rProject/Asr_Presentatie_img_2.jpg')} style={{width:'50%',margin:'5px'}}></img>
                <img src={require('../assets/a.s.rProject/Asr_Presentatie_img_3.jpg')} style={{width:'50%',margin:'5px'}}></img>
            </div>
        </div>
    );
}

export default AsrBurnout;