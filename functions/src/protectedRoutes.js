import jwt from 'jsonwebtoken'
import { secret_key } from '../service_account.js'

export function getSecrets(req, res) {
  const decoded = jwt.verify(req.headers.authorization, secret_key)
  // if(!decoded) {
  //   res.status(403).send({ message: 'Not authorized!' })
  //   return
  // }
  res.send({ message: 'Buy Bitcoin Weekly!' })
}