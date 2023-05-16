import Facundo from '../assets/Facundo.jpeg'
import {MdKeyboardArrowDown} from 'react-icons/md'
import { BsGithub,BsLinkedin } from 'react-icons/bs'
import {FaUserAlt} from 'react-icons/fa'
import { Link } from 'react-scroll'

const Home = () => {
  return (
    <div name='home' className='h-screen w-full bg-gradient-to-b from-black via-black to-violet-600'>
        <div className='max-w-screen-lg mx-auto flex  flex-col items-center justify-center h-full px-4 md:flex-row pl-20 xl:pl-36'>
            <div className='flex flex-col justify-center h-full min-[320px]:pt-28'>
                <h2 className='text-4xl sm:text-7xl font-bold text-amber-50 '>Front-End Developer</h2>
                <p className='text-gray-500 py-4 max-w-md'>
                    Me llamo Facundo Gordillo Stanzione
                    <br/>
                    Soy un estudiante de programación argentino.
                    <br/>
                    Desarrollador Front-End JR con manejo de React y Tailwind
                </p>
                <div className='min-[320px]:pt-10 flex gap-20 max-[330px]:gap-6 min-[370px]:gap-28'>
                    <Link to='portfolio' smooth duration={500} className='group cursor-pointer text-black w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-pink-500 to to-pink-300 shadow-md shadow-black min-[320px]:-10'>
                        <span>
                            Portfolio
                            <MdKeyboardArrowDown size={28} className='ml-1 group-hover:scale-150 group-hover:text-white duration-200'/>
                        </span>
                    </Link>
                    <a href='https://drive.google.com/file/d/1UwBVC5vwU0JN_Jad_Vii_e2f85fC8qyD/view' target="blank" className='group cursor-pointer text-black w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-pink-500 to to-pink-300 shadow-md shadow-black min-[320px]:-10 hover:scale-105 duration-500'>
                        <span>
                            CV
                        </span>
                    </a>
                </div>
            </div>
            <div>
                <img src={Facundo} alt="Profile Photo" className='max-w-md rounded-3xl mx-auto w2/3 md:max-w-xs min-[320px]:max-w-[50%] min-[370px]:ml-12 min-[370px]:mt-6 min-[370px]:mb-20 xl:max-w-[50%] xl:mt-44 md:max-w-[60%] md:ml-20 md:mt-44 lg:max-w-[60%] 2xl:max-w-[60%] max-[330px]:ml-12 max-[330px]:mt-6'/>
            </div>
        </div>
        <div className='icons hidden-mobile '>
            <a href='https://github.com/Cufa02' target="blank"><BsGithub/></a>
            <a href="https://www.linkedin.com/in/facundo-gordillo-7013a6239/" target="blank"><BsLinkedin/></a>
            <a href="https://drive.google.com/file/d/1UwBVC5vwU0JN_Jad_Vii_e2f85fC8qyD/view?usp=sharing" target="blank"><FaUserAlt/></a>
        </div>
    </div>
  )
}

export default Home