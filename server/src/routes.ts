import express from 'express'
import { addUserHandler } from './handlers/addUserHandler'
import { addTestHandler } from './handlers/addTestHandler'

export const routes = express.Router()

routes.post('/add-user', addUserHandler)
routes.post('/add-test', addTestHandler)

