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
import ResultImage from './ResultImage';

// For the API
const deepai = require('deepai');
deepai.setApiKey(process.env.REACT_APP_API_KEY);

const SearchBar = () => {
  const [inputValue, setInputValue] = useState(
    'An astronaut riding a horse in space'
  );
  const [resultImage, setResultImage] = useState(
    'https://api.deepai.org/job-view-file/7a9c2dae-03b0-46f8-b890-8891ef422178/outputs/output.jpg'
  );
  const [isError, setIsError] = useState(false);
  const [isApiError, setApiError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const onSearchAPI = async () => {
    try {
      const res = await deepai.callStandardApi('text2img', {
        text: inputValue,
      });
      setResultImage(res.output_url);
    } catch (err) {
      setApiError(true);
    }

    setIsLoading(false);
  };

  // When the value of the search bar changes, update the input value
  const onInputChange = (e) => {
    setInputValue(e.target.value);

    // The error message is removed if the user starts typing again
    if (isError && e.target.value.length > 0) {
      setIsError(false);
    }
    if (isApiError && e.target.value.length > 0) {
      setApiError(false);
    }
  };

  // When submit button is clicked, check if the input value is empty
  // If it is, show an error message otherwise, otherwise the loading starts
  const onHandleSubmit = (e) => {
    if (inputValue.length === 0) {
      setIsError(true);
    } else {
      setIsLoading(true);
      onSearchAPI();
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        mt: '2.5rem',
      }}
    >
      <TextField
        error={isError}
        style={{ width: '15rem' }}
        helperText={isError ? 'Please enter some text first' : ''}
        onChange={(e) => onInputChange(e)}
        disabled={isLoading}
        autoComplete='off'
        variant='standard'
        id='outlined-search'
        label='Enter text'
        type='search'
        defaultValue='An astronaut riding a horse in space'
        InputProps={{
          endAdornment: (
            <InputAdornment position='end'>
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />

      <Box>
        {/* This is my own Button component, not from Material UI */}
        <Button isLoading={isLoading} onHandleSubmit={onHandleSubmit} />

        {/* Show cancel icon when loading starts */}
        {isLoading ? (
          <Tooltip title='Cancel image generation' arrow placement='right'>
            <CancelIcon
              style={{
                cursor: 'pointer',
                display: 'inline-block',
              }}
              onClick={() => window.location.reload()}
            />
          </Tooltip>
        ) : null}
      </Box>

      {isLoading ? (
        <Typography variant='subtitle1'>
          This may take up to 2 minutes. Please wait.
        </Typography>
      ) : (
        ''
      )}
      {resultImage ? <ResultImage imageURL={resultImage} /> : ''}
    </Box>
  );
};

export default SearchBar;
