import { Box, Typography, Container, Link } from '@mui/material';

const Header = () => {
  return (
    <Container maxWidth='md' color='primary'>
      <Box
        bgcolor='#0047AB'
        color='white'
        sx={{
          mt: '2rem',
          py: '2rem',
          px: '1.5rem',
          textAlign: 'center',
          borderRadius: '20px',
          boxShadow: '6',
        }}
      >
        <Typography
          variant='h4'
          component='h1'
          sw={{ fontSize: '5rem' }}
          gutterBottom
        >
          Welcome to Art.ai
        </Typography>
        <Typography variant='subtitle1' component='h2' gutterBottom>
          Enter text to generate an image using AI! Be silly but specific, such
          as "a ship sailing through fire" or "green water tornado"
        </Typography>
        <Typography variant='subtitle2' component='h2'>
          AI functionality provided by DeepAI API -
          <Link
            style={{ marginLeft: '5px' }}
            href='https://deepai.org/machine-learning-model/text2img'
            color='inherit'
          >
            Link
          </Link>
        </Typography>
      </Box>
    </Container>
  );
};

export default Header;
