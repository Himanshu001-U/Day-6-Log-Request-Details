
const logRequestDetails = (req, res, next) => {

  const now = new Date();
  const date = now.toLocaleDateString();
  const time = now.toLocaleTimeString();

    console.log(`Date: ${date} Time: ${time} Request-Method: ${req.method} EndPoint: ${req.url} - IP: ${req.ip}`);

    next();
}

export default logRequestDetails;