import LoadingButton from '@mui/lab/LoadingButton';
import PublishIcon from '@mui/icons-material/Publish';

const Button = ({ isLoading, onHandleSubmit }) => {
  return (
    <LoadingButton
      sx={{ my: '1rem', borderRadius: '20px' }}
      onClick={(e) => onHandleSubmit(e)}
      variant='contained'
      color='primary'
      loading={isLoading}
      loadingPosition='start'
      startIcon={<PublishIcon />}
    >
      {isLoading ? 'Generating...' : 'Generate Image'}
    </LoadingButton>
  );
};

export default Button;
