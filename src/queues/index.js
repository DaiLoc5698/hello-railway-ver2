import Queue from 'bull';
import db from '../database';
import dotenv from 'dotenv'
dotenv.config();

const itemQueue = new Queue('item CURD', {
  redis: {
    port: Number.parseInt(process.env.REDIS_PORT),
    host: process.env.REDIS_ADDR,
    password: process.env.REDIS_PASSWORD
  }
})

const createJob = (options) => {
  itemQueue.add(options)
}

itemQueue.process((job, done) => {
  crudItem(job, done)
})

const crudItem = async (job, done) => {
  try {
    const payload = job.data
    await db('activities').insert(payload)
    done();
  } catch (e) {
    console.log('catch', e)
  }
}

export default { createJob }