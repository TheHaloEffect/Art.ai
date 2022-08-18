import LoadingButton from '@mui/lab/LoadingButton';
import ImageSearchIcon from '@mui/icons-material/ImageSearch';

const Button = ({ isLoading, onHandleSubmit }) => {
  return (
    <LoadingButton
      sx={{ my: '1rem', borderRadius: '20px', boxShadow: '3' }}
      onClick={(e) => onHandleSubmit(e)}
      variant='contained'
      color='primary'
      loading={isLoading}
      loadingPosition='start'
      startIcon={<ImageSearchIcon />}
    >
      {isLoading ? 'Generating...' : 'Generate Image'}
    </LoadingButton>
  );
};

export default Button;
