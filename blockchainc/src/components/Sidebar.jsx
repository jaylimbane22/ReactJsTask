import React from 'react'
import { NavLink } from "react-router-dom";
import { useState } from "react";
import {AiOutlineNodeCollapse,AiFillPieChart} from "react-icons/ai";
import {CgProfile} from "react-icons/cg";
import {RxDashboard} from "react-icons/rx";
import {ImStatsBars} from "react-icons/im";
import {FcCandleSticks} from "react-icons/fc";
import {RiMessengerFill, RiExchangeDollarFill} from "react-icons/ri";
import {FaDatabase} from "react-icons/fa";
import {BsFillBarChartLineFill} from "react-icons/bs";
import {FaShareAlt} from "react-icons/fa";
import {HiDocumentText} from "react-icons/hi";




const Sidebar = () => {
    const [open, setOpen] = useState(true);
    const Menus = [
        {title:"Home", icon:<RxDashboard />, path:'/'},
        {title:"Section1", icon:<ImStatsBars />,  path:'/section1'} ,
        {title:"Section2", icon:<FcCandleSticks />,  path:'/section2' } ,
        {title:"Section3", icon:<RiMessengerFill />,  path:'/section3' } ,
        {title:"Section4", icon:<RiExchangeDollarFill />,  path:'/section4' } ,
        {title:"Section5", icon:<FaDatabase />,  path:'/section5' } ,
        {title:"Section6", icon:<AiFillPieChart />,  path:'/section6' } ,
        {title:"Section7", icon:<BsFillBarChartLineFill />,  path:'/section7' } ,
        {title:"Section8", icon:<FaShareAlt />,  path:'/section8' } ,
        {title:"Documentation", icon:<HiDocumentText />,  path:'/documentation' } ,
    ];
  return (
    
    <div className={`h-screen p-5 pt-8 w-84 ${open ? "w-72" : "w-20"} duration-300 relative`}>
      <AiOutlineNodeCollapse className= {`bg-white text-dark text-3xl rounded-full absolute -right-3 top-9 border border-dark cursor-pointer ${!open && "rotate-180"}`} onClick={() => setOpen(!open)} />
      <div className="inline-flex">
        <CgProfile className={`bg-light-blue text-4xl rounded cursor-pointer block float-left mr-2 duration-500 ${open && "rotate-[360deg]"}`} />
        <h2 className={`text-white origin-left font-medium text-2xl duration-300 ${!open && "scale-0"}`}>Name</h2>
      </div>
      <ul className="pt-2">
        {
            Menus.map((menu,index) => {
                return(<>
                    <li key={index} className={`text-gray-600 text-sm items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md `}>
                        <NavLink to={menu.path}>
                           <span className="text-2xl block float-left mb-2">{menu.icon ? menu.icon : <CgProfile />}</span>
                           <span className={`text-base font-medium flex-1 duration-100 ml-5 ${!open && "hidden"}`}>{menu.title}</span>
                        </NavLink>
                    </li>
                </>
                )
            })
        }
      </ul>
      
    </div>
   
  
    
  )
}

export default Sidebar
