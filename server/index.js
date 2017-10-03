const express = require('express'),
      bodyParser = require('body-parser'),
      cors = require('cors'),
      axios = require('axios'),
      app = express(),
      port = 3001;

app.use(cors());
app.use(bodyParser.json());

app.get('/catchemall', (req, res) => {
  axios.get('https://pokeapi.co/api/v2/pokemon?limit=1000')
  .then(response => {
    res.status(200).send(response.data.results);
  })
});

app.get('/catchone/:id', (req, res) => {
  axios.get(`https://pokeapi.co/api/v2/pokemon/${req.params.id}`)
  .then(response => {
    const responseData = response.data;
    console.log('server responseData', responseData);
    res.status(200).send(responseData);
  })
});

app.listen(port, _ => {
  console.log(`Listening on port ${port}`);
});