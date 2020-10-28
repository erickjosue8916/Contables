import { Router } from 'express'
import test from './test'
import { ping } from '../../services/response'

const router = new Router()

router.use('/test', test)

router.get('/ping', (req, res) => ping(res))

export default router
