/* 基于node.js的web 开发框架 */
import express from 'express'
import { Response, Request } from 'express'

/* 解析中间件 对传入的请求体进行解析 */
import bodyParser from 'body-parser'
/* 跨域中间件 */
import cors from 'cors'

/**
 * Route params
 * POST req.body
 * GET  req.query
 * URL片段 /login/name/zou/age/18   /login/name/:name/age/:age  req.params  - . 都可以分割参数
 * */ 

const app = express()
const port = 8081

app.use(cors())
app.use(bodyParser.json({ limit: '20mb' }))
app.use(bodyParser.urlencoded({
    limit: '20mb',
    extended: false
}))

app.post('/login', (req: Request, res: Response) => {
    console.log(req.body.params)
    res.send('hello')
})
// app.get('/login', (req: Request, res: Response) => {
//     console.log(req.query)
//     res.send('hello')
// })
app.get('/login/name/:name/age/:age', (req: Request, res: Response) => {
    console.log('---', req.params)
    res.send('hello')
})

app.listen(port, () => {
    console.log('listen')
})
