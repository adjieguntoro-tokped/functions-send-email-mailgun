const sendMailHandler = async (event, ctx) => {
  // only allow POST
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 403,
      body: 'Method Not Allowed';
    }
  }

  const payload = event.body;

  return {
    statusCode: 200,
    body: payload
  }
}

exports.handler = sendMailHandler;