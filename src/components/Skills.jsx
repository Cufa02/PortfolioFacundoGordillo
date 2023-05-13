import html from '../assets/skills/HTML.png';
import Bootstrap from '../assets/skills/Bootstrap.png';
import CSS from '../assets/skills/CSS.png';
import GitHub from '../assets/skills/GitHub.png';
import JavaScript from '../assets/skills/JavaScript.png';
import Notion from '../assets/skills/Notion.png';
import Photoshop from '../assets/skills/Photoshop.png';
import REACT from '../assets/skills/REACT.png';
import Tailwind from '../assets/skills/Tailwind.png';
const Skills = () => {

    const tecno = [
        {
            id: 1,
            img: html,
            nombre: "HTML",
        },
        {
            id: 2,
            img: Bootstrap,
            nombre: "Bootstrap",
        },
        {
            id: 3,
            img: CSS,
            nombre: "CSS",
        },
        {
            id: 4,
            img: GitHub,
            nombre: "GitHub",
        },
        {
            id: 5,
            img: JavaScript,
            nombre: "JavaScript",
        },
        {
            id: 6,
            img: Notion,
            nombre: "Notion",
        },
        {
            id: 7,
            img: Photoshop,
            nombre: "Photoshop",
        },
        {
            id: 8,
            img: REACT,
            nombre: "React",
        },
        {
            id: 9,
            img: Tailwind,
            nombre: "Tailwind",
        },
    ]

  return (
    <div name='skills' className='bg-gradient-to-b from-black to to-violet-600 via-black w-full h-screen md:py-96 max-[600px]:py-96 xl:py-0 2xl:py-0'>
        <div className='max-w-screen-lg mx-auto flex flex-col justify-center w-full h-30 text-white'>
            <div>
                <p className='text-4xl font-bold p-2 flex justify-center'>SKILLS </p>
                <p className='py-6 flex justify-center'>Tecnologías con las que trabajo</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0 max-[600px]:grid-cols-3 max-[600px]:py-2 '>

                {
                    tecno.map(({id, img, nombre}) => (
                        <div key={id} className='shadow-md hover:scale-105 duration-500 py-2 rounded-lg'>
                            <img src={img} alt="" className='w-20 mx-auto'/>
                            <p className='mt-4'>{nombre}</p>
                        </div>

                    ))
                }

                
            </div>
        </div>
    </div>
  )
}

export default Skills