import { Container, Box } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';

const ResultImage = ({ imageURL }) => {
  return (
    <Container sx={{ display: 'flex', justifyContent: 'center', mt: '2rem' }}>
      <Box
        component='img'
        sx={{
          height: '350px',
          width: '350px',
          borderRadius: '20px',
          boxShadow: '3',
          mb: '2rem',
        }}
        alt='The result image'
        src={imageURL}
      ></Box>
      <DownloadIcon styles={{ cursor: 'pointer' }} />
    </Container>
  );
};

export default ResultImage;
