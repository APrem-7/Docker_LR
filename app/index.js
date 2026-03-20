require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT;

app.use(express.json());


//This is the get Hello world request
app.get("/", (req, res) => {
    res.send("Hello World!")
})

import putRouter from "./routes/post.js";
app.use("/post", putRouter)


app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});