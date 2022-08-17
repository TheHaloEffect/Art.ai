import { Box, Typography, Container } from '@mui/material';

const Header = () => {
  return (
    <Container maxWidth='md' color='primary'>
      <Box
        bgcolor='primary.main'
        color='white'
        sx={{
          mt: '2rem',
          py: '2rem',
          px: '1.5rem',
          textAlign: 'center',
          borderRadius: '20px',
        }}
      >
        <Typography variant='h4' component='h1' gutterBottom>
          Text to Image using AI
        </Typography>
        <Typography variant='subtitle1' component='h2' gutterBottom>
          Enter text to generate an image using AI! Be silly but specific, such
          as "a ship sailing through fire" or "astronaut riding a horse in
          space"
        </Typography>
        <Typography variant='subtitle2' component='h2'>
          AI functionality provided by DeepAI API
        </Typography>
      </Box>
    </Container>
  );
};

export default Header;
