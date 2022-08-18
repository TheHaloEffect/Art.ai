import { Container, Box, Tooltip } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import { saveAs } from 'file-saver';

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
      <Tooltip title='Download image' arrow placement='right'>
        <DownloadIcon
          sw={{ cursor: 'pointer' }}
          style={{ cursor: 'pointer' }}
          onClick={() => saveAs(imageURL, 'output.jpg')}
        />
      </Tooltip>
    </Container>
  );
};

export default ResultImage;
