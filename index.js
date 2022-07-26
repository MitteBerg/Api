const express = require('express');
const PORT = process.env.PORT || 8080;
const app = express();

app.use(express.json())

app.get('/tshirt', (req, res) => {
    res.status(200).send({
        tshirt: '👕',
        size: 'L',
  })
});

app.post('/tshirt/:id', (req, res) => {
  const {id} = req.params;
  const {logo} = req.body;

    if (!logo)
    {
        res.status(418).send({ message :'Missing logo'});
    }

    res.send({
        tshirt: '👕 with ${logo}  and id ${id}',
    });
});

app.listen(PORT, () => 
  console.log(`Server is listening on port http://localhost:${PORT}`)
);
