import db from '../database'

const create = async (payload) => {
  try {
    const id = await db('contacts').insert(payload)

    return id[0];
  } catch (e) {
    throw e
  }
}

const update = async (id, payload) => {
  try {
    await db('contacts').where({ id: id }).update(payload)

    const contact = await db('contacts').where({ id: id })

    return contact;
  } catch (e) {
    throw e
  }
}

const del = async (id) => {
  try {
    await db('contacts').where({ id: id }).del()

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