import { Request, Response } from "express";
import { queryFields } from "../utils/QueryFields";
import { Test } from "../models/Test";

export const RetrieveFieldTestHandler = async (req: Request, res: Response) => {
  const test = "select * from test  where test_id= ?";
  const fielquery =
    "select field.*,testfields.testfields_row,testfields.testfields_id from testfields inner join field on testfields.fields_id = field.field_id where testfields.test_id = ? order by cast(testfields_row as signed) ";

  const { props } = req.body;
  const testresponse = (await queryFields(test, props)) as Test[];
  const field = await queryFields(fielquery, props);
  const response = {
    ...testresponse[0],
    field,
  };

  console.log("Response of test Fields", response);
  return res.status(200).json(response);
};
