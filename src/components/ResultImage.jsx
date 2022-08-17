import { Container, Box } from '@mui/material';

const ResultImage = ({ imageURL }) => {
  return (
    <Container sx={{ display: 'flex', justifyContent: 'center', mt: '2rem' }}>
      <Box
        component='img'
        sx={{
          height: '250px',
          width: '250px',
          borderRadius: '20px',
          boxShadow: '3',
        }}
        alt='The result image'
        src={imageURL}
      ></Box>
    </Container>
  );
};

export default ResultImage;
