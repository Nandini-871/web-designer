import {useEffect, useState} from 'react'
import { IoMdMoon } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { IoMdSunny } from "react-icons/io";


const Navbar = ({ dark, setDark }) => {
  return (
         <>
        

    <div className="nav flex items-center justify-between px-[120px] h-[70px] bg-white text-black dark:bg-black dark:text-white">
        <div className="logo">
            <h3 className='text-[30px] font-bold bg-gradient-to-bl from-slate-800 via-violet-500 to-zinc-400 bg-clip-text text-transparent '>Web desginer</h3>
        </div>
          <div className="icons flex items-center gap-[15px]">
          <i onClick={() => setDark(!dark)} className="icon cursor-pointer text-black dark:text-white">{dark ? <IoMdMoon /> : <IoMdSunny />}</i>
          <i className="icon text-black dark:text-white "><FaUser /></i>
        </div>
        </div>
    </>
  )
}

export default Navbar