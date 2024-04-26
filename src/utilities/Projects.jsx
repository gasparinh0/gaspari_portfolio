import React from 'react';

//Imports das imagens utilizadas nos cards
import cardTodoList from '../img/todolistcard.png';
import cardPortifolio from '../img/cardportfolio.png';
import cardLinktree from '../img/cardlinktree.png';
import cardFigmaApp from '../img/cardfigmaapp.png';
import cardDigitalClock from '../img/carddigitalclock.png';

//Imports do MATERIAL UI
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Typography from '@mui/material/Typography';

//Imports do react-icons
import { AiFillHtml5 } from 'react-icons/ai';
import { BiLogoCss3, BiLogoJavascript, BiLogoReact, BiLogoTailwindCss, BiLogoFigma, BiLogoNodejs} from 'react-icons/bi';

//IMPORTS DO MOTION
import { motion } from "framer-motion"

function src() {
  return <motion.div
    initial={{ opacity: 0, scale: 1 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
  >
    <h1 className='text-white text-3xl mt-3 mb-1 font-semibold'>Projetos</h1>
    <div className='content-none w-28 h-1 bg-[#9026b0] rounded-full mb-2'></div>
    <p className='text-white font-light mb-3'>Todos os meus principais projetos realizados durante meu período como programador.</p>
    <div className='flex flex-wrap gap-2 justify-center'>
      <animationDiv />


      <Card sx={{ maxWidth: 345, backgroundColor: '#303236', color: 'white' }}>
        <CardActionArea>
          <a href="https://github.com/gasparinh0/to_do_list" target='_blank'>
            <CardMedia
              component="img"
              height="140"
              image={cardTodoList}
              alt="todolist"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lista de tarefas
                <div className='flex'>
                  <AiFillHtml5 color='#f75421' /> <BiLogoCss3 color='#254bdd' /> <BiLogoJavascript color='#efd81d' />
                </div>
              </Typography>
              <Typography variant="body2" color="white">
                Uma simples lista de tarefas realizada em HTML, CSS e JS puro, que pode receber um número ilimitado de tarefas, marcar como concluído e apagar.
              </Typography>
            </CardContent>
          </a>
        </CardActionArea>
      </Card>

      <Card sx={{ maxWidth: 345, backgroundColor: '#303236', color: 'white' }}>
        <CardActionArea>
          <a href="https://github.com/gasparinh0/gaspari_portfolio" target='_blank'>
            <CardMedia
              component="img"
              height="140"
              image={cardPortifolio}
              alt="portfolio"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Meu Portfólio
                <div className='flex'>
                  <AiFillHtml5 color='#f75421' /> <BiLogoReact color='#5ed3f3' /> <BiLogoTailwindCss color='#3ebff8' /> <BiLogoCss3 color='#254bdd' /> <BiLogoJavascript color='#efd81d' />
                </div>
              </Typography>
              <Typography variant="body2" color="white" >
                Um portfólio para demonstrar minhas principais habilidades e meu trabalho, também foi meu primeiro projeto desenvolvido em React.js
              </Typography>
            </CardContent>
          </a>
        </CardActionArea>
      </Card>

      <Card sx={{ maxWidth: 345, backgroundColor: '#303236', color: 'white' }}>
        <CardActionArea>
          <a href="https://github.com/gasparinh0/gaspari-linktree" target='_blank'>
            <CardMedia
              component="img"
              height="140"
              image={cardLinktree}
              alt="linktree"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Linktree

                <div className='flex'>
                  <AiFillHtml5 color='#f75421' /> <BiLogoReact color='#5ed3f3' /> <BiLogoTailwindCss color='#3ebff8' /> <BiLogoCss3 color='#254bdd' /> <BiLogoJavascript color='#efd81d' />
                </div>
              </Typography>
              <Typography variant="body2" color="white">
                Uma página aonde contém todos os meus links para serem acessados, desenvolvido em React.js
              </Typography>
            </CardContent>
          </a>
        </CardActionArea>
      </Card>


      <Card sx={{ maxWidth: 345, backgroundColor: '#303236', color: 'white' }}>
        <CardActionArea>
          <a href='https://www.figma.com/file/IiBphMBO0vSU9zbEIQHF1z/Esquematiza%C3%A7%C3%A3o-de-app-%2F-projeto-remember?type=design&node-id=0%3A1&mode=design&t=t9myFcmxpAjT1iay-1' target='_blank'>
            <CardMedia
              component="img"
              height="140"
              image={cardFigmaApp}
              alt="prototipation"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Prototipação de um app de academia

                <BiLogoFigma color='#ffffff' />
              </Typography>
              <Typography variant="body2" color="white">
                Um protótipo de app de academia feito no figma, com todas as telas que serão presentes no projeto.
              </Typography>
            </CardContent>
          </a>
        </CardActionArea>
      </Card>

      <Card sx={{ maxWidth: 345, backgroundColor: '#303236', color: 'white' }}>
        <CardActionArea>
          <a href='https://digital-clock-one-pi.vercel.app/' target='_blank'>
            <CardMedia
              component="img"
              height="140"
              image={cardDigitalClock}
              alt="prototipation"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Relógio digital customizável

                <div className='flex'>
                  <BiLogoTailwindCss color='#3ebff8' /> <BiLogoNodejs color='#7cb73f' />
                </div>
              </Typography>
              <Typography variant="body2" color="white">
                Um relógio digital completamente customizável, com a possibilidade de trocar as cores de fundo e do relógio. Também informa a cidade, temperatura e estado do tempo.
              </Typography>
            </CardContent>
          </a>
        </CardActionArea>
      </Card>

    </div>
  </motion.div>
}

export default src;