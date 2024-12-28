import React from 'react';
import profileImagem from '../../img/profile/profile.png';

//Imports de componentes WEB
import SobreMim from './sobreMim'
import Formacao from './formacao'
import Projects from '../../partials/Projects'

//Imports do MATERIAL UI
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

//Imports do REACT-ICONS
import { BiSolidCity } from "react-icons/bi";

//CODIGO DOS TABS DA PARTE DE PERFIL
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#303236',
  display: 'flex',
  justifyContent: 'center',
  padding: '5px',
  textAlign: 'center',
  borderRadius: '12px',
  color: theme.palette.text.secondary,
}));

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


function HomePage() {

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (

    <section>
      <div class="flex justify-center align-middle gap-3">
        <div className="w-[320px] h-[520px] p-9 bg-[#1e1e1f] border-solid border border-white shadow-2xl rounded-xl flex flex-col justify-center align-middle items-center">
          <img src={profileImagem} className="w-64 h-64 border rounded-full mb-3" alt='profile' />
          <Box sx={{ width: "100%" }}>
            <Stack spacing={2}>
              <Item>
                <div>
                  <h1 className='text-3xl text-white'>Lucas Gaspari</h1>
                  <p className='text-white ml-1 italic'>Front-end Developer</p>
                </div>
              </Item>
              <Item> <BiSolidCity size={23} color='white' /> <p className='text-white ml-2'>Amparo, São Paulo</p></Item>
              <Item>
                <Button variant="text" color='secondary' href='https://www.linkedin.com/in/lucasgaspari2004/' target='_blank'>Linkedin</Button>
                <Button variant="text" color='secondary' href='https://github.com/gasparinh0' target='_blank'>Github</Button>
                <Button variant="text" color='secondary' href='mailto:lucas.gaspari2004@gmail.com' target='_blank'>Email</Button>
              </Item>
            </Stack>
          </Box>

        </div>

        <div className="w-3/6 h-auto bg-[#1e1e1f] border-solid border border-white shadow-2xl rounded-xl">
          <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider', display: 'flex', justifyContent: 'center' }}>
              <Tabs value={value} onChange={handleChange} aria-label="secondary tabs example" textColor="secondary" indicatorColor="secondary">
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
              <SobreMim />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
              <Formacao />
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

export default HomePage;