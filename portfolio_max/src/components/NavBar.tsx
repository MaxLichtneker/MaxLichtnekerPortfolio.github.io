import '../style/Navbar.css'
import Message from './Message';
function NavBar(){
    return <div className="Navbar">
        <div className='navbar-left'>
            <h1>Max Lichtneker</h1>
        </div>
        <div className='navbar-right'>
            <h1>Projects</h1>
            <h1>Web development</h1> 
            <h1>About</h1> 
        </div>
    </div>
}
export default NavBar;