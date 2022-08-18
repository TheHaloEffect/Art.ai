import axios from 'axios';

const getImage = async () => {
  const baseUrl = 'https://api.deepai.org/api/text2img';

  const headers = {
    headers: {
      'Api-Key': process.env.REACT_APP_API_KEY,
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
};
