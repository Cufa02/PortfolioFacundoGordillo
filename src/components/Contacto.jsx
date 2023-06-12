import {FiMail} from 'react-icons/fi';
import {BsWhatsapp, BsLinkedin} from 'react-icons/bs';
const Contacto = () => {
  return (
    <div name='contacto' className='w-full h-screen bg-gradient-to-b from-violet-600 via-violet-600 to-black xl:py-10  text-black md:py-96 min-[320px]:py-96 xl:pl-10 xl:pt-32 '>
        <div className='flex flex-col justify-center max-w-7xl mx-auto h-0 xl:my-26  md:my-40 min-[320px]:my-28 min-[320px]:ml-8'>
            <div className='pb-6'>
                <p className='text-4xl font-bold inline border-b-4 border-white'>CONTACT ME</p>
                <p className='pt-8'>you can contact me through:</p>
                    <div className='pt-16 flex flex-col gap-20 md:text-white min-[320px]:text-white min-[320px]:gap-10 min-[320px]:pt-10 xl:text-black'>
                        <a href="https://www.linkedin.com/in/facundo-gordillo-7013a6239/" target="blank"><p className='flex gap-5 font-bold text-lg'><BsLinkedin size={30} className='text-white'/>www.linkedin.com/in/facundo-gordillo-7013a6239/</p></a>
                        <a href="https://wa.me/541150137306"target="blank"><p className='flex gap-5 font-bold text-lg'><BsWhatsapp size={30} className='text-white'/>+54 1150137306</p></a>
                        <a href="mailto:gordillofacu22@gmail.com" target="blank"><p className='flex gap-5 font-bold text-lg '><FiMail size={30} className='text-white'/>gordillofacu22@gmail.com</p></a>
                    </div>
            
            </div>  
        </div>
    </div>
  )
}

export default Contacto