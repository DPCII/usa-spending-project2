const express = require('express');
const app = express();
const parser = require('body-parser');

// Requiring controllers
const summaryRoutes = require('./routes/summary');
const objectClassRoutes = require('./routes/majorclass');

// The coded needed to make body-parser work.
app.use(parser.urlencoded({extended: true}))
app.use(parser.json());

// Instantiating controllers
app.use('/api/agency_summary/', summaryRoutes);
app.use('/api/object_class/', objectClassRoutes);

app.listen(4000, () => console.log('Server running on port 4000!'))