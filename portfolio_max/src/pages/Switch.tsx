import { text } from "stream/consumers";
import ProjectInformation from "../components/ProjectInformation";

function Switch(){
    return(
        <ProjectInformation projectClip="https://www.youtube.com/embed/tIxF3r5nwdg?si=trtS2vPU2SU-KH-y" projectHeader="SWITCH" LearnText={[
            " - I learned how to use blueprints.",
            " - I Learned how to use Unreals multiplayer features.",
            " - Figured out how to use steam's API and intergrate it.",
            " - Learned about Unreals IK kits and features.",
            " - Adding a lobby and leaderboard feature which updates accordingly.",
            " - Building a working settings menu.",
            " - How to add a chat system.",
        ]}
        changeText={["- I think one of the biggest changes I would make in regrads to this project is my use of blueprints, they are relativly fast in compiling but for a smooth multiplayer experience I feel like C++ is needed in this case for all the different multiplayer features.",]}
        />
    );
}

export default Switch;