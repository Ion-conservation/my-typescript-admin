/* 基于node.js的web 开发框架 */
// import express from 'express'
const express = require('express')
import { Response, } from 'express'

/* 解析中间件 对传入的请求体进行解析 */
// import bodyParser from 'body-parser'
/* 跨域中间件 */
// import cors from 'cors'
const cors = require('cors')

const app = express()
const port = 8081

app.use(cors())
// app.use(bodyParser.json({ limit: '20mb' }))
// app.use(bodyParser.urlencoded({
//     limit: '20mb',
//     extended: false
// }))

app.get('/login', (req: Request, res: Response) => {
    res.send(JSON.stringify({ code: 800, data: null, msg: "登录成功" }))
})

app.listen(port, () => {
    console.log('listen')
})
