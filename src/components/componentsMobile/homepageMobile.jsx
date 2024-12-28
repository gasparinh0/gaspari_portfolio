import React from 'react';
import profileImagem from '../../img/profile/profile.png';

//Imports dos componentes
import SobreMimMobile from './sobreMimMobile'
import FormacaoMobile from './formacaoMobile'
import Projects from '../../partials/Projects'

//Imports do REACT-ICONS
import { BiSolidCity } from "react-icons/bi";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { MdEmail } from "react-icons/md";

//Imports do MATERIAL UI
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';

//CÓDIGO DO MENU
function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function HomepageMobile() {

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <section>
      <div className='flex justify-center'>
        <div className='flex justify-start pl-4 p-4 w-96 items-center bg-[#1e1e1f] border-solid border border-white shadow-2xl rounded-xl'>
          <img src={profileImagem} className='rounded-full w-28 h-28' alt='profile' />
          <div className='flex flex-col'>
            <h1 className='text-2xl text-white pl-2'>Lucas Gaspari</h1>
            <p className='text-white pl-2 font-light'>Front-end Developer</p>
            <div className='flex mt-1 pl-1'>
              <BiSolidCity size={23} color='white' />
              <p className='text-white pl-1 italic'>Amparo, São Paulo</p>
            </div>
          </div>
        </div>
      </div>

      <div className='flex justify-center'>
        <div className='flex justify-evenly p-2.5 w-56 items-center bg-[#1e1e1f] border-solid border border-white shadow-2xl rounded-b-xl'>
          <a href="https://www.linkedin.com/in/lucasgaspari2004/"><AiFillLinkedin size={28} color='white' /></a>
          <a href='https://github.com/gasparinh0'><AiFillGithub size={28} color='white' /></a>
          <a href="mailto:lucas.gaspari2004@gmail.com"><MdEmail size={28} color='white' /></a>
        </div>
      </div>

      <div className='flex justify-center mt-5'>
        <div className="w-96 h-auto bg-[#1e1e1f] border-solid border border-white shadow-2xl rounded-xl">
          <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider', display: 'flex', justifyContent: 'center' }}>
              <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" textColor="secondary" indicatorColor="secondary">
                <Tab label="Sobre mim" {...a11yProps(0)} sx={{
                  color: value === 0 ? 'secondary.main' : 'grey', // Define a cor das tabs inativas
                }} />
                <Tab label="Formação" {...a11yProps(1)} sx={{
                  color: value === 1 ? 'secondary.main' : 'grey', // Define a cor das tabs inativas
                }} />
                <Tab label="Projetos" {...a11yProps(2)} sx={{
                  color: value === 2 ? 'secondary.main' : 'grey', // Define a cor das tabs inativas
                }} />
              </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
              <SobreMimMobile />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
              <FormacaoMobile />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
              <Projects />
            </CustomTabPanel>
          </Box>
        </div>
      </div>
    </section>
  );
}

export default HomepageMobile;