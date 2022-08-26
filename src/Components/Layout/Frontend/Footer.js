import React from 'react'
import { Box } from '@mui/system'
import { Grid, IconButton, Typography } from '@mui/material'
import { Container } from '@mui/system'
import { Link } from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Footer = () => {
  return (
    <>
      <Box sx={{ mt: 20,position:"fixed",bottom:0,width:'100%'  }} backgroundColor="rgba(12,12,12,1)" color="white">
        <Container maxWidth=''>
          <Grid container spacing={0} fontSize="13px">
            <Grid item xs={12} sm={2}>
              <Box ><img src='/assets/images/logo.png' alt='no_image' style={{
                height: '58px',
                minHeight: '48px',
                maxHeight: '47px',
                marginTop:"8px"
              }} /></Box>
              <Box >
              </Box>

            </Grid>
            <Grid item xs={12} sm={1} sx={{m:1,p:1}}> 
              <Box >
                <Link href='/' color='inherit' sx={{textDecoration:'none'}}>About Us</Link>
              </Box>
              <Box >
                <Link href='/' color='inherit'sx={{textDecoration:'none'}}>RSS</Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={2} sx={{m:1,p:1}}>
              <Box >
                <Link href='/' color='inherit' sx={{textDecoration:'none'}}>Cookie Policy</Link>
              </Box>
              <Box >
                <Link href='/' color='inherit' sx={{textDecoration:'none'}}>Complainet Redressal</Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={2} sx={{m:1,p:1}}>
              <Box >
                <Link href='/' color='inherit' sx={{textDecoration:'none'}}>Disclaimer</Link>
              </Box>
              <Box >
                <Link href='/' color='inherit' sx={{textDecoration:'none'}}>Adverties with Us</Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={2} sx={{m:1,p:1}}>
              <Box >
                <Link href='/' color='inherit' sx={{textDecoration:'none'}} >Contact Us</Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={2} sx={{m:1}}>
                <Box >
                  <Typography variant='p' sx={{fontSize:'11px'}}>Follows us on</Typography>
                  <IconButton >
                  <FacebookIcon sx={{color:'#4267B2',width:'30px',height:'30px'}} />
                  <TwitterIcon sx={{color:'#1DA1F2',width:'30px',height:'30px'}} />
                  <InstagramIcon sx={{color:'#405DE6',width:'30px',height:'30px'}} />
                  <WhatsAppIcon sx={{color:'#128C7E',width:'30px',height:'30px'}} />
                  </IconButton>
                </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

    </>
  )
}

export default Footer