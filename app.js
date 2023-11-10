const _express = require('express');
const _path = require('path');

const app = _express();

app.use(_express.static('.src/public'));

app.get('/', (req, res) => {
    res.sendFile(_path.resolve(__dirname, './src/index.html'));
});

app.all('*', (req, res) => {
    res.status(404).send('Resource not found');
});

app.listen(5050, () =>{
    console.log('server is listening on port 5050...');
});

