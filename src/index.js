import express from 'express';

const app = express();

app.get("/contacts", (req, res) => {
  res.send('contacts')
})

app.use("/", (req, res) => {
  res.send('welcome to the server home page')
})

app.listen(process.env.PORT || 8080, () => {
  console.log('backend running')
})