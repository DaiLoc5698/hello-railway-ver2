import express from 'express';
import contactsRouter from './routers/contacts'

const app = express();

app.use('/contacts', contactsRouter)

app.use("/", (req, res) => {
  res.send('welcome to the server home page')
})

app.listen(process.env.PORT || 8080, () => {
  console.log('backend running')
})