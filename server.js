const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send({ test: "server" });
});

const port = 5050;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
