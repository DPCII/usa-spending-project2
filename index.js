const express = require('express')
const app = express()
const parser = require('body-parser');

// Requiring controllers
const personRoutes = require('./routes/person');
const showRoutes = require('./routes/show');

// The coded needed to make body-parser work.
app.use(parser.urlencoded({extended: true}))
app.use(parser.json());

// Instantiating controllers
app.use('/api/person/', personRoutes)
app.use('/api/show/', showRoutes)

app.listen(4000, () => console.log('Server running on port 4000!'))