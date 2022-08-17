import { AppBar, Toolbar, Typography } from '@mui/material';
import ImageSearchIcon from '@mui/icons-material/ImageSearch';

const HeaderBar = () => {
  return (
    <AppBar sw={{ color: 'white' }} position='relative'>
      <Toolbar>
        <ImageSearchIcon sx={{ mr: 2 }} />
        <Typography variant='h6'>Text to Image</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default HeaderBar;
