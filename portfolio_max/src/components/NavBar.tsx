import '../style/Navbar.css'
import Hamburger from './HamburgerMenu';
import { Link } from 'react-router-dom';

interface PagesInerface{
    pageID: string;
}

function ScrollToPage(props:PagesInerface){
    const element = document.getElementById(props.pageID);
    element?.scrollIntoView({
        behavior:'smooth'
    })
}

function NavBar(){
    const IconWrapper = ({ Icon }: { Icon: React.ElementType }) => <Icon />;
    return <div className="Navbar">
        <Link  style={{textDecoration:'none', color:'#EFA00B'}} to="/"><h1 style={{cursor:"pointer"}}>Max Lichtneker</h1></Link>
        <div className='Navbar-right Desktop-nav'>
            <h1 className='HoverStyle' onClick={()=> ScrollToPage({pageID:'Projects'})}>Projects</h1>
            <h1 className='HoverStyle' onClick={()=> ScrollToPage({pageID:'WebDev'})}>Web development</h1> 
            <h1 className='HoverStyle' onClick={()=> ScrollToPage({pageID:'About'})}>About</h1> 
        </div>

        <div className='Navbar-Mobile'>
            <Hamburger/>
        </div>
    </div>
    
}
export default NavBar;