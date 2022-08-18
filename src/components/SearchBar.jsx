import {
  Box,
  TextField,
  InputAdornment,
  Typography,
  Tooltip,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CancelIcon from '@mui/icons-material/Cancel';

import { useEffect, useState } from 'react';
import Button from './Button';
import ResultImage from './ResultImage';
import axios from 'axios';

// For the API
const deepai = require('deepai');
deepai.setApiKey(process.env.API_KEY);

const SearchBar = () => {
  const [inputValue, setInputValue] = useState(() => {
    // Looks for the input value in the local storage
    const saved = localStorage.getItem('textInput');
    const initialValue = JSON.parse(saved);
    return initialValue || '';
  });

  const [resultImage, setResultImage] = useState('');
  const [isError, setIsError] = useState(false);
  const [isApiError, setApiError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    localStorage.setItem('textInput', JSON.stringify(inputValue));
  }, [inputValue]);

  // const onSearchAPI = async () => {
  //   try {
  //     const res = await deepai.callStandardApi('text2img', {
  //       text: inputValue,
  //     });
  //     setResultImage(res.output_url);
  //   } catch (err) {
  //     setApiError(true);
  //   }

  //   setIsLoading(false);
  // };

  const onSearchAPI = async () => {
    const baseUrl = 'https://api.deepai.org/api/text2img';

    const headers = {
      headers: {
        'Api-Key': process.env.API_KEY,
        'Content-Type': 'multipart/form-data',
      },
    };

    const data = {
      text: inputValue,
    };

    try {
      const res = await axios.post(baseUrl, data, headers);
      console.log(res);
      setResultImage(res.data.output_url);
    } catch (err) {
      setApiError(true);
    }

    setIsLoading(false);
  };

  // When the value of the search bar changes, update the input value
  const onInputChange = (e) => {
    setInputValue(e.target.value);

    // Error messages are removed if the user starts typing again
    if (isError && e.target.value.length > 0) {
      setIsError(false);
    }
    if (isApiError && e.target.value.length > 0) {
      setApiError(false);
    }

    if (isApiError && isLoading) {
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
        style={{
          width: '320px',
          minWidth: '150px',
        }}
        helperText={isError ? 'Please enter some text first' : ''}
        onChange={(e) => onInputChange(e)}
        disabled={isLoading}
        autoComplete='off'
        variant='standard'
        id='outlined-search'
        label='Enter text'
        type='search'
        defaultValue={inputValue}
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

      {isApiError ? (
        <Typography color='red' variant='subtitle1'>
          Issue with the API. Please try again.
        </Typography>
      ) : (
        ''
      )}

      {isLoading ? (
        <Box sw={{ backgroundColor: 'red' }}>
          <Typography variant='subtitle1'>
            This may take up to 2 minutes. Please wait.
          </Typography>
        </Box>
      ) : (
        ''
      )}
      {resultImage ? <ResultImage imageURL={resultImage} /> : ''}
    </Box>
  );
};

export default SearchBar;
