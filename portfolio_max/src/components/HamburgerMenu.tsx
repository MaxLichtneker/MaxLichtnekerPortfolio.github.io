import { useState } from 'react';
import '../style/HamburgerStyle.css'
import { motion,MotionConfig } from "motion/react"

interface PagesInerface{
    pageID: string;
}

function ScrollToPage(props:PagesInerface){
    const element = document.getElementById(props.pageID);
    element?.scrollIntoView({
        behavior:'smooth'
    })
}

function Hamburger(){
    const [isOpen, setIsOpen] = useState(false);
    return(
    <nav>
    <MotionConfig  transition={{duration:0.5, ease: "easeInOut",}}>
        <motion.button onClick={()=> setIsOpen(!isOpen)} className="Hamburger-WidgetContainer" animate={isOpen ? "open" : "closed"}>
            <motion.span 
            style={{
                left:"50%",
                top:"35%",
                x:"-50%",
                y:"-50%"
            }}
            className="Burger-Widget"
            variants={{
                open:{
                    rotate: ["0","0","45deg"],
                    top:["35%", "50%", "50%"]
                },
                closed:{
                    rotate: ["45deg","0","0"],
                      top:["50%", "50%", "35%"]
                }
            }}
            />
            <motion.span style={{
                left:"50%",
                top:"50%",
                x:"-50%",
                y:"-50%"
            }} 
            className="Burger-Widget"
            variants={{
                open:{
                    rotate: ["0","0","45deg"],
                },
                closed:{
                    rotate: ["45deg","0","0"],
                }
            }}
            />

            <motion.span style={{
                left:"50%",
                bottom:"35%",
                x:"-50%",
                y:"50%"
            }}
            className="Burger-Widget"
            variants={{
                open:{
                    rotate: ["0","0","-45deg"],
                    bottom:["35%", "50%", "50%"]
                },
                closed:{
                    rotate: ["-45deg","0","0"],
                    bottom:["50%", "50%", "35%"]
                }
            }}
            />

        </motion.button>
     </MotionConfig>
        <>
        <motion.span 
        transition={{
            ease:"linear"   
        }}
        animate={isOpen ? "open" : "closed"}
        variants={{
            open:{
                x:0
            },
            closed:{
                x:"100%"
            }
        }}
        className='Hamburger-Container'>
            <button className='Burger-Button-Style' onClick={()=> ScrollToPage({pageID:'Projects'})}>Projects</button>
            <button className='Burger-Button-Style' onClick={()=> ScrollToPage({pageID:'WebDev'})}>Web Development</button>
            <button className='Burger-Button-Style' onClick={()=> ScrollToPage({pageID:'About'})}>About</button>
        </motion.span>
        </>
    </nav>
    )
}
export default Hamburger;