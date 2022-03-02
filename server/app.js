const express = require('express');
const cors = require('cors');
const app = express();


app.use(express.json());
app.use(cors());

// const Place = require('./models/place');

// Creating controllers Route
const placeRoutes = require('./controllers/places');
app.use('/', placeRoutes);


//Creating random place generator 




app.get('/', (req, res) => {
    res.send("Hello world!")
});



app.listen(3000, () => console.log(`Express departing now from port 3000!`));

module.exports = app;
