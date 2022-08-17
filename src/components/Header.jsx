import { Box, Typography, Container, AppBar, Toolbar } from '@mui/material';
import ImageSearchIcon from '@mui/icons-material/ImageSearch';
import SearchBar from './SearchBar';

const Header = () => {
  return (
    <div>
      <AppBar sw={{ color: 'white' }} position='relative'>
        <Toolbar>
          <ImageSearchIcon sx={{ mr: 2 }} />
          <Typography variant='h6'>Text to Image</Typography>
        </Toolbar>
      </AppBar>

      <Container maxWidth='md' sx={{ mt: '5rem', textAlign: 'center' }}>
        <Box>
          <Typography variant='h4' component='h1' gutterBottom>
            Text to Image using AI
          </Typography>
          <Typography variant='subtitle1' component='h2' gutterBottom>
            Enter text to generate an image using AI! Enter anything from "pink
            trees" to "dog with a gun"
          </Typography>
          <Typography variant='subtitle2' component='h2'>
            AI functionality provided by DeepAPI
          </Typography>
        </Box>
        <SearchBar />
      </Container>
    </div>
  );
};

export default Header;
