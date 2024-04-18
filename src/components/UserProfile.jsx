import { Button } from 'flowbite-react';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion'
export default function UserProfile() {
    const links = [
        {
            href:'',
            icons : <FaGithub className='w-4 h-4'/>
        },
        {
            href:'',
            icons : <FaInstagram className='w-4 h-4'/>
        },
        {
            href:'',
            icons : <FaLinkedin className='w-4 h-4'/>
        },
    ]
  return (
    <div className='flex flex-col sm:flex-row   p-3 border border-teal-500 rounded-tl-3xl rounded-br-3xl text-center'>
        <div className="flex-1  xl:pt-24 flex flex-col space-y-4">
            <h2 className='text-3xl font-bold border-b border-teal-500 py-6'>
                Biodata Creator
            </h2>
            <h2 className='text-2xl pt-6'>
                Hi🤗,I'm Yanuar Prayoga,
            </h2>
            <p className='text-gray-400 my-2'>
            Yanuar Prayoga, a fourth-semester student at Cilacap State Polytechnic, majoring in full-stack web development. I reside in Kebumen Regency. With a strong passion for learning, I am continuously honing my skills to produce creative and effective web solutions. I am eager to continue learning and contributing to the world of web development
            </p>
          
            <p className=''>connect with me:</p>
            <div className="flex justify-center gap-4">
                {
                    links.map((link) => (
                        <div key={link.href} className="">
                            <Link to={link.href}>{link.icons}</Link>
                        </div>
                    ))
                }
            </div>
        </div>
        <div className="p-7 flex-1">
            <motion.div
            
            animate={{
              
              borderRadius: ["20%", "20%", "50%", "50%", "20%"],
            }}
        
            >

            <img className='sm:w-[500px] mx-auto rounded-md' src="https://firebasestorage.googleapis.com/v0/b/sighartblog.appspot.com/o/profil.jpg?alt=media&token=f0104778-c3e0-47d4-b39c-1e5e13dccc6d" />
            </motion.div>
        </div>
    </div>
  )
}