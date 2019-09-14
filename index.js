const express = require('express');
const app = express();
const parser = require('body-parser');
const cors = require('cors');
const path = require('path');

// Requiring controllers
const summaryRoutes = require('./routes/summary');
const objectClassRoutes = require('./routes/majorclass');
const minorObjectClassRoutes = require('./routes/minorclass');

// Cross-origin!
app.use(cors())

// The coded needed to make body-parser work.
app.use(parser.urlencoded({extended: true}))
app.use(parser.json());

// Instantiating controllers
app.use('/api/agency_summary', summaryRoutes);
app.use('/api/object_class', objectClassRoutes);
app.use('/api/minor_object_class', minorObjectClassRoutes);
app.get('/index.html', (req, res) => { res.sendFile(path.join(__dirname+'/index.html')) })

app.get("/", (req, res) => {
    res.redirect("/api/agency_summary");
});

app.set("port", process.env.PORT || 8080);

app.listen(app.get("port"), () => {
  console.log(`PORT: ${app.get("port")}`);
});