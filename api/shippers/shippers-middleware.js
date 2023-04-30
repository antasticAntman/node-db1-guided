const db = require('../../data/db-config')
module.exports = {
  checkId,
  checkPayload,
}

async function checkId(req, res, next) {
  const shipper = await db('shipper').where('shipperid', req.params.id).first()
  if(!shipper){
    next({status:404, message:'that id does not exist'})
  } else {
    next()
  }
}

function checkPayload(req, res, next) {
  const {phone, shipperName} = req.body
  if(!phone || !shipperName) {
    next({status:422, message: 'Phone and ShipperName are required'})
  } else {
    next()
  }
}
