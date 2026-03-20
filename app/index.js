import dotenv from "dotenv";
dotenv.config();
import express from "express";
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

import { connectDB } from "../connectDB.js";
connectDB();

//This is the get Hello world request
app.get("/", (req, res) => {
    res.send("Hello World!")
})

import putRouter from "./routes/post.js";
import { connect } from "mongoose";
app.use("/post", putRouter)


app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});

