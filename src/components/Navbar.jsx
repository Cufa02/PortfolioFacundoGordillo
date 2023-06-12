import { useState } from 'react';
import {FaBars, FaTimes} from 'react-icons/fa';
import {Link} from 'react-scroll';
import { useTranslation} from 'react-i18next';

const NavBar = () => {
    const [nav, setNav] = useState(false)
    const [t, i18n] = useTranslation("global");
  return (
    <div className='flex justify-around items-center z-10 w-full h-20 text-gray-00 bg-black fixed text-2xl text-gray-500'>
        <ul className='hidden md:flex'>
            <li className=' px-10 cursor-pointer hover:scale-125 hover:text-white duration-200 '><Link to='home' smooth duration={500}>Home</Link></li>
            <li className='px-10 cursor-pointer hover:scale-125 hover:text-white duration-200'><Link to='portfolio' smooth duration={500}>Portfolio</Link></li>
            <li className='px-10 cursor-pointer hover:scale-125 hover:text-white duration-200'><Link to='skills' smooth duration={500}>Skills</Link></li>
            <li className='px-10 cursor-pointer hover:scale-125 hover:text-white duration-200'><Link to='contacto' smooth duration={500}>{t("Navbar.Contacto")}</Link></li>
            <button className='btnLenguage' onClick={()=> i18n.changeLanguage("es")}>ES</button>
            <button className='btnLenguage' onClick={()=> i18n.changeLanguage("en")}>EN</button>
        </ul>
        <div onClick={() => setNav(!nav)} className='cursor-pointer pr-4 z-10 text-white md:hidden'>
            {nav ? <FaTimes size={30}/> : <FaBars size={30}/>}
        </div>

        {nav &&(

        <ul className='flex flex-col  justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-violet-600'>
            <li className='px-4 cursor-pointer capitalize text-white py-6 text-4xl'><Link to='home' smooth duration={500}>Home</Link></li>
            <li className='px-4 cursor-pointer capitalize text-white py-6 text-4xl'><Link to='portfolio'>Portfolio</Link></li>
            <li className='px-4 cursor-pointer capitalize text-white py-6 text-4xl'><Link to='skills'>Skills</Link></li>
            <li className='px-4 cursor-pointer capitalize text-white py-6 text-4xl'><Link to='contacto'>{t("Navbar.Contacto")}</Link></li>
            <button className='btnLenguageMobile' onClick={()=> i18n.changeLanguage("es")}>ES</button>
            <button className='btnLenguageMobile' onClick={()=> i18n.changeLanguage("en")}>EN</button>
        </ul>
        )}
    </div>

  );
};

export default NavBar