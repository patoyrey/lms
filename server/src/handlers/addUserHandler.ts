import { Request, Response} from 'express'
import { User } from '../models/User'

export const addUserHandler = async (req: Request, res: Response) => {
    const user = new User(req.body)
    const response = await user.add()
    return res.status(200).json(response)
}