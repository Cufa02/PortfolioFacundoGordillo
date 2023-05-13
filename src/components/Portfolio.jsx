import WeSellStore from '../assets/portfolio/WeSellStore.png'
import TuCombo from '../assets/portfolio/TuCombo.png'
import DolarHoy from '../assets/portfolio/DolarHoy.png'
import {BsGithub, BsLink45Deg, BsBootstrapFill} from 'react-icons/bs';
import {FaSass, FaReact, FaHtml5, FaCss3Alt} from 'react-icons/fa';
import {IoLogoJavascript} from 'react-icons/io';

const Portfolio = () => {

  const portfolios = [
    {
      id:1,
      img: TuCombo,
      tec: [<FaHtml5/>, <FaCss3Alt/>, <IoLogoJavascript/>, <FaReact/>],
      link: 'https://github.com/Cufa02/tienda-master',
      linkpag:'https://tienda-master.vercel.app',
    },
    {
      id:2,
      img: WeSellStore,
      tec: [<FaHtml5/>, <FaCss3Alt/>, <BsBootstrapFill/>, <FaSass/>],
      link:'https://github.com/Cufa02/WeSellStore',
      linkpag:'https://cufa02.github.io/WeSellStore/',
    },
    {
      id:3,
      img: DolarHoy,
      tec: [<FaHtml5/>, <FaCss3Alt/>, <IoLogoJavascript/>],
      link:'https://github.com/Cufa02/Dolar-Blue-Hoy',
      linkpag:'https://cufa02.github.io/Dolar-Blue-Hoy/',
    },
  ]

  return (
    <div name='portfolio'>
    <div className="w-full h-screen bg-gradient-to-b from-violet-600 to-black text-white md:h-screen">
      <div className='max-w-screen-xl p-4 mx-auto flex flex-col justify-center w-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-black'>Portfolio</p>
          <p className='py-6'>Proyectos terminados hechos por mi</p>
        </div>

          
            <div className='grid sm:grid-cols-2 md:grid-cols-1 gap-8 px-12 sm:px-0 lg:grid-cols-2 xl:grid-cols-3 max-[600px]:grid-cols-1 max-[600px]:max-w-[95%] 2xl:pt-10 max-[330px]:w-56'>
              {portfolios.map(({id, img, tec, link, linkpag}) => (
                  <div key={id} className='contenedor '>
                    <figure>
                    <img
                      src={img} 
                      alt="" 
                      className='max-w-sm rounded-md duration-100 hover:scale-110' 
                      />
                      <div className='capa'>
                        <h3 className='tecnologias'>{tec}</h3>
                      </div>
                    </figure>
                    <div className='flex items-center justify-center'>
                      <a href={linkpag} target="blank"><BsLink45Deg size={30} className='w-1-2 cursor-pointer hover:text-black'/></a>
                      <a href={link} target="blank"><BsGithub size={23} className='w-1-2 m-4 cursor-pointer hover:text-black'/></a>
                    </div>
                  </div>

                ))}
</div>

      </div>

    </div>
    </div>
  )
}

export default Portfolio