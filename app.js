const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');
const sequelize = require("./db");//require("./db")

const app = express();

app.use(bodyParser.json());


app.get("/", (req, res) => {
	res.sendfile(path.join(__dirname, "public", "index.html"));
	//res.send("index")
})


// Routes for /animals
//app.use("/animals", require("./routes/animals"));


// Set static folder
app.use(express.static(path.join("public")));


sequelize.sync({ alter: true });


// Start local server
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
	console.log(`Server is started on portn ${PORT}...`);

})