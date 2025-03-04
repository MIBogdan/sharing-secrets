const e = require("express");
const axios = require("axios");

const app = e();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com/random";

app.use(e.static("public/"));

app.get("/", async (req, res) => {
  try {
    const result = await axios.get(API_URL);
    res.render("index.ejs", { data: result.data });
  } catch {
    res.render("index.ejs", { data: { secret: "No secret available", username: "Unknown User" } });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
