const express = require('express')
const app = express()
const port = 3000
const router = express.Router()
const path = require('path')

app.use(express.static(path.join(__dirname, 'public')));
const publicPath = path.join(__dirname, 'public');

router.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "/"));
});

app.get('/', (req, res) => {
  res.sendFile(publicPath + '/index.html')
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})