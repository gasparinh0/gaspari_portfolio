import React from 'react';

//Imports de componentes
import AbilityCard from '../../partials/AbilityCard';

//IMPORTS DO MOTION
import { motion } from "framer-motion"

//Imports do REACT-ICONS
import { BiLogoHtml5, BiLogoCss3, BiLogoJavascript, BiLogoWordpress, BiLogoMongodb, BiLogoReact, BiLogoTailwindCss, BiLogoPython } from "react-icons/bi";
import { SiAdobephotoshop, SiElementor, SiFigma, SiNextdotjs, SiTypescript } from "react-icons/si";
import { FaGitAlt, FaGithub, FaDocker } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";

function ComponentsMobile() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 1 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className='text-white text-3xl mt-3 mb-2 font-semibold'>Sobre mim</h1>
      <div className='content-none w-32 h-1 bg-[#9026b0] rounded-full mb-4'></div>
      <p className='text-white font-light'>
        Estudante de programação desde 2020, com foco principal em desenvolvimento Front-end.
        Sou formado em Desenvolvimento de Sistemas pela ETEC João Belarmino e atualmente curso Engenharia de Software na Universidade São Francisco (USF)
      </p>

      <div className='flex flex-col'>
        <h1 className='text-white text-3xl mt-3 mb-3 font-semibold'>Conhecimentos</h1>
        <div className='flex flex-wrap gap-3 justify-center'>
          <AbilityCard />
        </div>
      </div>

      <h1 className='text-white text-3xl mt-4 mb-1 font-semibold'>Principais habilidades</h1>
      <p className='text-white font-light mb-2'>Dê um toque em cima do ícone para ver o nível de habilidade em cada tecnologia.</p>
      <div className='grid grid-cols-3 align-middle'>

        <div className='flex flex-col items-center'>
          <div className='group relative rounded-full p-2 transition duration-300 hover:bg-[#303236]'>
            <BiLogoHtml5 size={45} color='#f75421' className='transition-opacity duration-300 group-hover:opacity-0' />
            <p className='absolute inset-0 flex items-center justify-center text-white font-semibold opacity-0 group-hover:opacity-100'>
              100%
            </p>
          </div>
          <p className='text-[#c1cccc] font-light'>HTML</p>
        </div>

        <div className='flex flex-col items-center'>
          <div className='group relative rounded-full p-2 transition duration-300 hover:bg-[#303236]'>
            <BiLogoCss3 size={45} color='#254bdd' className='transition-opacity duration-300 group-hover:opacity-0' />
            <p className='absolute inset-0 flex items-center justify-center text-white font-semibold opacity-0 group-hover:opacity-100'>
              80%
            </p>
          </div>
          <p className='text-[#c1cccc] font-light'>CSS</p>
        </div>

        <div className='flex flex-col items-center'>
          <div className='group relative rounded-full p-2 transition duration-300 hover:bg-[#303236]'>
            <BiLogoJavascript size={45} color='#efd81d' className='transition-opacity duration-300 group-hover:opacity-0' />
            <p className='absolute inset-0 flex items-center justify-center text-white font-semibold opacity-0 group-hover:opacity-100'>
              70%
            </p>
          </div>
          <p className='text-[#c1cccc] font-light'>JS</p>
        </div>

        <div className='flex flex-col items-center'>
          <div className='group relative rounded-full p-2 transition duration-300 hover:bg-[#303236]'>
            <BiLogoTailwindCss size={45} color='#3ebff8' className='transition-opacity duration-300 group-hover:opacity-0' />
            <p className='absolute inset-0 flex items-center justify-center text-white font-semibold opacity-0 group-hover:opacity-100'>
              80%
            </p>
          </div>
          <p className='text-[#c1cccc] font-light'>Tailwind</p>
        </div>

        <div className='flex flex-col items-center'>
          <div className='group relative rounded-full p-2 transition duration-300 hover:bg-[#303236]'>
            <BiLogoReact size={45} color='#5ed3f3' className='transition-opacity duration-300 group-hover:opacity-0' />
            <p className='absolute inset-0 flex items-center justify-center text-white font-semibold opacity-0 group-hover:opacity-100'>
              70%
            </p>
          </div>
          <p className='text-[#c1cccc] font-light'>React.JS</p>
        </div>

        <div className='flex flex-col items-center'>
          <div className='group relative rounded-full p-2 transition duration-300 hover:bg-[#303236]'>
            <BiLogoMongodb size={45} color='#51af3f' className='transition-opacity duration-300 group-hover:opacity-0' />
            <p className='absolute inset-0 flex items-center justify-center text-white font-semibold opacity-0 group-hover:opacity-100'>
              70%
            </p>
          </div>
          <p className='text-[#c1cccc] font-light'>MongoDB</p>
        </div>

        <div className='flex flex-col items-center'>
          <div className='group relative rounded-full p-2 transition duration-300 hover:bg-[#303236]'>
            <FaGitAlt size={45} color='#e94d32' className='transition-opacity duration-300 group-hover:opacity-0' />
            <p className='absolute inset-0 flex items-center justify-center text-white font-semibold opacity-0 group-hover:opacity-100'>
              100%
            </p>
          </div>
          <p className='text-[#c1cccc] font-light'>Git</p>
        </div>

        <div className='flex flex-col items-center'>
          <div className='group relative rounded-full p-2 transition duration-300 hover:bg-[#303236]'>
            <FaGithub size={45} color='#ffff' className='transition-opacity duration-300 group-hover:opacity-0' />
            <p className='absolute inset-0 flex items-center justify-center text-white font-semibold opacity-0 group-hover:opacity-100'>
              100%
            </p>
          </div>
          <p className='text-[#c1cccc] font-light'>GitHub</p>
        </div>

        <div className='flex flex-col items-center'>
          <div className='group relative rounded-full p-2 transition duration-300 hover:bg-[#303236]'>
            <IoLogoFirebase size={45} color='#ff9408' className='transition-opacity duration-300 group-hover:opacity-0' />
            <p className='absolute inset-0 flex items-center justify-center text-white font-semibold opacity-0 group-hover:opacity-100'>
              70%
            </p>
          </div>
          <p className='text-[#c1cccc] font-light'>Firebase</p>
        </div>

        <div className='flex flex-col items-center'>
          <div className='group relative rounded-full p-2 transition duration-300 hover:bg-[#303236]'>
            <SiAdobephotoshop size={45} color='#2fa3f7' className='transition-opacity duration-300 group-hover:opacity-0' />
            <p className='absolute inset-0 flex items-center justify-center text-white font-semibold opacity-0 group-hover:opacity-100'>
              80%
            </p>
          </div>
          <p className='text-[#c1cccc] font-light'>Photoshop</p>
        </div>

        <div className='flex flex-col items-center'>
          <div className='group relative rounded-full p-2 transition duration-300 hover:bg-[#303236]'>
            <BiLogoWordpress size={45} color='#007298' className='transition-opacity duration-300 group-hover:opacity-0' />
            <p className='absolute inset-0 flex items-center justify-center text-white font-semibold opacity-0 group-hover:opacity-100'>
              80%
            </p>
          </div>
          <p className='text-[#c1cccc] font-light'>Wordpress</p>
        </div>

        <div className='flex flex-col items-center'>
          <div className='group relative rounded-full p-2 transition duration-300 hover:bg-[#303236]'>
            <SiElementor size={45} color='#950841' className='transition-opacity duration-300 group-hover:opacity-0' />
            <p className='absolute inset-0 flex items-center justify-center text-white font-semibold opacity-0 group-hover:opacity-100'>
              80%
            </p>
          </div>
          <p className='text-[#c1cccc] font-light'>Elementor</p>
        </div>

        <div className='flex flex-col items-center'>
          <div className='group relative rounded-full p-2 transition duration-300 hover:bg-[#303236]'>
            <SiFigma size={45} color='#ffffff' className='transition-opacity duration-300 group-hover:opacity-0' />
            <p className='absolute inset-0 flex items-center justify-center text-white font-semibold opacity-0 group-hover:opacity-100'>
              70%
            </p>
          </div>
          <p className='text-[#c1cccc] font-light'>Figma</p>
        </div>

      </div>
      <h2 className='text-white text-3xl mt-4 mb-3 font-semibold'>Atualmente estudando</h2>
      <div className='grid grid-cols-2 align-middle'>

        <div className='flex flex-col items-center'>
          <div className='group relative rounded-full p-2 transition duration-300 hover:bg-[#303236]'>
            <BiLogoPython size={45} color='#4380b0' className='transition-opacity duration-300 group-hover:opacity-0' />
            <p className='absolute inset-0 flex items-center justify-center text-white font-semibold opacity-0 group-hover:opacity-100'>
              40%
            </p>
          </div>
          <p className='text-[#c1cccc] font-light'>Python</p>
        </div>

        <div className='flex flex-col items-center'>
          <div className='group relative rounded-full p-2 transition duration-300 hover:bg-[#303236]'>
            <FaDocker size={45} color='#119fed' className='transition-opacity duration-300 group-hover:opacity-0' />
            <p className='absolute inset-0 flex items-center justify-center text-white font-semibold opacity-0 group-hover:opacity-100'>
              30%
            </p>
          </div>
          <p className='text-[#c1cccc] font-light'>Docker</p>
        </div>

        <div className='flex flex-col items-center'>
          <div className='group relative rounded-full p-2 transition duration-300 hover:bg-[#303236]'>
            <SiNextdotjs size={45} color='#ffff' className='transition-opacity duration-300 group-hover:opacity-0' />
            <p className='absolute inset-0 flex items-center justify-center text-white font-semibold opacity-0 group-hover:opacity-100'>
              30%
            </p>
          </div>
          <p className='text-[#c1cccc] font-light'>Next.js</p>
        </div>

        <div className='flex flex-col items-center'>
          <div className='group relative rounded-full p-2 transition duration-300 hover:bg-[#303236]'>
            <SiTypescript size={45} color='#027acc' className='transition-opacity duration-300 group-hover:opacity-0' />
            <p className='absolute inset-0 flex items-center justify-center text-white font-semibold opacity-0 group-hover:opacity-100'>
              30%
            </p>
          </div>
          <p className='text-[#c1cccc] font-light'>TypeScript</p>
        </div>


      </div>
    </motion.div>
  );
}

export default ComponentsMobile;