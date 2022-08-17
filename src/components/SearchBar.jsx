import {
  Box,
  TextField,
  InputAdornment,
  Typography,
  Tooltip,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CancelIcon from '@mui/icons-material/Cancel';

import { useState } from 'react';
import Button from './Button';

const SearchBar = () => {
  const [inputValue, setInputValue] = useState('');
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // When the value of the search bar changes, update the input value
  const onInputChange = (e) => {
    setInputValue(e.target.value);

    // The error message is removed if the user starts typing again
    if (isError && e.target.value.length > 0) {
      setIsError(false);
    }
  };

  // When submit button is clicked, check if the input value is empty
  // If it is, show an error message otherwise, otherwise the loading starts
  const onHandleSubmit = (e) => {
    if (inputValue.length === 0) {
      setIsError(true);
    } else {
      console.log(inputValue);
      setIsLoading(true);
    }
  };

  return (
    <Box
      sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <TextField
        error={isError}
        helperText={isError ? 'Please enter some text first' : ''}
        onChange={(e) => onInputChange(e)}
        disabled={isLoading}
        sx={{ mt: '4rem' }}
        id='standard-search'
        label='Enter text'
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

      {/* This is my own Button component, not from Material UI */}
      <Button isLoading={isLoading} onHandleSubmit={onHandleSubmit} />

      {/* Show cancel icon when loading starts */}
      {isLoading ? (
        <Tooltip title='Cancel image generation' arrow placement='right'>
          <CancelIcon
            style={{ marginBottom: '1rem', cursor: 'pointer' }}
            onClick={() => setIsLoading(false)}
          />
        </Tooltip>
      ) : null}

      {isLoading ? (
        <Typography variant='subtitle1'>
          This may take a minute or 2. Please wait.
        </Typography>
      ) : (
        ''
      )}
    </Box>
  );
};

export default SearchBar;
