import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <Box
        sx={{
          width: '100%',
          height: '105px',
          backgroundImage: 'url(/assets/images/backgroung_4.png)',
          justifyContent: 'space-between',
          display: 'flex',
        }}>
        <img src="/assets/images/logo.png" alt="" style={{
          display: 'flex',
          height: '58px',
          minHeight: '48px',
          maxHeight: '47px',
          alignSelf: "center",
        }}  />
      </Box>
      </>

  );
};
export default Header;
