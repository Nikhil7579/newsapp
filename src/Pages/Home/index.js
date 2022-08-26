import React, { useEffect, useState } from 'react'
import Container from '../../Components/Layout/Frontend/Container';
import { Button, CardActions, Typography, CardContent, Card, CardMedia, AppBar } from '@mui/material';
import { Grid } from '@mui/material';
import axios from 'axios';
import Toolbar from '@mui/material/Toolbar';
import styles from '../../Components/Layout/Frontend/Styles/header.module.css'




const Home = () => {
  const [news, updateNews] = useState([]);
  useEffect(()=>{
       show('business')
  },[])
  async function show(category) {
    const response = await axios.get(`https://saurav.tech/NewsAPI/top-headlines/category/${category}/in.json`);
    updateNews(response.data.articles);
    console.log(response)

  }
  return (
    <>
      <Container>
      <AppBar position='static' top="0px" sx={{minHeight: '35px'}} >
        <Toolbar  sx={{ backgroundColor: 'white' }}  className={styles.linkclass} >
          <Typography textAlign="center" component="div" sx={{ flexGrow: 1 }}>
            <Button style={{ color:'black', fontWeight: 'bold', fontSize: '14px' }} onClick={()=>show('business')}>BUSINESS</Button>
          </Typography>
          <Typography textAlign="center" component="div" sx={{ flexGrow: 1 }}>
            <Button  style={{  color: 'black', fontWeight: 'bold', fontSize: '14px' }} onClick={()=>show('entertainment')}>ENTERTAINMENT</Button>
          </Typography>
          <Typography textAlign="center" component="div" sx={{ flexGrow: 1 }}>
            <Button  style={{ color: 'black', fontWeight: 'bold', fontSize: '14px' }} onClick={()=>show('general')}>GENERAL</Button>
          </Typography>
          <Typography textAlign="center" component="div" sx={{ flexGrow: 1 }}>
            <Button  style={{  color: 'black', fontWeight: 'bold', fontSize: '14px' }} onClick={()=>show('health')}>HEALTH</Button>
          </Typography>
          <Typography textAlign="center" component="div" sx={{ flexGrow: 1 }}>
            <Button  style={{  color: 'black', fontWeight: 'bold', fontSize: '14px' }} onClick={()=>show('science')}>SCIENCE</Button>
          </Typography>
          <Typography textAlign="center" component="div" sx={{ flexGrow: 1 }}>
            <Button  style={{  color: 'black', fontWeight: 'bold', fontSize: '14px' }} onClick={()=>show('sports')}>SPORTS</Button>
          </Typography>
          <Typography textAlign="center" component="div" sx={{ flexGrow: 1 }}>
            <Button  style={{  color: 'black', fontWeight: 'bold', fontSize: '14px' }} onClick={()=>show('technology')}>TECHNOLOGY</Button>
          </Typography>
        </Toolbar>
      </AppBar>
    
{/*       
        <Button onClick={()=>show('business')}  >sports</Button>
        <Button onClick={()=>show('entertainment')}  >sports</Button>
        <Button onClick={()=>show('general')}  >sports</Button>
        <Button onClick={()=>show('health')}  >sports</Button>
        <Button onClick={()=>show('entersciencetainment')}  >sports</Button>
        <Button onClick={()=>show('entersciencetainment')}  >sports</Button> */}
        <br></br><br></br>
        {news.map((item, i) => {
          return (
            <>
              <Grid item xs={12} sm={5} md={3} m={2} ml={6} sx={{ float: 'left' }} key={i}>
                <Card sx={{ maxWidth: 270, maxHeight: 550 ,backgroundColor:'#E8F8F5'}} >
                  <CardMedia
                    component="img"
                    height="180"
                    width="250"
                    image={item.urlToImage}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div" sx={{ fontSize: '18px' }}>
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ fontSize: '12px' }}>
                      {item.content}
                    </Typography>
                  </CardContent>
                  <CardActions>
                  </CardActions>
                </Card>
              </Grid>
            </>
          )
        })}
      </Container>
    </>
  )
}

export default Home