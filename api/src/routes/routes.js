import combineRoutes from 'koa-combine-routers'

import publicRouter from './publicRouter.js'

export default combineRoutes(publicRouter)