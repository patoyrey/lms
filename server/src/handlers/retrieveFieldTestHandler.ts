import { Request, Response } from "express";
import { queryFields } from "../utils/QueryFields";

export const RetrieveFieldTestHandler = async (req: Request, res: Response) => {
  const test = "select * from test  where test_id= ?";
  const fielquery =
    "select field.* from testfields inner join field on testfields.fields_id = field.field_id where testfields.test_id = ?";

  const { props } = req.body;
  const testresponse = await queryFields(test, props);
  const field = await queryFields(fielquery, props);
  const response = {
    testresponse,
    field,
  };

  console.log("Response of test Fields", response);
  return res.status(200).json(response);
};
