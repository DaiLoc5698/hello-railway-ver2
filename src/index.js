import express from 'express';
import db from './database/index';

const app = express();

app.get("/contacts", async (req, res) => {
  try {
    const contacts = await db('contacts')
    res.send(contacts)
  } catch(e) {
    res.status(e?.statusCode || 500).send(e?.message || 'Something went wrong')
  }

})

app.use("/", (req, res) => {
  res.send('welcome to the server home page')
})

app.listen(process.env.PORT || 8080, () => {
  console.log('backend running')
})