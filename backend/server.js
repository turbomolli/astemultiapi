const express = require('express');
const fetch = require('node-fetch');
const app = express();
const PORT = 3000;

// array of apis to search
const apiUrls = [
    'http://api.hel.fi/linkedevents/v1/search/?format=json&q=',
    'https://api.finna.fi/api/v1/search?type=Title&field%5B%5D=title&field%5B%5D=images&field%5B%5D=urls&field%5B%5D=subjects&field%5B%5D=formats&lookfor='
];

app.get('/search', (req, res) => {

    let promises = [];
    const query = req.query.query;
    if (query) {

        apiUrls.forEach(url => {
            const promise = fetch(url + query);
            promises.push(promise);
        });

        Promise.all(promises).then(responses => {
            return Promise.all(responses.map(response => {
                return response.json();
            }));
        }).then(data => {
            console.log(data.length);
            res.json(data);
        }).catch(err => {
            console.log(err);
        });
        
    } else {
        res.json("error");
    }
    
});

app.listen(PORT, () => {
    console.log(`Listening port: ${PORT}`);
});