const db = require('../../data/db-config')
module.exports = {
  get,
  getById,
  create,
  update,
  remove,
}

async function get() {
  // const result = await db.raw('select * from shippers')
  const result = await db('shippers')
  return result
}

async function getById(shipperId) {
  const result = await db('shippers').where('shipperid',shipperId)
  return result
}

async function create(shipper) {
  const [shipperId] = await db('shipper').insert(shipper)
  const result = await getById(shipperId)
  return result
}

async function update(shipperId, changes) {
  await db('shipper').update(changes).where('shipperid', shipperId)
  const result = await getById(shipperId)
  return result
}

async function remove(shipperId) {
  await db('shipper').del().where('shipperid', shipperId)
  const result = await getById(shipperId)
  return result
}
