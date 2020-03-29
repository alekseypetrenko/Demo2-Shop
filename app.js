const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const sequelize = require("./db");//require("./db")

const app = express();

app.use(bodyParser.json());


app.use("/", express.static(path.join("public")));

// Routes for /animals
app.use("/animals", require("./modules/animals/animals.routes"));




sequelize.sync({ alter: true });

// Start local server
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
	console.log(`Server is started on portn ${PORT}...`);

})