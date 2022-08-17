import { useEffect } from 'react';
const deepai = require('deepai');

deepai.setApiKey(process.env.REACT_APP_API_KEY);

const SearchAPI = (inputValue) => {
  useEffect(() => {
    const search = async () => {
      const res = await deepai.callStandardApi('text2img', {
        text: inputValue,
      });
      console.log(res);
    };

    search();
  }, [inputValue]);
};

export default SearchAPI;
