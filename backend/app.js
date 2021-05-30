const express = require("express");
const app = express();

require("dotenv/config");
const api = process.env.API_URL;

// Middleware
app.use(express.json());

app.get(`${api}/products`, (req, res) => {
  const product = {
    id: 1,
    title: "T-shirt",
    image: "img_url",
  };
  res.send(product);
});

app.post(`${api}/products`, (req, res) => {
  const product2 = req.body;
  console.log(product2);
  res.send(product2);
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
