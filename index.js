const express = require("express");
const bodyParser = require("body-parser")
const router  = require("./routes/router");

const PORT = 5000;
const app = express();
app.use(express.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use((req, res, next) => {
    console.log(`URL: ${req.url} + Method: ${req.method}`);
    next()
})

app.use("/",router)

app.listen(PORT, () => {
  console.log(`app listen on port ${PORT}`);
});
