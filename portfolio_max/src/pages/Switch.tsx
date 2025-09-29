import NavBar from "../components/NavBar";
import '../style/SwitchPage.css'

function Switch(){
    return(
        <div className="page">
            <NavBar/>
            <div className="video-Container">
                <iframe className="video" src="https://www.youtube.com/embed/tIxF3r5nwdg?si=trtS2vPU2SU-KH-y" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;fullscreen;" frameBorder={0}></iframe>
            </div>
        </div>
    );
}

export default Switch;