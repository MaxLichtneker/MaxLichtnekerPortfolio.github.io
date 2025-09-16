import { useState } from 'react';
import '../style/HamburgerStyle.css'

function Hamburger(){
    const [isOpen, setIsOpen] = useState(false);
    return(
    <nav>
     <div onClick={()=> setIsOpen(!isOpen)} className="Hamburger-WidgetContainer">
        <div className="Burger-Widget"></div>
        <div className="Burger-Widget"></div>
        <div className="Burger-Widget"></div>
     </div>
        {isOpen && (
            <>
            <div className='Hamburger-Container'>
                <button>Projects</button>
                <button>Projects</button>
                <button>Projects</button>
            </div>
            </>
        )}
    </nav>
    )
}
export default Hamburger;