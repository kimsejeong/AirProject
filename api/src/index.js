import koa from 'koa'
import path from 'path'
import router from './routes/routes.js'
import koaBody from 'koa-body'
import cors from '@koa/cors'
import compose from 'koa-compose'
import jsonutil from 'koa-json'
import helmet from 'koa-helmet'
import statics from 'koa-static'
import compress from 'koa-compress'

const app = new koa()
const __dirname = path.resolve();
const isDevMode = process.env.NODE_ENV === 'production' ? false : true
/**
 * 使用koa-compose 集成中间件
 */
const middleware = compose([
  koaBody(),
  cors(),
  jsonutil({ pretty: false, param: 'pretty' }),
  helmet(),
  statics(path.join(__dirname, '../public')),
])

if (!isDevMode) {
  app.use(compress())
}
app.use(middleware)
app.use(router())

app.listen(3001)