import React from 'react';

//Imports das imagens dos cards
import cardImage1 from '../img/programacaoweb.jpg';
import cardImage2 from '../img/design.jpg';
import cardImage4 from '../img/site.jpg';

//IMPORTS DO MOTION
import { motion } from "framer-motion"

//Imports do MATERIAL UI
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

//Imports do REACT-ICONS
import { BiLogoCPlusPlus, BiLogoHtml5, BiLogoCss3, BiLogoJavascript, BiLogoPhp, BiLogoWordpress, BiLogoMongodb, BiLogoNodejs, BiLogoReact, BiLogoTailwindCss, BiLogoPython } from "react-icons/bi";
import { SiArduino, SiAdobephotoshop, SiElementor, SiFigma } from "react-icons/si";

function src() {
  return <motion.div
    initial={{ opacity: 0, scale: 1 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
  >

    <h1 className='text-white text-3xl mt-3 mb-2 font-semibold'>Sobre mim</h1>
    <div className='content-none w-32 h-1 bg-[#9026b0] rounded-full mb-4'></div>
    <p className='text-white font-light'>
      Estudante de programação desde 2020, meu principal segmento na área é em desenvolvimento WEB, atualmente sou formado em desenvolvimento de sistemas
      pela ETEC João Belarmino e também estou cursando engenharia de software pela Universidade São Francisco.
    </p>
    <div className='flex flex-col'>
      <h1 className='text-white text-3xl mt-3 mb-3 font-semibold'>Conhecimentos</h1>
      <div className='flex flex-wrap gap-3 justify-center'>
        <Card sx={{ maxWidth: 290, backgroundColor: '#303236', color: 'white' }}>
          <CardMedia
            component="img"
            alt="programacaoweb"
            height="140"
            image={cardImage1}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Programação WEB
            </Typography>
            <Typography variant="body2" color="white">
              Atualmente atuo tanto no front-end e no back-end, prototipando telas, desenvolvendo e fazendo as lógicas para funcionarem.
            </Typography>
          </CardContent>
        </Card>

        <Card sx={{ maxWidth: 290, backgroundColor: '#303236', color: 'white' }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image={cardImage2}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Design Geral
            </Typography>
            <Typography variant="body2" color="white">
              Tenho experiência com design no geral, seja com posts para mídias sociais ou até mesmo na prototipação de algum software.
            </Typography>
          </CardContent>
        </Card>


        <Card sx={{ maxWidth: 290, backgroundColor: '#303236', color: 'white' }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image={cardImage4}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Web Design
            </Typography>
            <Typography variant="body2" color="white">
              Tenho conhecimento na parte de montagem de sites utilizando Wordpress e Elementor, desde o design no geral e também integrações no site.
            </Typography>
          </CardContent>
        </Card>


      </div>

      <h1 className='text-white text-3xl mt-4 mb-1 font-semibold'>Principais habilidades</h1>
      <p className='text-white font-light mb-2'>Passe o cursor em cima do ícone para ver o nível de habilidade em cada tecnologia.</p>
      <div className='flex flex-wrap gap-3 align-middle'>

        <div className='flex flex-col items-center'>
          <div className='group relative rounded-full p-2 transition duration-300 hover:bg-[#303236]'>
            <BiLogoCPlusPlus size={40} color='#00427e' className='transition-opacity duration-300 group-hover:opacity-0' />
            <p className='absolute inset-0 flex items-center justify-center text-white font-semibold opacity-0 group-hover:opacity-100'>
              60%
            </p>
          </div>
          <p className='text-[#c1cccc] font-light'>C++</p>
        </div>

        <div className='flex flex-col items-center'>
          <div className='group relative rounded-full p-2 transition duration-300 hover:bg-[#303236]'>
            <BiLogoHtml5 size={40} color='#f75421' className='transition-opacity duration-300 group-hover:opacity-0' />
            <p className='absolute inset-0 flex items-center justify-center text-white font-semibold opacity-0 group-hover:opacity-100'>
              100%
            </p>
          </div>
          <p className='text-[#c1cccc] font-light'>HTML</p>
        </div>

        <div className='flex flex-col items-center'>
          <div className='group relative rounded-full p-2 transition duration-300 hover:bg-[#303236]'>
            <BiLogoCss3 size={40} color='#254bdd' className='transition-opacity duration-300 group-hover:opacity-0' />
            <p className='absolute inset-0 flex items-center justify-center text-white font-semibold opacity-0 group-hover:opacity-100'>
              80%
            </p>
          </div>
          <p className='text-[#c1cccc] font-light'>CSS</p>
        </div>

        <div className='flex flex-col items-center'>
          <div className='group relative rounded-full p-2 transition duration-300 hover:bg-[#303236]'>
            <BiLogoJavascript size={40} color='#efd81d' className='transition-opacity duration-300 group-hover:opacity-0' />
            <p className='absolute inset-0 flex items-center justify-center text-white font-semibold opacity-0 group-hover:opacity-100'>
              70%
            </p>
          </div>
          <p className='text-[#c1cccc] font-light'>JS</p>
        </div>

        <div className='flex flex-col items-center'>
          <div className='group relative rounded-full p-2 transition duration-300 hover:bg-[#303236]'>
            <BiLogoTailwindCss size={40} color='#3ebff8' className='transition-opacity duration-300 group-hover:opacity-0' />
            <p className='absolute inset-0 flex items-center justify-center text-white font-semibold opacity-0 group-hover:opacity-100'>
              80%
            </p>
          </div>
          <p className='text-[#c1cccc] font-light'>Tailwind</p>
        </div>

        <div className='flex flex-col items-center'>
          <div className='group relative rounded-full p-2 transition duration-300 hover:bg-[#303236]'>
            <SiAdobephotoshop size={40} color='#2fa3f7' className='transition-opacity duration-300 group-hover:opacity-0' />
            <p className='absolute inset-0 flex items-center justify-center text-white font-semibold opacity-0 group-hover:opacity-100'>
              80%
            </p>
          </div>
          <p className='text-[#c1cccc] font-light'>Photoshop</p>
        </div>

        <div className='flex flex-col items-center'>
          <div className='group relative rounded-full p-2 transition duration-300 hover:bg-[#303236]'>
            <BiLogoWordpress size={40} color='#007298' className='transition-opacity duration-300 group-hover:opacity-0' />
            <p className='absolute inset-0 flex items-center justify-center text-white font-semibold opacity-0 group-hover:opacity-100'>
              80%
            </p>
          </div>
          <p className='text-[#c1cccc] font-light'>Wordpress</p>
        </div>

        <div className='flex flex-col items-center'>
          <div className='group relative rounded-full p-2 transition duration-300 hover:bg-[#303236]'>
            <SiElementor size={40} color='#950841' className='transition-opacity duration-300 group-hover:opacity-0' />
            <p className='absolute inset-0 flex items-center justify-center text-white font-semibold opacity-0 group-hover:opacity-100'>
              80%
            </p>
          </div>
          <p className='text-[#c1cccc] font-light'>Elementor</p>
        </div>

        <div className='flex flex-col items-center'>
          <div className='group relative rounded-full p-2 transition duration-300 hover:bg-[#303236]'>
            <SiFigma size={40} color='#ffffff' className='transition-opacity duration-300 group-hover:opacity-0' />
            <p className='absolute inset-0 flex items-center justify-center text-white font-semibold opacity-0 group-hover:opacity-100'>
              70%
            </p>
          </div>
          <p className='text-[#c1cccc] font-light'>Figma</p>
        </div>

      </div>
      <h2 className='text-white text-3xl mt-4 mb-3 font-semibold'>Atualmente estudando</h2>
      <div className='flex flex-wrap gap-3 align-middle'>

        <div className='flex flex-col items-center'>
          <div className='group relative rounded-full p-2 transition duration-300 hover:bg-[#303236]'>
            <BiLogoMongodb size={40} color='#51af3f' className='transition-opacity duration-300 group-hover:opacity-0' />
            <p className='absolute inset-0 flex items-center justify-center text-white font-semibold opacity-0 group-hover:opacity-100'>
              40%
            </p>
          </div>
          <p className='text-[#c1cccc] font-light'>MongoDB</p>
        </div>

        <div className='flex flex-col items-center'>
          <div className='group relative rounded-full p-2 transition duration-300 hover:bg-[#303236]'>
            <BiLogoNodejs size={40} color='#7cb73f' className='transition-opacity duration-300 group-hover:opacity-0' />
            <p className='absolute inset-0 flex items-center justify-center text-white font-semibold opacity-0 group-hover:opacity-100'>
              50%
            </p>
          </div>
          <p className='text-[#c1cccc] font-light'>Node.JS</p>
        </div>

        <div className='flex flex-col items-center'>
          <div className='group relative rounded-full p-2 transition duration-300 hover:bg-[#303236]'>
            <BiLogoPython size={40} color='#4380b0' className='transition-opacity duration-300 group-hover:opacity-0' />
            <p className='absolute inset-0 flex items-center justify-center text-white font-semibold opacity-0 group-hover:opacity-100'>
              40%
            </p>
          </div>
          <p className='text-[#c1cccc] font-light'>Python</p>
        </div>

        <div className='flex flex-col items-center'>
          <div className='group relative rounded-full p-2 transition duration-300 hover:bg-[#303236]'>
            <BiLogoReact size={40} color='#5ed3f3' className='transition-opacity duration-300 group-hover:opacity-0' />
            <p className='absolute inset-0 flex items-center justify-center text-white font-semibold opacity-0 group-hover:opacity-100'>
              30%
            </p>
          </div>
          <p className='text-[#c1cccc] font-light'>React.JS</p>
        </div>

      </div>
    </div>
  </motion.div>
}

export default src;