require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT;

app.use(express.json());


//This is the get Hello world request
app.get("/", (req, res) => {
    res.send("Hello World!")
})



app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});