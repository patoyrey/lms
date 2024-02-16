require('dotenv').config();
import express, { Express } from 'express'
import { connect } from './utils/schema';
import { routes } from './routes';

const app: Express = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api', routes)

const port = process.env.PORT ?? 5000

app.listen(port, () => {
    console.log(`Running ${port}...`)
    connect()
})