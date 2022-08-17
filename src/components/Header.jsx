import { Box, Typography, Container } from '@mui/material';

const Header = () => {
  return (
    <div>
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
            AI functionality provided by DeepAI API.
          </Typography>
        </Box>
      </Container>
    </div>
  );
};

export default Header;
