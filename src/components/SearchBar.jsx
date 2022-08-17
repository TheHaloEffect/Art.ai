import { Box, TextField, Button, InputAdornment } from '@mui/material';
import PublishIcon from '@mui/icons-material/Publish';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
  return (
    <Box
      sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <TextField
        sx={{ mt: '4rem', width: '50%' }}
        id='standard-search'
        label='Search field'
        type='search'
        variant='standard'
        InputProps={{
          endAdornment: (
            <InputAdornment position='end'>
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
      <Button
        sx={{ mt: '1rem', borderRadius: '20px' }}
        onClick={() => {
          console.log('hello');
        }}
        variant='contained'
        color='primary'
        startIcon={<PublishIcon />}
      >
        Create Image
      </Button>
    </Box>
  );
};

export default SearchBar;
