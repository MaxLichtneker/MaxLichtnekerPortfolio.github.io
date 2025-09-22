import '../style/Navbar.css'
import Hamburger from './HamburgerMenu';

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
    return <div className="Navbar">
        <h1>Max Lichtneker</h1>
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