const express = require("express");
const app = express();
const cors = require("cors");
const port = 3005;
app.use(express.static("."));
app.use(cors());

app.get("/ping", (req, res) => {
	res.status(200).send("pong");
});

app.listen(port, () => {
	console.log("hosting", port);
});
