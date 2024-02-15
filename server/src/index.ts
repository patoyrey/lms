require('dotenv').config();
import express, { Express } from 'express'
import { connect } from './utils/schema';

const app: Express = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))


const port = process.env.PORT ?? 5000

app.listen(port, () => {
    console.log(`Running ${port}...`)
    connect()
})