import express from 'express';
import logRequestDetails from './middleware/logRequestDetails.js';

const app = express();
const port = 5000;
const hostname = "localhost";

app.use(logRequestDetails);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/about', (req, res) => {
    res.send("About Page")
})

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});