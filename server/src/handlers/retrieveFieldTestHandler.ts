import { Request, Response } from "express";
import { queryFields } from "../utils/QueryFields";
import { Test } from "../models/Test";
// interface TestResponseItem {
//   test_id: string;
//   test_name: string;
//   test_price: number;
//   test_desc: string;
//   test_created_at: string;
//   test_updated_at: string;
//   // ... other properties
// }

export const RetrieveFieldTestHandler = async (req: Request, res: Response) => {
  const test = "select * from test  where test_id= ?";
  const fielquery =
    "select field.* from testfields inner join field on testfields.fields_id = field.field_id where testfields.test_id = ?";

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
