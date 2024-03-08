import { Request, Response, request } from "express";
import { Patient } from "../models/Patient";
import { retrieveData, retrieveQuery } from "../utils/QueryFields";

export const retrievePatientHandler = async (req: Request, res: Response) => {
    const query = "SELECT * FROM patient ";
    const response = await retrieveData(query);

    console.log(response);
    return res.status(200).json(response)

};