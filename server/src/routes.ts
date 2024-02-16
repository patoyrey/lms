import express from 'express'
import { addUserHandler } from './handlers/addUserHandler'

export const routes = express.Router()

routes.post('/add-user', addUserHandler)
