import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import team from '../../../assets/images/team1.png'

export default function ActionAreaCard(props) {
  return (
    <Card sx={{ backgroundColor:'#E8F4FD', height:'18vh' }}>
      <CardActionArea sx={{display:'flex', height:'100%'}}>
        <CardContent sx={{display:'flex', flexDirection:'column', width: '37rem',alignItems:'center'}}>
        <CardMedia
          component="img"
          image={props.src}
        />
        <Typography sx={{fontSize: '1rem'}}>{props.name}</Typography>
        <Typography sx={{fontSize: '0.8rem'}}>Designation here</Typography>
        </CardContent>
        <CardContent>
          <Typography variant="body2" color="text.secondary" fontSize={'0.8rem'}>
          Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

