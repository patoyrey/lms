import { Request, Response } from "express"
import { Test } from "../models/Test"

export const addTestHandler = async (req: Request, res: Response) => {
    const test = new Test(req.body)
    const response = await test.add()
    return res.status(200).json(response)
}