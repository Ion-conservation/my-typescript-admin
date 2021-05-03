/* 基于node.js的web 开发框架 */
// import express from 'express'
const express = require('express')
import { Response, Request } from 'express'

/* 解析中间件 对传入的请求体进行解析 */
import bodyParser from 'body-parser'
// const bodyParser = require('body-parser')
/* 跨域中间件 */
// import cors from 'cors'
const cors = require('cors')

const app = express()
const port = 8081

app.use(cors())
app.use(bodyParser.json({ limit: '20mb' }))
app.use(bodyParser.urlencoded({
    limit: '20mb',
    extended: false
}))

app.post('/login', (req: Request, res: Response) => {
    const { params } = req.body
    if (params.username === 'admin' && params.password === 'admin') {
        res.send(JSON.stringify({ code: 800, data: null, msg: "登录成功" }))
    } else {
        res.send(JSON.stringify({ code: 400, data: null, msg: "登录失败" }))
    }
})

app.listen(port, () => {
    console.log('listen')
})
