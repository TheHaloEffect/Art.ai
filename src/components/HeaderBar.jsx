import { AppBar, Toolbar, Box } from '@mui/material';
import logo from '../images/logo-50x50.png';

// For the AppBar on the top of the page
const HeaderBar = () => {
  return (
    <AppBar sw={{ color: 'white' }} position='relative'>
      <Toolbar>
        <Box
          as='img'
          src={logo}
          alt='logo'
          sw={{ height: '50px', width: '50px' }}
        ></Box>
      </Toolbar>
    </AppBar>
  );
};

export default HeaderBar;
