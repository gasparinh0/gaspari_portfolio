import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import cardImage1 from '../img/cards/front-end-card.jpg';
import cardImage2 from '../img/cards/ui-ux-card.jpg';
import cardImage4 from '../img/cards/design-card.png';

export default function abilityCard() {
    return(
        <>
                <Card sx={{ maxWidth: 290, backgroundColor: '#303236', color: 'white' }}>
                  <CardMedia
                    component="img"
                    alt="programacaoweb"
                    height="140"
                    image={cardImage1}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Desenvolvimento Front-end
                    </Typography>
                    <Typography variant="body2" color="white">
                      Meu principal foco no mundo do desenvolvimento, trabalhando no design de aplicações.
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
                      UI / UX
                    </Typography>
                    <Typography variant="body2" color="white">
                      Toda aplicação na qual faço, padronizo sempre o User Experience, para que os usuários se sintam confortáveis usando a aplicação.
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
                      Design geral
                    </Typography>
                    <Typography variant="body2" color="white">
                      Possuo um conhecimento avançado em design, pensando sempre nos padrões da atualidade e fazendo aplicações com design atual e com um visual agradável.
                    </Typography>
                  </CardContent>
                </Card>
        </>
    )
}