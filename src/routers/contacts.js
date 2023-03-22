import express from 'express';
import contactsController from '../controllers/contacts'

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const contacts = await contactsController.gets()
    res.send(contacts)
  } catch (e) {
    res.status(e?.statusCode || 500).send(e?.message || 'Something went wrong')
  }
})

router.post('/', async (req, res) => {
  try {
    const payload = req.body
    const id = await contactsController.create(payload)

    res.send({id})
  } catch (e) {
    res.status(e?.statusCode || 500).send(e?.message || 'Something went wrong')
  }
})

router.get('/:id', async (req, res) => {
  try {
    const contact = await contactsController.get(req.params.id)
    res.send({contact})
  } catch (e) {
    res.status(e?.statusCode || 500).send(e?.message || 'Something went wrong')
  }
})

router.put('/:id', async (req, res) => {
  try {
    const payload = req.body
    const contactId = req.params.id
    const contact = await contactsController.update(contactId, payload)

    res.send({contact})
  } catch (e) {
    res.status(e?.statusCode || 500).send(e?.message || 'Something went wrong')
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const contactId = req.params.id
    const contact = await contactsController.del(contactId)

    res.send({contact})
  } catch (e) {
    res.status(e?.statusCode || 500).send(e?.message || 'Something went wrong')
  }
})

export default router