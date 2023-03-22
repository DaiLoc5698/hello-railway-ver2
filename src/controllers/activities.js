import moment from 'moment'
import queues from '../queues'

const create = (item_id, type, collection) => {
  try {
    queues.createJob({
      type,
      item_id,
      collection,
      created_at: moment().format('YYYY-MM-DD HH:mm:ss'),
    })
  } catch (e) {
    throw e
  }
}

export default {
  create
}