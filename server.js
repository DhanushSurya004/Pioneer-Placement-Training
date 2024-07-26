
const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'Home.html'));
});

app.get('/aptitude', (req, res) => {
    res.sendFile(path.join(__dirname, 'aptitude.html'));
});

app.get('/api/aptitude', async (req, res) => {
    try {
        const response = await axios.get('https://api.example.com/aptitude');
        res.json(response.data);
    } catch (error) {
        res.status(500).send('Error fetching data from the API');
    }
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
