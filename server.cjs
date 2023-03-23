const express = require("express");
const cors = require("cors");
const axios = require("axios")
require("dotenv").config()


const app = express();
app.use(cors());
app.use(express.json());

app.get("/message", async (req, res) => {
  const news = await axios.get(`https://newsapi.org/v2/everything?q=cryptocurrency&sortBy=popularity&apiKey=${process.env.API_KEY}`)
    .then(response => response.data)
  console.log(news)
  res.json(news);
});

app.listen(8000, () => {
  console.log(`Server is running on port 8000.`);
});