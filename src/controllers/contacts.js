import db from '../database'
import activitiesController from './activities'

const create = async (payload) => {
  try {
    const id = await db('contacts').insert(payload)
    activitiesController.create(id[0], 'POST', 'contacts')

    return id[0];
  } catch (e) {
    throw e
  }
}

const update = async (id, payload) => {
  try {
    await db('contacts').where({ id: id }).update(payload)

    const contact = await db('contacts').where({ id: id })
    activitiesController.create(id, 'PUT', 'contacts')

    return contact;
  } catch (e) {
    throw e
  }
}

const del = async (id) => {
  try {
    await db('contacts').where({ id: id }).del()
    activitiesController.create(id, 'DELETE', 'contacts')
    return id
  } catch (e) {
    throw e
  }
}

const gets = async () => {
  try {
    const contacts = await db('contacts')
    return contacts
  } catch (e) {
    throw e;
  }
}

const get = async (id) => {
  try {
    const contact = await db('contacts').where({ id: id })
    return contact
  } catch (e) {
    throw e;
  }
}

export default {
  get,
  del,
  gets,
  create,
  update
};