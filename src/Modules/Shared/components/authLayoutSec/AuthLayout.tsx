import { Box, Grid } from '@mui/material';
import mainAuthImg from '../../../../assets/authImages/mainAuthImg.png';
import bookLogo from '../../../../assets/authImages/Logo.png';
import { Outlet } from 'react-router-dom';

export default function AuthLayout() {
  return (
    <Box sx={{ width: '100%' }}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <Grid
          item
          xs={false}
          md={6}
          sx={{
            backgroundImage: `url(${mainAuthImg})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Box
          sx={{
            my: 8,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width:{xs: '85%', md: '75%'},
            maxWidth: '500px'
          }}
          >
            <img src={bookLogo} alt="book-logo" style={{marginBottom: '20px', width:'120px', height:'78px'}}/>
            <Outlet />
          </Box>
        </Grid>  
      </Grid>
    </Box>
  )
}
