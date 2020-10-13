import { Router } from 'express'

import { createOrphan, listOrphans, listOrphanById } from '../controllers/orphansController'

const routes = Router()

routes.post('/orphans', createOrphan)
routes.get('/orphans', listOrphans)

routes.get('/orphans/:orphan_id', listOrphanById)

export default routes