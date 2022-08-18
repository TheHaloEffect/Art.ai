exports.handler = async function (event, context) {
  console.log('event', event);
  console.log('context', context);

  const apiKey = process.env.API_KEY;

  try {
    return apiKey;
  } catch (err) {
    return { statusCode: 500, body: err.message };
  }
};
