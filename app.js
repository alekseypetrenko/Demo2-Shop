const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const sequelize = require("./db");

const app = express();

app.use(bodyParser.json());


app.use("/", express.static(path.join("public")));

// Routes for /animals
app.use("/animals", require("./modules/animals/animals.routes"));

// Test pagination
app.use("/next", require("./modules/pagination/pagination.router"));
app.use("/prev", require("./modules/pagination/pagination.router"));



const users = [
	{ id: 1, name: "One" },
	{ id: 2, name: "sf" },
	{ id: 3, name: "rf" },
	{ id: 4, name: "drtfgh" },
	{ id: 5, name: "jtyguj" },
	{ id: 6, name: "68" },
	{ id: 7, name: "786" },
	{ id: 8, name: "67878" },
	{ id: 9, name: "One" },
	{ id: 10, name: "kjyu" },
	{ id: 11, name: "One" },
	{ id: 12, name: "ikjygu" },
	{ id: 13, name: "8ti78" },
	{ id: 14, name: "One" },
	{ id: 15, name: "One" },
	{ id: 16, name: "yi8tg8" },
	{ id: 17, name: "Onr67878e" },
	{ id: 18, name: "8iyg" },
	{ id: 19, name: "678it67i" },
]


app.use("/users", pagination(users), (req, res) => {
	res.json(res.paginatedResults)
})
function pagination(model) {
	return (req, res, next) => {
		
		const page = parseInt(req.query.page);
		const limit = parseInt(req.query.limit);

		const startIndex = (page - 1) * limit;
		const endIndex = page * limit;

		const results = {};

		if (endIndex < model.length) {
			results.next = {
				page: page + 1,
				limit: limit
			}
		}

		if (startIndex > 0) {
			results.prev = {
				page: page - 1,
				limit: limit
			}
		}
		results.results = model.slice(startIndex, endIndex)


		res.paginatedResults = results;
		next();
	}
}














sequelize.sync({ alter: true });

// Start local server
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
	console.log(`Server is started on portn ${PORT}...`);

})